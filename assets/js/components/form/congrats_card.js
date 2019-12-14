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
        display: table;
     } 
`

class CongratsCard extends React.Component {
    render() {
        const { children } = this.props;
            return (
                    <StyledCard>
                        {children}
                    </StyledCard>
            );
        }
}

export default CongratsCard;




