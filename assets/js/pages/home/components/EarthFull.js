import React, {Component} from "react";
import ButtonSmall from "../../../components/ButtonSmall";
import PopupInfo from "./PopupInfo";
import PopupPayment from "./PopupPayment";

class EarthFull extends Component {
    constructor(){
        super();
        this.state = {
            title: "General info",
            nicknameValue: "",
            emailValue: "",
            linkValue: "",
            textareaValue: "",
            isChecked: false,
        }
    }

    onChange (e) {
        console.log(e);
        this.setState({textareaValue: e.target.value})
    }

    componentDidMount() {
        window.initialize();
    }

    render() {
        const buttonEarth = {
            btnId: "earth-btn",
            btnTitle: "Proceed"
        }
        return (
            <React.Fragment>
                <div className="container-earth">
                    <div className="earth-map-outer-full" id="earth-full">
                        <div className="earth-map-inner" id="chart-div"/>
                    </div>
                </div>
                <ButtonSmall btnId={buttonEarth.btnId} btnTitle={buttonEarth.btnTitle}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        markers : state.markers
    }
}

export default EarthFull