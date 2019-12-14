import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MaterialButton from "@material-ui/core/Button";

const styles = theme => ({
    container: {
        width: "100%",
        marginTop: "10px",
        marginBottom: "10px"
    },
    button: {
        color: "#FFFFFF",
        textTransform: "capitalize",
        margin: "0 auto",
        width: "198px",
        height: "40px",
        background: "#4C91FA",
        borderRadius: "4px",
        fontFamily: "Montserrat-Bold",
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        textAlign: "center"
    }
});

function PopupButton(props) {
    const {
        classes,
        onClick,
        text,
    } = props;


    return (
        <div className={classes.container}>
            <MaterialButton
                variant="contained"
                color="primary"
                onClick={onClick}
                className={classes.button}
            >
                {text}
            </MaterialButton>
        </div>
    );
}

PopupButton.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PopupButton);
