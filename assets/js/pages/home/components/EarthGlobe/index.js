import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../../actions";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import HeartMarker from "../../../../components/images/markers/HeartMarker";

//am4core.useTheme(am4themes_animated);

class EarthGlobe extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    //console.log(this.props.markers)

    //let markerImageUrl
    // if (markerType.name === currentMarker.type){
    //     markerImageUrl = markerType.image
    //}
    //
    //console.log(markerObj)

    //console.log("before useEffect - currentMarker type", currentMarker.type)
    componentDidMount() {

        const { markers, markerTypes, currentMarker, dispatch, isZoomed } = this.props;

        let markerObj = this.props.markerTypes.find(markerType => markerType.name===this.props.currentMarker.type)
        console.log(markerObj)

            let chart = am4core.create("chartdiv", am4maps.MapChart);
            let animation;
            chart.geodata = am4geodata_worldLow;

            // Set projection
            chart.projection = new am4maps.projections.Orthographic();
            chart.panBehavior = "rotateLongLat";
            chart.deltaLongitude = -30;
            chart.padding(20, 20, 20, 20);

            // Create map polygon series
            let polygonSeries = chart.series.push(
                new am4maps.MapPolygonSeries()
            );

            // Make map load polygon (like country names) data from GeoJSON
            polygonSeries.useGeodata = true;

            // Configure series
            let polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = "{name}";
            polygonTemplate.fill = am4core.color("#45427A");
            polygonTemplate.stroke = am4core.color("#3B9EDA");
            chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color(
                "#3B9EDA"
            );
            chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;

            // Create hover state and set alternative fill color
            let hs = polygonTemplate.states.create("hover");
            hs.properties.fill = am4core.color("#312E66");

            // Create markers
            let imageSeries = chart.series.push(new am4maps.MapImageSeries());
            let imageSeriesTemplate = imageSeries.mapImages.template;
            imageSeries.data = this.props.markers;
            imageSeries.id = "markers";
            let marker = imageSeriesTemplate.createChild(am4core.Image);
            marker.propertyFields.href = "flag";
            marker.width = 50;
            marker.height = 50;
            marker.nonScaling = true;
            marker.tooltipText = "{title}";
            marker.horizontalCenter = "middle";
            marker.verticalCenter = "bottom";
            imageSeriesTemplate.propertyFields.latitude = "latitude";
            imageSeriesTemplate.propertyFields.longitude = "longitude";
            imageSeries.events.on("datavalidated", updateImageVisibility);
            chart.events.on("zoomlevelchanged", updateImageVisibility);
            chart.seriesContainer.events.on("hit", addNewMarker);

            //add ability to zoom choosen marker
            let currentActive;
            imageSeriesTemplate.events.on("hit", function(event) {
                currentActive = event.target;
                chart.zoomToMapObject(event.target, 14);
                //console.log(currentActive.dataItem.dataContext.id);
            });

        

            //console.log(markers)
            //console.log("after useEffect - currentMarker type", currentMarker.type)

            //create new marker
            function addNewMarker(ev) {
                var coords = chart.svgPointToGeo(ev.svgPoint);
                var newMarker = imageSeries.mapImages.create();
               // console.log(imageSeries.mapImages)
                //var markerImgUrl = 
                dispatch(Actions.setNewMarkerCoords(coords.latitude, coords.longitude));
                //Вот сюда мне нужно передать markerObj.value, который я получу в зависимотсти от currentMarker
                // marker.href = "images/markers/heart.svg"
                // newMarker.latitude = coords.latitude;
                // newMarker.longitude = coords.longitude;
                
            }; 

            

            //show more markers on bigger zoom
            function updateImageVisibility(ev) {
                let chart = ev.target.baseSprite;
                let series = chart.map.getKey("markers");
                //console.log(series);
                series.mapImages.each(function(image) {
                    if (
                        image.dataItem.dataContext.minZoomLevel >
                        chart.zoomLevel
                    ) {
                        image.hide();
                    } else {
                        image.show();
                    }
                });
                console.log(chart.zoomLevel);
            }

            // start and stop of animation
            chart.seriesContainer.events.on("ready", function() {
                animation = chart.animate(
                    { property: "deltaLongitude", to: 100000 },
                    20000000
                );
            });

            chart.seriesContainer.events.on("down", function() {
                if (animation) {
                    animation.stop();
                }
            });

            this.chart = chart;
        }

        componentWillUnmount() {
            if (this.chart) {
                this.chart.dispose();
            }
        }

    // handleZoom(e) {
    //   if (e.type === "dblclick" || e.deltaY < 0) {
    //     this.setState(state => ({
    //       zoomedIn: true
    //     }));
    //   }
    // }

    // removeZoom() {
    //   this.setState(state => ({
    //     zoomedIn: false
    //   }));
    // }

    // hideLines(){
    //   this.setState(state => ({
    //     showLines: false
    //   }));
    // }

    render() {
        
        return (
          <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>
        );
      }
    }

const mapStateToProps = state => ({
      dispatch: state.dispatch,
      home: state.home
});

// connect is redux function, to connect with react component
export default connect(mapStateToProps)(EarthGlobe);
