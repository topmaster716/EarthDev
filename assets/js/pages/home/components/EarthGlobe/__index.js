import React from "react";
import { connect } from "react-redux";
// import Title from "../components/Title";
// import Footer from "../components/Footer";
// import EarthSmall from "../components/EarthSmall";
// import EarthFull from "../components/EarthFull";
// import ButtonBack from "../components/ButtonBack";
// import PopupMark from "../components/PopupMark";
// import PopupCongrats from "../components/PopupCongrats";
// import PopupInfo from "../components/PopupInfo";
// import ButtonSmall from "../../../components/ButtonSmall";
// import MarkerTypes from "../components/MarkerTypes";
// import PopupPayment from "../components/PopupPayment";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4geodata_worldLow from "@amcharts/amcharts4/maps/worldLow";

//am4core.useTheme(am4themes_animated);

class EarthGlobe extends React.Component {
  constructor(props) {
    super(props);
    // Component default state
    this.state = {
      zoomedIn: false,
      showLines: true
    };

    // This binding is necessary to make `this` work in the callback
    this.handleZoom = this.handleZoom.bind(this);
    this.removeZoom = this.removeZoom.bind(this);
    this.hideLines = this.hideLines.bind(this);
  }

  componentDidMount() {
    let chart = am4core.create("chartdiv", am4maps.MapChart);
//     chart.geodata = am4geodata_worldLow;

// Set projection
        chart.projection = new am4maps.projections.Orthographic();
        chart.panBehavior = "rotateLongLat";
        chart.deltaLongitude = -30;
        chart.padding(20,20,20,20);

// Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

// Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#45427A");
        polygonTemplate.stroke = am4core.color("#3B9EDA");

// // Create hover state and set alternative fill color
//         let hs = polygonTemplate.states.create("hover");
//         hs.properties.fill = am4core.color("#312E66");

//         chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#3B9EDA");
//         chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;

//         let imageSeries = chart.series.push(new am4maps.MapImageSeries());
//         imageSeries.id = "markers";
//         let imageSeriesTemplate = imageSeries.mapImages.template;
//         let marker = imageSeriesTemplate.createChild(am4core.Image);
//         marker.propertyFields.href = "flag";
//         marker.width = 50;
//         marker.height = 50;
//         marker.nonScaling = true;
//         marker.tooltipText = "{title}";
//         marker.horizontalCenter = "middle";
//         marker.verticalCenter = "bottom";
//         imageSeriesTemplate.propertyFields.latitude = "latitude";
//         imageSeriesTemplate.propertyFields.longitude = "longitude";
//         imageSeries.events.on("datavalidated", updateImageVisibility);
//         chart.events.on("zoomlevelchanged", updateImageVisibility);

// //show more markers on bigger zoom
//         function updateImageVisibility(ev) {
//             let chart = ev.target.baseSprite;
//             let series = chart.map.getKey("markers");
//             series.mapImages.each(function(image) {
//                 if (image.dataItem.dataContext.minZoomLevel) {
//                     if (image.dataItem.dataContext.minZoomLevel >= chart.zoomLevel) {
//                         image.hide();
//                     }
//                     else {
//                         image.show();
//                     }
//                 }
//             });
//         }

//         imageSeries.data = [{
//             "minZoomLevel" : 2,
//             "latitude": 48.856614,
//             "longitude": 2.352222,
//             "title": "Paris",
//             "flag" : "../public/img/flags/preloader/heart.svg"
//         }, {
//             "minZoomLevel" : 2,
//             "latitude": 40.712775,
//             "longitude": -74.005973,
//             "title": "New York",
//             "flag" : "../public/img/flags/preloader/home.svg"
//         }, {
//             "minZoomLevel" : 2,
//             "latitude": 49.282729,
//             "longitude": -123.120738,
//             "title": "Vancouver",
//             "flag" : "../public/img/flags/preloader/plus.svg"
//         }, {
//             "minZoomLevel" : 2,
//             "latitude": 48.138662613601866,
//             "longitude": 33.70549553531656,
//             "title": "Ukraine",
//             "flag" : "../public/img/flags/preloader/heart.svg"
//         }, {
//             "minZoomLevel" : 2,
//             "latitude": 46.07977373604239,
//             "longitude": 25.37655752967514,
//             "title": "Romania",
//             "flag" : "../public/img/flags/preloader/plus.svg"
//         }, {
//             "minZoomLevel" : 2,
//             "latitude": 24.564732817331784,
//             "longitude": 49.07977373604239,
//             "title": "Ukraine",
//             "flag" : "../public/img/flags/preloader/paw.svg"
//         }, {
//             "minZoomLevel" : 2,
//             "latitude": 53.869652974559195,
//             "longitude": 26.77797047369667,
//             "title": "Belarus",
//             "flag" : "../public/img/flags/preloader/home.svg"
//         }, {
//             "minZoomLevel" : 2,
//             "latitude": 58.869652974559195,
//             "longitude": 22.77797047369667,
//             "title": "Vancouver",
//             "flag" : "../public/img/flags/preloader/plus.svg"
//         }, {
//             "minZoomLevel" : 2,
//             "latitude": 52.869652974559195,
//             "longitude": 26.77797047369667,
//             "title": "Vancouver",
//             "flag" : "../public/img/flags/preloader/child.svg"
//         }, {
//             "minZoomLevel" : 2,
//             "latitude": 49.869652974559195,
//             "longitude": 18.77797047369667,
//             "title": "Vancouver",
//             "flag" : "../public/img/flags/preloader/heart.svg"
//         }, {
//             "minZoomLevel" : 2,
//             "latitude": 49.282729,
//             "longitude": -123.120738,
//             "title": "Vancouver",
//             "flag" : "../public/img/flags/preloader/plus.svg"
//         }];

// // retrieving latitude/longitude of map click and setting new markers
//         chart.seriesContainer.events.on("hit", function(ev) {
//             console.log(chart.svgPointToGeo(ev.svgPoint), chart.zoomLevel);
//             /*
//             var coords = chart.svgPointToGeo(ev.svgPoint);
//             var marker = imageSeries.mapImages.create();
//             marker.latitude = coords.latitude;
//             marker.longitude = coords.longitude;
//             */
//         });

    this.chart = chart;
  }

componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }


  // TODO: check if zoomIn, not just any zoom (i.e. zoomOut) DONE, pls check)
  handleZoom(e) {
    if ((e.type === 'dblclick') || (e.deltaY < 0)) {
      this.setState(state => ({
        zoomedIn: true
      }));
    }
  }

  removeZoom(){
    this.setState(state => ({
      zoomedIn: false
    }));
  }

  hideLines(){
    this.setState(state => ({
      showLines: false
    }));
  }

  render() {
    // const { router, dispatch } = this.props;
    // const { zoomedIn } = this.state;

    // let componentsToRender;
    // if (zoomedIn === false) {
    //   componentsToRender = 
    //     <React.Fragment>
    //       <Title/>
  
    //       <EarthSmall showLines={this.state.showLines} handleZoom={this.handleZoom}/>
    //       <Footer/>
    //     </React.Fragment>;
    // } else {
    //   componentsToRender = <React.Fragment><ButtonBack removeZoom={this.removeZoom} hideLines={this.hideLines}/><EarthFull/></React.Fragment>;
    // }

    return (
      <div 
        className="container h100per w100per"
        //onWheel={e => this.handleZoom(e)}
        //onDoubleClick={e => this.handleZoom(e)}
      >
        <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>
      </div>
    )
  }
}

// Add dispatch from redux, for dispatching redux actions 
const mapStateToProps = state => ({
  dispatch: state.dispatch,
});

// connect is redux function, to connect with react component
export default connect(mapStateToProps)(EarthGlobe);
