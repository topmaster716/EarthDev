import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Components
import Title from "../components/Title";
import ScrollButton from "../components/ScrollButton";
import EarthGlobe from "../components/EarthGlobe";
import Footer from "../components/Footer";
import ButtonBig from "../../../components/buttons/ButtonBig";
import MarkerTypes from "../components/MarkerTypes";
import PopupInfo from "../components/PopupInfo";

//Styles
import {
  Container,
  ContainerEarth,
  ContainerButton,
  ContainerPopup
} from "./styles";

function PrimaryView(props) {
  const [details, setDetails] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [newMarker, setNewMarker] = useState(false);
  const [newMarkerStage, setNewMarkerStage] = useState("");
  const [showButton, setshowButton] = useState(false);
  const [btnTitle, setBtnTitle] = useState("Procced");

  function handleZoom(e) {
    setIsZoomed(!isZoomed);
    setshowButton(true);
  }

  function onClickBtn() {
    if (newMarker == false) {
      setNewMarker(true);
      setNewMarkerStage("ChooseMarker");
      setBtnTitle("Accept Location");
    } else if (newMarker == true && newMarkerStage == "ChooseMarker") {
      setNewMarkerStage("GeneralInfo");
      setshowButton(false);
    } else if (newMarker == true && newMarkerStage == "GeneralInfo") {
      setNewMarkerStage("PaymentInfo");
    } else if (newMarker == true && newMarkerStage == "PaymentInfo") {
      setNewMarkerStage("Congrats");
    } else {
      setNewMarker(false);
    }
    console.log(newMarkerStage);
  }

  console.log(newMarkerStage);
  // {details && (
  //     <div style={{
  //         background: 'white',
  //         position: 'absolute',
  //         fontSize: 20,
  //         top: 0,
  //         right: 0,
  //         padding: 12,
  //         }}>
  //         <p>{details}</p>
  //         <p>
  //             EVENT: type={event.type}, position=
  //              {JSON.stringify(event.pointerEventPosition)})
  //         </p>
  //     </div>
  // )}
  return (
    <Container>
      {isZoomed ? null : <Title />}
      <ContainerEarth
        onWheel={handleZoom}
        onDoubleClick={handleZoom}
        isZoomed={isZoomed}
      >
        <EarthGlobe />
        {isZoomed ? null : <ScrollButton />}
        <ContainerPopup>
          {newMarkerStage == "ChooseMarker" ? <MarkerTypes /> : null}
          {newMarkerStage == "GeneralInfo" ? (
            <PopupInfo onClick={onClickBtn} />
          ) : null}
        </ContainerPopup>
      </ContainerEarth>
      {showButton ? (
        <ContainerButton>
          <ButtonBig btnTitle={btnTitle} onClick={onClickBtn} />
        </ContainerButton>
      ) : null}
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
  dispatch: state.dispatch
});

// connect is redux function, to connect with react component
export default connect(mapStateToProps)(PrimaryView);
