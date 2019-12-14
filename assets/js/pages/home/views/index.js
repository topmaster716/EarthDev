import React from "react";
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

class PrimaryView extends React.Component {
  constructor(props) {
    super(props);
    // Component default state
    this.state = {
      zoomedIn: false,
      showLines: true
    };

    // This binding is necessary to make `this` work in the callback
    this.handleZoom = this.handleZoom.bind(this);
    this.removeZoom = this.removeZoom.bind(this);
    this.hideLines = this.hideLines.bind(this);
  }

  // TODO: check if zoomIn, not just any zoom (i.e. zoomOut) DONE, pls check)
  handleZoom(e) {
    if ((e.type === 'dblclick') || (e.deltaY < 0)) {
      this.setState(state => ({
        zoomedIn: true
      }));
    }
  }

  removeZoom(){
    this.setState(state => ({
      zoomedIn: false
    }));
  }

  hideLines(){
    this.setState(state => ({
      showLines: false
    }));
  }

  render() {
    const { router, dispatch } = this.props;
    const { zoomedIn } = this.state;

    let componentsToRender;
    if (zoomedIn === false) {
      componentsToRender = <React.Fragment><Title/><PopupInfo/><EarthSmall showLines={this.state.showLines} handleZoom={this.handleZoom}/><Footer/></React.Fragment>;
    } else {
      componentsToRender = <React.Fragment><ButtonBack removeZoom={this.removeZoom} hideLines={this.hideLines}/><EarthFull/></React.Fragment>;
    }

    return (
      <div 
        className="container h100per w100per"
        //onWheel={e => this.handleZoom(e)}
        //onDoubleClick={e => this.handleZoom(e)}
      >
        {componentsToRender}
      </div>
    )
  }
}

PrimaryView.propTypes = {
  router: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};


// Add dispatch from redux, for dispatching redux actions 
const mapStateToProps = state => ({
  dispatch: state.dispatch,
});

// connect is redux function, to connect with react component
export default connect(mapStateToProps)(PrimaryView);
