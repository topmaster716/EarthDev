import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Title from "../components/Title";
import ScrollButton from '../components/ScrollButton';
import EarthGlobe from '../components/EarthGlobe';

import ReactGlobe from 'react-globe';

function PrimaryView() {

  const [details, setDetails] = useState(null);
  
  return (
     <div 
        className="container h100per w100per"
        //onWheel={e => this.handleZoom(e)}
        //onDoubleClick={e => this.handleZoom(e)}
      >
      <Title/>
        <div className="container-earth">
            <div className="earth-map-outer" id="earth-outer">
              <EarthGlobe />
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
