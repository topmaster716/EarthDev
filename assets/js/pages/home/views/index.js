import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Components
import Title from "../components/Title";
import ScrollButton from '../components/ScrollButton';
import EarthGlobe from '../components/EarthGlobe';
import Footer from '../components/Footer';

//Styles
import { Container, ContainerEarth, ContainerEarthOuter } from "./styles";

function PrimaryView(props) {

  const [details, setDetails] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  function handleZoom(e){
      console.log(e);
      setIsZoomed(!isZoomed);
  }
  
  return (
     <Container>
      {isZoomed ? null : <Title/>}
        <ContainerEarth 
            onWheel={handleZoom}
            onDoubleClick={handleZoom}
        >
            <ContainerEarthOuter isZoomed={isZoomed}>
                <EarthGlobe />
                  {details && (
                      <div style={{
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
                {isZoomed ? null : <ScrollButton/>} 
              </ContainerEarthOuter>
          </ContainerEarth>
          <Footer />
      </Container>
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
