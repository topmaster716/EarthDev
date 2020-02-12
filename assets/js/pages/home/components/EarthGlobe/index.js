import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Actions from "../../actions";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import HeartMarker from "../../../../components/images/markers/HeartMarker";

//am4core.useTheme(am4themes_animated);

function EarthGlobe(props) {

    const { markers, dispatch } = props;

    console.log(dispatch)

    useEffect(
        () => {
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
            imageSeries.data = markers;
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

            //add ability to zoom choosen marker
            let currentActive;
            imageSeriesTemplate.events.on("hit", function(event) {
                currentActive = event.target;
                chart.zoomToMapObject(event.target, 14);
                //console.log(currentActive.dataItem.dataContext.id);
            });

            //create new marker
            chart.seriesContainer.events.on("hit", function(ev) {
                var coords = chart.svgPointToGeo(ev.svgPoint);
                var newMarker = imageSeries.mapImages.create();
                dispatch(Actions.setNewMarkerCoords(coords.latitude, coords.longitude));
                //marker.href = "./images/markers/heart.svg";
                //newMarker.latitude = coords.latitude;
                //newMarker.longitude = coords.longitude;
                console.log(newMarker.latitude, newMarker.longitude);
            });

            //console.log(marker);

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

    return <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>;
}
const mapStateToProps = state => ({
  dispatch: state.dispatch,
  home: state.home
});

// connect is redux function, to connect with react component
export default connect(mapStateToProps)(EarthGlobe);
