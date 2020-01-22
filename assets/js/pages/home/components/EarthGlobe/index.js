import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

// Lan: -90 <-> + 90
// Long: -180 <-> +180
var defaultMarkers = [
 {
    id: 1,
    city: 'Singapore',
    color: 'red',
    coordinates: [1.3521, 103.8198],
    value: 50,
  },
  {
    id: 2,
    city: 'New York',
    color: 'blue',
    coordinates: [40.73061, -73.935242],
    value: 25,
  },
  {
    id: 3,
    city: 'San Francisco',
    color: 'orange',
    coordinates: [37.773972, -122.431297],
    value: 35,
  },
  {
    id: 4,
    city: 'Beijing',
    color: 'gold',
    coordinates: [39.9042, 116.4074],
    value: 0,
  },
  {
    id: 5,
    city: 'London',
    color: 'green',
    coordinates: [51.5074, 0.1278],
    value: 80,
  },
  {
    id: 5,
    city: 'Somewhere',
    color: 'green',
    coordinates: [-90, 180],
    value: 80,
  }
];

function getTooltipContent(marker) {
  return `CITY: ${marker.city} (Value: ${marker.value}) x: ${event.clientX}, y: ${event.clientY}`;
}

function EarthGlobe(props) {
  const randomMarkers = defaultMarkers.map(marker => ({
    ...marker,
    value: Math.floor(Math.random() * 100)
  }));

  const [markers, setMarkers] = useState(randomMarkers);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  const [globe, setGlobe] = useState(null);
  //const { onClick } = props;

  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(getTooltipContent(marker));
    console.log(event);
  }

  function onDefocus(previousCoordinates, event) {
    console.log(event)
    setEvent({
      type: "DEFOCUS",
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(null);
  }

  function onMouseOutMarker(previousMarker, markerObject, event) {
    console.log(`This is x: ${event.clientX}, and y: ${event.clientY}`);
    setEvent({
      type: 'MOUSEOUT',
      previousMarker,
      previousMarkerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    })
  }

  function onClick(previousCoordinates, event) {
    console.log(`This is x: ${event.clientX}, and y: ${event.clientY}`)
    setEvent({
      type: "CLICK",
      alert: "Test"
    });
    console.log(event);
  }

  function onGetGlobeInstance(globe_instance) {
    setGlobe(globe_instance);
    // globe.schene._listeners.click();
    // console.log(globe);
  }

  if (globe) {
    console.log(globe);
    console.log(globe.renderer.getCurrentViewport());
  }

  return (
    <ReactGlobe
      markers={markers}
      markerOptions={{
        getTooltipContent
      }}
      // globeOptions={{
      //   enableBackground: false,
      //   // need to enable glow with our color, to remove white
      //   enableGlow: true,
      //   glowColor: "#17233e",
      //   enableClouds: false,
      //   texture: "http://localhost:4000/images/texture7.svg"
      // }}
      // cameraOptions={{
      //   autoRotateSpeed: 1,
      //   enableAutoRotate: props.autoRotate,
      //   enableRotate: true,
      //   //rotateSpeed: 0.5
      //   enableZoom: props.zoom,
      //   distanceRadiusScale: 10,
      //   maxDistanceRadiusScale: 15,
      //   zoomSpeed: 1
      // }}
      onClickMarker={onClickMarker}
      onDefocus={onDefocus}
      onMouseOutMarker={onMouseOutMarker}
      onClickOutMarker={onClick}
      onGetGlobeInstance={onGetGlobeInstance}
    />
  );
}

export default EarthGlobe;

// <button
//        style={{ position: "absolute", top: 0 }}
//        onClick={() => setMarkers(randomMarkers)}
//      >
//        Set markers
//      </button>
