import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

var defaultMarkers = [
  {
    id: 5,
    city: "Kyiv",
    color: "green",
    coordinates: [10.0, 30.0],
    value: 80
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

  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
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
    setEvent({
      type: "DEFOCUS",
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(null);
  }

  function onClick(event) {
    console.log("test");
    setEvent({
      type: "CLICK",
      alert: "Test"
    });
    console.log(event);
  }

  return (
    <div style={{ height: "100%" }}>
      <ReactGlobe
        markers={markers}
        markerOptions={{
          getTooltipContent
        }}
        globeOptions={{
          enableBackground: false,
          // need to enable glow with our color, to remove white
          enableGlow: true,
          glowColor: "#17233e",
          enableClouds: false,
          texture: "http://localhost:4000/images/texture7.svg"
        }}
        cameraOptions={{
          autoRotateSpeed: 1,
          enableAutoRotate: props.autoRotate,
          enableRotate: true,
          //rotateSpeed: 0.5
          enableZoom: props.zoom,
          distanceRadiusScale: 10,
          maxDistanceRadiusScale: 15,
          zoomSpeed: 1
        }}
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
        onClick={onClick}
      />
      <button
        style={{ position: "absolute", top: 0 }}
        onClick={() => setMarkers(randomMarkers)}
      >
        Set markers
      </button>
    </div>
  );
}

export default EarthGlobe;
