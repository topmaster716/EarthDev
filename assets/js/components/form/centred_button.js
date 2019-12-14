import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import MaterialButton from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: "auto",
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%"
  }
});

function CentredButton(props) {
  const { classes, text, onClick } = props;

  return (
    <MaterialButton
      color="primary"
      onClick={onClick}
      className={classes.button}
    >
      {text}
    </MaterialButton>
  );
}

CentredButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CentredButton);
