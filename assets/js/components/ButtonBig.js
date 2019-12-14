import React, {Component} from "react";

class ButtonBig extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: false,
            btnTitle: props.btnTitle,
            btnId: props.btnId
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(event) {
        this.setState({isClicked: true})
        console.log('Button clicked' + this.state.isClicked)
        event.preventDefault()
    }
    render() {
        return (
            <button className="btn-big" type="button" id={this.state.btnId}>{this.state.btnTitle}</button>
        )
    }
}

export default ButtonBig