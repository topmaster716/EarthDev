import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import styled from 'styled-components';

const StyledCard = styled(Card)`
     && {
        width: 348px;
        background: #ffffff;
        border-radius: 4px;
        padding: 24px;
        box-sizing: border-box;
     } 
`

class MarkCard extends React.Component {
    render() {
        const { children } = this.props;
            return (
                <div className="container-popup-mark">
                    <StyledCard>
                        {children}
                    </StyledCard>
                    <div className="popup-svg">
                        <svg width="348" height="79" viewBox="0 0 348 79" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M138 39.2118L174 78.4236L208 39.2118L348 0H0L138 39.2118Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            );
        }
}

export default MarkCard;




