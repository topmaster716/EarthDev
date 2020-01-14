import React, {Component} from "react";

class ButtonBack extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(event) {
        this.props.removeZoom()
        this.props.hideLines()
        event.preventDefault()
    }

    render() {
        return (
            <div className="container-btn-back" onClick={this.onClick}>
                <button className="btn-back">
                    <div className="btn-back-arrow">
                        <svg width="49" height="20" viewBox="0 0 49 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M49 9.8H2M2 9.8L10.5 1M2 9.8L10.5 19" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <span className="btn-back-text">Go back</span>
                </button>
            </div>
        )
    }
}

export default ButtonBack