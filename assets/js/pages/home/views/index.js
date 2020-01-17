import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Components
import ContainerLeft from "../components/ContainerLeft";
import ScrollButton from "../components/ScrollButton";
import EarthGlobe from "../components/EarthGlobe";
import Footer from "../components/Footer";
import ButtonBig from "../../../components/buttons/ButtonBig";
import MarkerTypes from "../components/MarkerTypes";
import PopupInfo from "../components/PopupInfo";
import PopupPayment from "../components/PopupPayment";
import PopupCongrats from "../components/PopupCongrats";
import PopupMark from "../components/PopupMark";
import ButtonBack from "../components/ButtonBack";

//Styles
import {
  Container,
  ContainerEarth,
  ContainerButton,
  ContainerCentered
} from "./styles";

function PrimaryView(props) {
  const [details, setDetails] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [newMarker, setNewMarker] = useState(false);
  const [newMarkerStage, setNewMarkerStage] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [btnTitle, setBtnTitle] = useState("Proceed");
  const [selectedMarker, setSelectedMarker] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [zoom, setZoom] = useState(false);
  console.log(isZoomed);

  let stageData;

  switch (newMarkerStage) {
    case "ChooseMarker":
      stageData = <MarkerTypes />;
      break;
    case "GeneralInfo":
      stageData = (
        <ContainerCentered>
          <PopupInfo onClick={onClickBtn} closePopup={closePopup} />
        </ContainerCentered>
      );
      break;
    case "PaymentInfo":
      stageData = (
        <ContainerCentered>
          <PopupPayment onClick={onClickBtn} closePopup={closePopup} />
        </ContainerCentered>
      );
      break;
    case "Congrats":
      stageData = (
        <ContainerCentered>
          <PopupCongrats closePopup={closePopup} />
        </ContainerCentered>
      );
      break;
    default:
      stageData = null;
      break;
  }

  console.log(newMarkerStage);
  console.log(stageData);

  function handleZoom(e) {
    setIsZoomed(!isZoomed);
    setShowButton(!showButton);
    setAutoRotate(false);
    setZoom(!zoom);
  }

  function closePopup(e) {
    if (newMarker == true && newMarkerStage == "Congrats") {
      setSelectedMarker(true);
      setNewMarker(false);
      setNewMarkerStage("");
      setShowButton(true);
    } else if (newMarker == false) {
      setSelectedMarker(false);
    } else {
      setNewMarker(false);
      setNewMarkerStage("");
      setShowButton(true);
    }
  }

  function openPopupMarker() {
    //console.log(selectedMarker);
    setSelectedMarker(true);
  }

  function onClickBtn() {
    //console.log(newMarkerStage);
    if (newMarker == false) {
      setNewMarker(true);
      setSelectedMarker(false);
      setNewMarkerStage("ChooseMarker");
      setBtnTitle("Accept Location");
    } else if (newMarker && newMarkerStage == "ChooseMarker") {
      setNewMarkerStage("GeneralInfo");
      setBtnTitle("Proceed");
      setShowButton(false);
    } else if (newMarker && newMarkerStage == "GeneralInfo") {
      setNewMarkerStage("PaymentInfo");
    } else if (newMarker && newMarkerStage == "PaymentInfo") {
      setNewMarkerStage("Congrats");
    }
  }

  return (
    <Container isZoomed={isZoomed}>
      {isZoomed ? null : <ContainerLeft onClick={handleZoom} />}
      <ContainerEarth
        //onWheel={handleZoom}
        onDoubleClick={handleZoom}
        isZoomed={isZoomed}
      >
        {stageData}
        <EarthGlobe autoRotate={autoRotate} zoom={zoom} />
        {selectedMarker ? (
          <ContainerCentered>
            <PopupMark closePopup={closePopup} />
          </ContainerCentered>
        ) : null}
        {isZoomed ? null : <ScrollButton />}
        {isZoomed ? <ButtonBack onClick={handleZoom} /> : null}
      </ContainerEarth>
      {showButton ? (
        <ContainerButton>
          <ButtonBig btnTitle={btnTitle} onClick={onClickBtn} />
        </ContainerButton>
      ) : null}
      {isZoomed ? null : <Footer />}
    </Container>
  );
}

// PrimaryView.propTypes = {
//   router: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

// Add dispatch from redux, for dispatching redux actions

// <EarthGlobe autoRotate={autoRotate} onClick={openPopupMarker} />
const mapStateToProps = state => ({
  dispatch: state.dispatch
});

// connect is redux function, to connect with react component
export default connect(mapStateToProps)(PrimaryView);
