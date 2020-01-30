import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import HeartMarker from "../../../../components/images/markers/HeartMarker";

//am4core.useTheme(am4themes_animated);

function EarthGlobe (props) {

    // this.state = {
    //   isZoomed: false,
    //   showLines: true
    // };


    useEffect(() => {
        let chart = am4core.create("chartdiv", am4maps.MapChart);
        let animation;
        chart.geodata = am4geodata_worldLow;

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
        chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#3B9EDA");
        chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;

// Create hover state and set alternative fill color
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#312E66");

        let imageSeries = chart.series.push(new am4maps.MapImageSeries());
        let imageSeriesTemplate = imageSeries.mapImages.template;

   
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
        //chart.events.on("wheelup", zoomMapUp);
        //chart.events.on("wheeldown", zoomMapDown);
         //imageSeries.data = storage;
        
// add ability to zoom choosen marker
        let currentActive;
        imageSeriesTemplate.events.on("hit", function (event) {
            currentActive = event.target;
            chart.zoomToMapObject(event.target, 14);
            console.log(currentActive.dataItem.dataContext.id)
        })

//show more markers on bigger zoom
        function updateImageVisibility(ev) {
            let chart = ev.target.baseSprite;
            let series = chart.map.getKey("markers");
            series.mapImages.each(function(image) {
                if (image.dataItem.dataContext.minZoomLevel) {
                    if (image.dataItem.dataContext.minZoomLevel > chart.zoomLevel) {
                        image.hide();
                    }
                    else {
                        image.show();
                    }
                }
            });
        }

        imageSeries.data = [{
            "minZoomLevel" : 1,
            "latitude": 48.856614,
            "longitude": 2.352222,
            "title": "Paris",
            "flag" : "./images/markers/paw.svg"
        }, {
            "minZoomLevel" : 2,
            "latitude": 40.712775,
            "longitude": -74.005973,
            "title": "New York",
            "flag" : "./images/markers/child.svg"
        }, {
            "minZoomLevel" : 1,
            "latitude": 49.282729,
            "longitude": -123.120738,
            "title": "Vancouver",
            "flag" : "./images/markers/paw.svg"
        }, {
            "minZoomLevel" : 2,
            "latitude": 48.138662613601866,
            "longitude": 33.70549553531656,
            "title": "Ukraine",
            "flag" : "./images/markers/heart.svg"
        }, {
            "minZoomLevel" : 3,
            "latitude": 46.07977373604239,
            "longitude": 25.37655752967514,
            "title": "Romania",
            "flag" : "./images/markers/plus.svg"
        }, {
            "minZoomLevel" : 1,
            "latitude": 24.564732817331784,
            "longitude": 49.07977373604239,
            "title": "Ukraine",
            "flag" : "./images/markers/paw.svg"
        }, {
            "minZoomLevel" : 4,
            "latitude": 53.869652974559195,
            "longitude": 26.77797047369667,
            "title": "Belarus",
            "flag" : "./images/markers/plus.svg"
        }, {
            "minZoomLevel" : 1,
            "latitude": 58.869652974559195,
            "longitude": 22.77797047369667,
            "title": "Vancouver",
            "flag" : "./images/markers/leaf.svg"
        }, {
            "minZoomLevel" : 4,
            "latitude": 52.869652974559195,
            "longitude": 26.77797047369667,
            "title": "Vancouver",
            "flag" : "./images/markers/plus.svg"
        }, {
            "minZoomLevel" : 1,
            "latitude": 49.869652974559195,
            "longitude": 18.77797047369667,
            "title": "Vancouver",
            "flag" : "./images/markers/paw.svg"
        }, {
            "minZoomLevel" : 1,
            "latitude": 49.282729,
            "longitude": -123.120738,
            "title": "Vancouver",
            "flag" : "./images/markers/leaf.svg"
        }];

// start and stop of animation
        chart.seriesContainer.events.on("ready", function () {
            animation = chart.animate({property: "deltaLongitude", to: 100000}, 20000000);   
        })

        chart.seriesContainer.events.on("down", function () {
            if (animation) {
                animation.stop();
            }
        })

// retrieving latitude/longitude of map click and setting new markers
        chart.seriesContainer.events.on("hit", function(ev) {
            console.log(chart.svgPointToGeo(ev.svgPoint), chart.zoomLevel);
            /*
            var coords = chart.svgPointToGeo(ev.svgPoint);
            var marker = imageSeries.mapImages.create();
            marker.latitude = coords.latitude;
            marker.longitude = coords.longitude;
            */
        });

    //this.chart = chart;
    }
// componentWillUnmount
    // return function cleanup() {
    //     if (chart) {
    //   chart.dispose();
    //     }
    // }
);


    


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

// Add dispatch from redux, for dispatching redux actions 
const mapStateToProps = state => ({
  dispatch: state.dispatch,
});

// connect is redux function, to connect with react component
export default connect(mapStateToProps)(EarthGlobe);
