import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

var defaultMarkers = [
  {
    id: 1,
    city: "Singapore",
    color: "red",
    coordinates: [1.3521, 103.8198],
    value: 50
  },
  {
    id: 2,
    city: "New York",
    color: "blue",
    coordinates: [40.73061, -73.935242],
    value: 25
  },
  {
    id: 3,
    city: "San Francisco",
    color: "orange",
    coordinates: [37.773972, -122.431297],
    value: 35
  },
  {
    id: 4,
    city: "Beijing",
    color: "gold",
    coordinates: [39.9042, 116.4074],
    value: 0
  },
  {
    id: 5,
    city: "London",
    color: "green",
    coordinates: [51.5074, 0.1278],
    value: 80
  }
];

function getTooltipContent(marker) {
  return `CITY: ${marker.city} (Value: ${marker.value})`;
}

function EarthGlobe() {
  const randomMarkers = defaultMarkers.map(marker => ({
    ...marker,
    value: Math.floor(Math.random() * 100)
  }));

  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);

  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(getTooltipContent(marker));
  }

  function onDefocus(previousCoordinates, event) {
    setEvent({
      type: "DEFOCUS",
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(null);
  }
  return (
    <ReactGlobe
      markers={markers}
      markerOptions={{
        getTooltipContent
      }}
      globeOptions={{
        // texture: `./images/map.png`,
        enableBackground: false,
        // need to enable glow with our color, to remove white
        enableGlow: false,
        enableClouds: false,
        texture: "https://moto.kiev.ua/users/wely/test/world_1.svg"
      }}
      cameraOptions={{
        autoRotateSpeed: 1,
        enableAutoRotate: true,
        enableRotate: true,
        rotateSpeed: 0.5
      }}
      onClickMarker={onClickMarker}
      onDefocus={onDefocus}
    />
  );
}

export default EarthGlobe;
