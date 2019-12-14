import React, {Component} from "react";
import {connect} from 'react-redux';
import ScrollButton from './ScrollButton';
import LinesAnimation from './LinesAnimation';

class EarthSmall extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "General info",
            nicknameValue: "",
            emailValue: "",
            linkValue: "",
            textareaValue: "",
            isChecked: false,
            paymentPage: false,
            showLines: this.props.showLines
        }

        //this.onClick = this.onClick.bind(this);
        //this.onWheel = this.onWheel.bind(this);
    }

    // onChange (e) {
    //     console.log(e);
    //     this.setState({textareaValue: e.target.value})
    // }
    //
    // onClick (e) {
    //     console.log("show payment");
    //     this.setState({paymentPage: true});
    // }

    // onWheel(event){
    //     this.props.handleZoom()
    //     event.preventDefault()
    // }

    componentDidMount() {
        window.initialize();
    }

    render() {
        const { showLines } = this.state;
        if (showLines === true) {
            return (
                <div className="container-earth">
                    <div className="earth-map-outer" id="earth-outer" >
                        <LinesAnimation/>
                        <div className="earth-map-inner" id="chart-div"
                             onWheel={e => this.props.handleZoom(e)}
                             onDoubleClick={e => this.props.handleZoom(e)}
                        />
                        <ScrollButton/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container-earth">
                    <div className="earth-map-outer" id="earth-outer">
                        <div className="earth-map-inner" id="chart-div"
                             onWheel={e => this.props.handleZoom(e)}
                             onDoubleClick={e => this.props.handleZoom(e)}
                        />
                        <ScrollButton/>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        markers : state.markers
    }
}

export default connect(mapStateToProps, null)(EarthSmall)