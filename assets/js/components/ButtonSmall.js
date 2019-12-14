import React, {Component} from "react";

class ButtonSmall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btnTitle: props.btnTitle,
            btnId: props.btnId
        };
    }
    render() {
        return (
            <button className="btn-small" type="button" id={this.state.btnId}>{this.state.btnTitle}</button>
        )
    }
}

export default ButtonSmall