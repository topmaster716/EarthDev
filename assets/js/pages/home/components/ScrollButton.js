import React, {Component} from "react";

class ScrollButton extends Component {
    render() {
        return (
            <div className="earth-scroll-down" id="scroll-down">
                <svg width="33" height="53" viewBox="0 0 33 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="1" className="scroll-down-anim">
                        <path d="M12 10L12 15" stroke="#FFFFFF"/>
                    </g>
                    <rect x="0.5" y="0.5" width="23" height="39" rx="11.5" stroke="#A7ABB6"/>
                </svg>
            </div>
        )
    }
}

export default ScrollButton