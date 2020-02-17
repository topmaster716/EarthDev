import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Actions from "../actions";

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

  const { home, dispatch } = props;
  const { markers, currentMarker, markerTypes } = home;

  const [isZoomed, setIsZoomed] = useState(false);
  const [newMarker, setNewMarker] = useState(false);
  const [newMarkerStage, setNewMarkerStage] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [btnTitle, setBtnTitle] = useState("Proceed");
  const [selectedMarker, setSelectedMarker] = useState("");
  //const [newMarkerType, setNewMarkerType] = useState("");

  let stageData;

   function selectMarkerType(e) {
    //console.log(e.currentTarget.getAttribute("name"))
    dispatch(Actions.setNewMarkerType(e.currentTarget.getAttribute("name")));
  }

  //console.log(currentMarker)

  function handleZoom(e) {
    if (!isZoomed) {
      setIsZoomed(true);
      setShowButton(true);
      setBtnTitle("Proceed");
    } else if (isZoomed) {
      setIsZoomed(false);
      setShowButton(false);
      setNewMarkerStage("");
      setNewMarker(false);
    }
  }

  function wheelZoom(e) {
    if (!isZoomed && e.deltaY < 0) {
      setIsZoomed(true);
    }
  }

  function dblClickZoom(e) {
    if (e.type === "dblclick" && !isZoomed){
      setIsZoomed(true);
    }
  }

  console.log("isZoomed", isZoomed);
  // console.log("stage", newMarkerStage);
  // console.log("setShowButton", showButton);

  function closePopup() {
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

  function setStage() {
    if (newMarker == false) {
      setNewMarker(true);
      setSelectedMarker(false);
      setNewMarkerStage("ChooseMarker");
      setBtnTitle("Accept Location");
    } else if (newMarker && newMarkerStage == "ChooseMarker") {
      setNewMarkerStage("PaymentInfo");
      setBtnTitle("Proceed");
      setShowButton(false);
    } else if (newMarker && newMarkerStage == "GeneralInfo") {
      setNewMarkerStage("PaymentInfo");
    } else if (newMarker && newMarkerStage == "PaymentInfo") {
      setNewMarkerStage("Congrats");
    }
  }

  function setMarker() {
    //console.log();
  }

  function handleZoomNew(e) {
    //console.log("test");
    //console.log(e);
  }

  switch (newMarkerStage) {
    case "ChooseMarker":
      stageData = <MarkerTypes onClick={e => {selectMarkerType(e)}} markerTypes={markerTypes}/>;
      break;
    case "GeneralInfo":
      stageData = (
        <ContainerCentered>
          <PopupInfo onClick={setStage} closePopup={closePopup} />
        </ContainerCentered>
      );
      break;
    case "PaymentInfo":
      stageData = (
        <ContainerCentered>
          <PopupPayment onClick={setStage} closePopup={closePopup} />
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


  return (
    <Container isZoomed={isZoomed}>
      {isZoomed ? null : <ContainerLeft onClick={handleZoom} />}
      <ContainerEarth isZoomed={isZoomed} onWheel={e => wheelZoom(e)} onDoubleClick={e => {dblClickZoom(e)}}>
        {stageData}
        <EarthGlobe markers={markers} markerTypes={markerTypes} currentMarker={currentMarker} isZoomed={isZoomed}/>
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
          <ButtonBig btnTitle={btnTitle} onClick={setStage} />
        </ContainerButton>
      ) : null}
      {isZoomed ? null : <Footer />}
    </Container>
  );
}
/////

// PrimaryView.propTypes = {
//   router: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

// Add dispatch from redux, for dispatching redux actions

// <EarthGlobe autoRotate={autoRotate} onClick={openPopupMarker} />
const mapStateToProps = state => ({
  dispatch: state.dispatch,
  home: state.home
});

// connect is redux function, to connect with react component
export default connect(mapStateToProps)(PrimaryView);
