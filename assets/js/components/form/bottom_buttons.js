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
  leftButton: {
    color: "rgba(0, 0, 0, 0.54)",
    padding: "8px 2px",
    float: "left"
  },
  rightButton: {
    color: "white",
    padding: "8px 0px",
    float: "right"
  }
});

function BottomButtons(props) {
  const {
    classes,
    onClickLeft,
    onClickRight,
    textLeft,
    textRight,
    disabledLeft,
    disabledRight
  } = props;

  // Render only if needed
  let left_btn;
  if (textLeft && onClickLeft) {
    left_btn = (
      <MaterialButton
        tabIndex="-1"
        onClick={onClickLeft}
        className={classes.leftButton}
        disabled={disabledLeft}
      >
        {textLeft}
      </MaterialButton>
    );
  }

  return (
    <div className={classes.container}>
      {left_btn}
      <MaterialButton
        tabIndex="-1"
        variant="contained"
        color="primary"
        onClick={onClickRight}
        className={classes.rightButton}
        disabled={disabledRight}
      >
        {textRight}
      </MaterialButton>
    </div>
  );
}

BottomButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(BottomButtons);
