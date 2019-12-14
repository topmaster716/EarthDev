import React, {Component} from "react";
import {connect} from 'react-redux';
import EarthSmall from "./EarthSmall";
import ScrollButton from './ScrollButton';
import MarkerTypes from './MarkerTypes';
import reducer from "../reducers";
import Form from "../../../components/form/index"
import TextField from "../../../components/form/text_field"
import Title from "../../../components/form/title";
import Checkbox from "../../../components/form/checkbox";
import Button from "@material-ui/core/es/Button/Button";
import LinesAnimation from './LinesAnimation';

class Earth extends Component {
    // componentDidMount() {
    //     this.earth = am4core.create("chart-div", am4maps.MapChart);
    // }

    render() {
        return (
            <div className="container-earth">
                <div className="earth-map-outer" id="earth-outer">
                    <LinesAnimation/>
                    <div className="earth-map-inner" id="chart-div">
                    </div>
                    {/*<Form>*/}
                    {/*    <Title text={this.state.title}/>*/}
                    {/*    <TextField placeholder={'Enter your nickname'} helperText={'Please enter a valid nickname.'} label={"Nickname"} value={this.state.nicknameValue} onChange={this.onChange.bind(this)}/>*/}
                    {/*    <TextField placeholder={'Enter your e-mail'} helperText={'Please enter a valid nickname.'} label={"E-mail"} />*/}
                    {/*    <TextField placeholder={'Facebook or Instagram only'} helperText={'Please enter Facebook or Instagram link'} label={"Link (optional)"}/>*/}
                    {/*    <TextField placeholder={'Tell us how you are going to change the World'} label={"Message (optional)"}/>*/}
                    {/*    <Checkbox helperText={'I agree with Terms & Conditions'}/>*/}
                    {/*    <Button variant="contained" color="primary">Proceed 1 $</Button>*/}
                    {/*</Form>*/}
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

