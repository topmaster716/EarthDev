import React, {Component} from "react";
import {connect} from 'react-redux';
import reducer from "../reducers";
import ScrollButton from './ScrollButton';
import LinesAnimation from './LinesAnimation';

class Earth extends Component (

    render() {
        return (
            <div className="container-earth">
                <div className="earth-map-outer" id="earth-outer">
                    <LinesAnimation/>
                    <div className="earth-map-inner" id="chart-div">
                    </div>
                    <ScrollButton />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        markers : state.markers
    }
}

export default connect(mapStateToProps, null)(Earth)

