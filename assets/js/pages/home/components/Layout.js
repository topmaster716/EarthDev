import React, {Component} from "react";
import Title from './Title'
import Footer from './Footer'
import Earth from './Earth'
import PopupInfo from './PopupInfo'

class Layout extends Component {
    render() {
        if (true) {
            return (
                <><Title/><PopupInfo /><Earth/><Footer/></>
            )
        } else {
            return (
                <><Title/><Earth/><Footer/></>
            )
        }
    }
}

export default Layout

