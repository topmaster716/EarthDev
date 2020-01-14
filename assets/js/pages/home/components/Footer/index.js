import React, {Component} from "react";

import { 
    FooterContainer, 
    BlockLeft, 
    FooterText, 
    BlockRigth, 
    FooterLink, 
    Link  
} from "./styles"

class Footer extends Component {
    render() {
        return (
            <FooterContainer id="container-footer">
                <BlockLeft>
                    <FooterText>@2019</FooterText>
                    <FooterText>All rights reserved</FooterText>
                </BlockLeft>
                <BlockRigth>
                    <FooterText><Link href="/">Contact Us</Link></FooterText>
                    <FooterLink><Link href="/">Terms and Conditions</Link></FooterLink>
                </BlockRigth>
            </FooterContainer>
        )
    }
}

export default Footer