import React from "react";
import Footer from "./home/components/Footer";
import ButtonSmall from "../components/ButtonSmall";

const button = {
    btnId: "not-found-btn",
    btnTitle: "Go back"
}

class NotFoundView extends React.Component {
  render() {

    return (
      <div className="container-not-found">
          <h2 className="not-found-header">404</h2>
          <p className="not-found-text">The page is lost, but you always <br/>can <srtong>go back</srtong></p>
          <ButtonSmall btnTitle={button.btnTitle} btnId={button.btnId}/>
          <img className="not-found-image" src="../../images/earth404.png" alt="page not found"/>
          <Footer/>
      </div>
    );
  }
}

export default NotFoundView;
