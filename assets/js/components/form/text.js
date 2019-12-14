import React, {Component} from "react";
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledText = styled(Typography)`
     && {
        line-height: 24px;
        color: #081124;
        margin-bottom: 16px;
     } 
     .see-more {
        line-height: 24px;
        color: #035ADF;
     }
     
     .see-more:hover {
       cursor: pointer
     }
`

class Text extends Component {
    render() {
        let showMoreText = this.props.seeMore
        const { text } = this.props;
        if (!showMoreText) {
            return (
                <StyledText>{text.slice(0, 150)}...<span className="see-more" onClick={e => this.props.showMore(e)}> See more</span></StyledText>
            )
        } else {
            return (
                <StyledText>{text}<span className="see-more" onClick={e => this.props.showMore(e)}> See less</span></StyledText>
            )
        }
    }
}

export default Text