import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Title from "../../../../components/form/title";
import Typography from "@material-ui/core/Typography";
import Link from "../../../../components/form/link";
import CongratsCard from "../../../../components/form/congrats_card";

const styles = theme => ({
    popupText: {
        lineHeight: "24px",
        color: " #081124",
        marginBottom: "2px"
    }
});

class PopupCongrats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Congratulations!",
            description: "Your mark was successfully added!",
            markerText: "Link",
            markerLink: "https://www.facebook.com/",
            shareText: "Share this message on Facebook",
            shareLink: "http://192.168.31.171:8080/",
            showPopup: true,
            linkIcon: "../../../../images/popup/link.png",
            shareIcon: "../../../../images/popup/share.png"
        };
    }

    render() {
        const { classes, closePopup } = this.props;
        return (
            <CongratsCard>
                <Title text={this.state.title} closePopup={closePopup} />
                <Typography className={classes.popupText}>
                    Your mark was successfully added!
                </Typography>
                <Link
                    text={this.state.markerText}
                    link={this.state.markerLink}
                    icon={this.state.linkIcon}
                />
                <Link
                    text={this.state.shareText}
                    link={this.state.markerLink}
                    icon={this.state.shareIcon}
                    style={{ paddingTop: "20px" }}
                />
            </CongratsCard>
        );
    }
}

PopupCongrats.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PopupCongrats);
