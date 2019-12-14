import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const styles = theme => ({
  paperContainer: {
    [theme.breakpoints.down("xs")]: {
      margin: "0px",
      marginTop: "auto",
      maxHeight: "calc(100% - 48px)",
      width: "100%"
    }
  },
  // !!Iphone 5C rubberband if set paddingBottom
  contentContainer: {
    overflowY: "scroll",
    WebkitOverflowScrolling: "touch",
    paddingLeft: "20px",
    paddingRight: "20px"
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function BottomDialog(props) {
  const { classes, title, body, open, onClose, closeText } = props;

  return (
    <Dialog
      keepMounted
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      classes={{
        paper: classes.paperContainer //For setting internal paper css
      }}
      TransitionComponent={Transition}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{title}</DialogTitle>

      <div className={classes.contentContainer}>
        <DialogContentText>{body}</DialogContentText>
      </div>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          {closeText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

BottomDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomDialog);
