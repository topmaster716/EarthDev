import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Title from "../components/Title";
import Footer from "../components/Footer";
import EarthSmall from "../components/EarthSmall";
import EarthFull from "../components/EarthFull";
import ButtonBack from "../components/ButtonBack";
import PopupMark from "../components/PopupMark";
import PopupCongrats from "../components/PopupCongrats";
import PopupInfo from "../components/PopupInfo";
import ButtonSmall from "../../../components/ButtonSmall";
import MarkerTypes from "../components/MarkerTypes";
import PopupPayment from "../components/PopupPayment";
import ScrollButton from '../components/ScrollButton';

import ReactGlobe from 'react-globe';


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
];


function getTooltipContent(marker) {
  return `CITY: ${marker.city} (Value: ${marker.value})`;
}

function PrimaryView() {
  const randomMarkers = defaultMarkers.map(marker => ({
    ...marker,
    value: Math.floor(Math.random() * 100),
  }));
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: 'CLICK',
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(getTooltipContent(marker));
  }
  function onDefocus(previousCoordinates, event) {
    setEvent({
      type: 'DEFOCUS',
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(null);
  }

  return (
     <div 
        className="container h100per w100per"
        //onWheel={e => this.handleZoom(e)}
        //onDoubleClick={e => this.handleZoom(e)}
      >
      <Title/>
        <div className="container-earth">
            <div className="earth-map-outer" id="earth-outer">
                 <ReactGlobe
                    markers={markers}
                    markerOptions={{
                      getTooltipContent,
                    }}
                    globeOptions={{
                      // texture: `./images/map.png`,
                      enableBackground: false,
                      // need to enable glow with our color, to remove white
                      enableGlow: true,
                      glowColor: "#17233E"
                    }}
                    cameraOptions={{
                      autoRotateSpeed: 1,
                      enableAutoRotate: true,
                      enableRotate: true,
                      rotateSpeed: 0.5,
                    }}
                    onClickMarker={onClickMarker}
                    onDefocus={onDefocus}
                  />
                  {details && (
                    <div
                      style={{
                        background: 'white',
                        position: 'absolute',
                        fontSize: 20,
                        top: 0,
                        right: 0,
                        padding: 12,
                      }}>
                      <p>{details}</p>
                      <p>
                        EVENT: type={event.type}, position=
                        {JSON.stringify(event.pointerEventPosition)})
                      </p>
                    </div>
                  )}
                <ScrollButton/>
            </div>
        </div>

      </div>
  );
}

// PrimaryView.propTypes = {
//   router: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };


// Add dispatch from redux, for dispatching redux actions 
const mapStateToProps = state => ({
  dispatch: state.dispatch,
});

// connect is redux function, to connect with react component
export default connect(mapStateToProps)(PrimaryView);
