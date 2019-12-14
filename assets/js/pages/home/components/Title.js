import React, {Component} from "react";
import ButtonBig from '../../../components/ButtonBig'

const button = {
    btnId: "proceed-btn",
    btnTitle: "Proceed"
}

class Title extends Component {
    render() {
        return (
            <div className="container-header" id="container-header">
                <h1 className="header-title">Leave your mark</h1>
                <h2 className="header-content">Choose your marker</h2>
                <h2 className="header-content">Tell your story about helping this World.</h2>
                <h2 className="header-content">Be the one in a million.</h2>
                <ButtonBig btnTitle={button.btnTitle} btnId={button.btnId}/>
            </div>
        )
    }
}

export default Title