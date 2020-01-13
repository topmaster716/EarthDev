function initialize() {
    localStorage.setItem("markers", JSON.stringify([{
        "id" : 1,
        "minZoomLevel": 2,
        "latitude": 48.856614,
        "longitude": 2.352222,
        "title": "Paris",
        "flag": "../images/markers/child.svg"
    }, {
        "id" : 2,
        "minZoomLevel": 2,
        "latitude": 40.712775,
        "longitude": -74.005973,
        "title": "New York",
        "flag": "../images/markers/home.svg"
    }, {
        "id" : 3,
        "minZoomLevel": 2,
        "latitude": 49.282729,
        "longitude": -123.120738,
        "title": "Vancouver",
        "flag": "../images/markers/plus.svg"
    }, {
        "id" : 4,
        "minZoomLevel": 4,
        "latitude": 48.138662613601866,
        "longitude": 33.70549553531656,
        "title": "Ukraine",
        "flag": "../images/markers/heart.svg"
    }, {
        "id" : 5,
        "minZoomLevel": 2,
        "latitude": 46.07977373604239,
        "longitude": 25.37655752967514,
        "title": "Romania",
        "flag": "../images/markers/plus.svg"
    }, {
        "id" : 6,
        "minZoomLevel": 8,
        "latitude": 24.564732817331784,
        "longitude": 49.07977373604239,
        "title": "Ukraine",
        "flag": "../images/markers/paw.svg"
    }, {
        "id" : 7,
        "minZoomLevel": 4,
        "latitude": 53.869652974559195,
        "longitude": 26.77797047369667,
        "title": "Belarus",
        "flag": "../images/markers/home.svg"
    }, {
        "id" : 8,
        "minZoomLevel": 2,
        "latitude": 58.869652974559195,
        "longitude": 22.77797047369667,
        "title": "Vancouver",
        "flag": "../images/markers/plus.svg"
    }, {
        "id" : 9,
        "minZoomLevel": 8,
        "latitude": 52.869652974559195,
        "longitude": 26.77797047369667,
        "title": "Vancouver",
        "flag": "../images/markers/child.svg"
    }, {
        "id" : 10,
        "minZoomLevel": 4,
        "latitude": 49.869652974559195,
        "longitude": 18.77797047369667,
        "title": "Vancouver",
        "flag": "../images/markers/heart.svg"
    }, {
        "id" : 11,
        "minZoomLevel": 2,
        "latitude": 49.282729,
        "longitude": -123.120738,
        "title": "Vancouver",
        "flag": "../images/markers/plus.svg"
    }, {
        "id" : 12,
        "minZoomLevel": 2,
        "latitude": 45.63035899978608,
        "longitude": 23.429164996686573,
        "title": "Vancouver",
        "flag": "../images/markers/child.svg"
    }, {
        "id" : 13,
        "minZoomLevel": 1,
        "latitude": 62.192445523607844,
        "longitude": 24.143974097624763,
        "title": "test",
        "flag": "../images/markers/home.svg"
    }, {
        "id" : 14,
        "minZoomLevel": 0,
        "latitude": 31.908634763877526,
        "longitude": 6.858527509522705,
        "title": "test",
        "flag": "../images/markers/paw.svg"
    }, {
        "id" : 15,
        "minZoomLevel": 1,
        "latitude": 40.0212019440729,
        "longitude": 33.514259897013275,
        "title": "test",
        "flag": "../images/markers/plus.svg"
    }, {
        "id" : 16,
        "minZoomLevel": 0,
        "latitude": 43.060860068648644,
        "longitude": -5.310562642360573,
        "title": "test",
        "flag": "../images/markers/heart.svg"
    }]))
    
    let storage = JSON.parse(localStorage.getItem("markers"));
    let chart = am4core.create("chart-div", am4maps.MapChart);
    let animation;
    let earthFull = document.getElementById("earth-full")
    let lines = document.getElementById("lines")

// Set map definition
    chart.geodata = am4geodata_worldLow;

// Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLongitude = -30;
    //chart.deltaLatitude = -20;
    chart.padding(20, 20, 20, 20);

// Set grabbing cursor
    //chart.cursorDownStyle = am4core.MouseCursorStyle.grabbing;

// // Create map polygon series
//     let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// // Make map load polygon (like country names) data from GeoJSON
//     polygonSeries.useGeodata = true;

// // Configure series
//     let polygonTemplate = polygonSeries.mapPolygons.template;
//     polygonTemplate.tooltipText = "{name}";
//     polygonTemplate.fill = am4core.color("#45427A");
//     polygonTemplate.stroke = am4core.color("#3B9EDA");

// Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#312E66");

    chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#3B9EDA");
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;

    let imageSeries = chart.series.push(new am4maps.MapImageSeries());
    let imageSeriesTemplate = imageSeries.mapImages.template;

    function createMarkers(){
        imageSeries.id = "markers";
        let marker = imageSeriesTemplate.createChild(am4core.Image);
        marker.propertyFields.href = "flag";
        marker.propertyFields.id = "id";
        marker.width = 50;
        marker.height = 50;
        marker.nonScaling = true;
        marker.cursor = "pointer";
        marker.tooltipText = "{title}";
        marker.horizontalCenter = "middle";
        marker.verticalCenter = "bottom";
        marker.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        imageSeriesTemplate.propertyFields.latitude = "latitude";
        imageSeriesTemplate.propertyFields.longitude = "longitude";
        imageSeries.events.on("datavalidated", updateImageVisibility);
        chart.events.on("zoomlevelchanged", updateImageVisibility);
        //chart.events.on("wheelup", zoomMapUp);
        //chart.events.on("wheeldown", zoomMapDown);
        imageSeries.data = storage;
    }

    // add ability to zoom choosen marker
    let currentActive;
    imageSeriesTemplate.events.on("hit", function (event) {
        if (earthFull) {
            currentActive = event.target;
            chart.zoomToMapObject(event.target, 14);
            console.log(currentActive.dataItem.dataContext.id)
        }
    })

    function updateImageVisibility(ev) {
        let chart = ev.target.baseSprite;
        let series = chart.map.getKey("markers")
        console.log(chart.zoomLevel);
        series.mapImages.each(function (image) {
            if (image.dataItem.dataContext.minZoomLevel) {
                if (image.dataItem.dataContext.minZoomLevel >= chart.zoomLevel) {
                    image.hide();
                } else {
                    image.show();
                }
            }
        })
    }

    // imageSeries.data = [{
    //     "minZoomLevel": 2,
    //     "latitude": 48.856614,
    //     "longitude": 2.352222,
    //     "title": "Paris",
    //     "flag": "../public/img/flags/preloader/heart.svg"
    // }, {
    //     "minZoomLevel": 2,
    //     "latitude": 40.712775,
    //     "longitude": -74.005973,
    //     "title": "New York",
    //     "flag": "../public/img/flags/preloader/home.svg"
    // }, {
    //     "minZoomLevel": 2,
    //     "latitude": 49.282729,
    //     "longitude": -123.120738,
    //     "title": "Vancouver",
    //     "flag": "../public/img/flags/preloader/plus.svg"
    // }, {
    //     "minZoomLevel": 2,
    //     "latitude": 48.138662613601866,
    //     "longitude": 33.70549553531656,
    //     "title": "Ukraine",
    //     "flag": "../public/img/flags/preloader/heart.svg"
    // }, {
    //     "minZoomLevel": 2,
    //     "latitude": 46.07977373604239,
    //     "longitude": 25.37655752967514,
    //     "title": "Romania",
    //     "flag": "../public/img/flags/preloader/plus.svg"
    // }, {
    //     "minZoomLevel": 2,
    //     "latitude": 24.564732817331784,
    //     "longitude": 49.07977373604239,
    //     "title": "Ukraine",
    //     "flag": "../public/img/flags/preloader/paw.svg"
    // }, {
    //     "minZoomLevel": 2,
    //     "latitude": 53.869652974559195,
    //     "longitude": 26.77797047369667,
    //     "title": "Belarus",
    //     "flag": "../public/img/flags/preloader/home.svg"
    // }, {
    //     "minZoomLevel": 2,
    //     "latitude": 58.869652974559195,
    //     "longitude": 22.77797047369667,
    //     "title": "Vancouver",
    //     "flag": "../public/img/flags/preloader/plus.svg"
    // }, {
    //     "minZoomLevel": 2,
    //     "latitude": 52.869652974559195,
    //     "longitude": 26.77797047369667,
    //     "title": "Vancouver",
    //     "flag": "../public/img/flags/preloader/child.svg"
    // }, {
    //     "minZoomLevel": 2,
    //     "latitude": 49.869652974559195,
    //     "longitude": 18.77797047369667,
    //     "title": "Vancouver",
    //     "flag": "../public/img/flags/preloader/heart.svg"
    // }, {
    //     "minZoomLevel": 2,
    //     "latitude": 49.282729,
    //     "longitude": -123.120738,
    //     "title": "Vancouver",
    //     "flag": "../public/img/flags/preloader/plus.svg"
    // }];

    // retrieving latitude/longitude of map click and setting new markers
    chart.seriesContainer.events.on("hit", function (ev) {
        console.log(chart.svgPointToGeo(ev.svgPoint), chart.zoomLevel, ev.target);
/*
        var coords = chart.svgPointToGeo(ev.svgPoint);
        var marker = imageSeries.mapImages.create();
        marker.latitude = coords.latitude;
        marker.longitude = coords.longitude;
        */
    });

    chart.seriesContainer.events.on("ready", function () {
        if (!earthFull && lines) {
            setTimeout(function () {
                createMarkers();
                animation = chart.animate({property: "deltaLongitude", to: 100000}, 20000000);
                lines.remove();
            }, 4500)

        } else if (!earthFull) {
            setTimeout(function () {
                createMarkers();
                animation = chart.animate({property: "deltaLongitude", to: 100000}, 20000000);
            }, 500)
        } else {
            createMarkers();
        }
    })

    chart.seriesContainer.events.on("down", function () {
        if (animation) {
            animation.stop();
        }
    })




// changing earth projection and set earth to full screen
//     let containerHeader = document.getElementById("container-header");
//     let containerEarth = document.getElementById("earth-outer");
//     let containerMap = document.getElementById("chart-div");
//     let containerFooter = document.getElementById("container-footer");
//     let scrollImage = document.getElementById("scroll-down");
//
//     function zoomMapUp() {
//         if (!(containerHeader.classList.contains("hidden"))) {
//             chart.goHome()
//             containerMap.classList.remove("earth-animation")
//             containerHeader.classList.add("hidden")
//             containerEarth.classList.add("earth-map-full", "earth-animation")
//             containerFooter.classList.add("hidden")
//             scrollImage.classList.add("hidden")
//         }
//     }
//
//     function zoomMapDown() {
//         if (chart.zoomLevel < 1.05) {
//             chart.goHome();
//             containerHeader.classList.remove("hidden")
//             containerEarth.classList.remove("earth-map-full", "earth-animation")
//             containerFooter.classList.remove("hidden")
//             scrollImage.classList.remove("hidden")
//             containerMap.classList.add("earth-animation")
//         }
//     }
}


