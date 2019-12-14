import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="container-terms" id="container-footer">
                <div className="footer-left">
                    <span className="footer-text">@2019</span>
                    <span className="footer-text">All rights reserved</span>
                </div>
                <div className="footer-right">
                    <span className="footer-text"><a href="https://www.google.com/">Contact Us</a></span>
                    <span className="footer-link"><a href="https://www.google.com/">Terms and Conditions</a></span>
                </div>
            </footer>
        )
    }
}

export default Footer