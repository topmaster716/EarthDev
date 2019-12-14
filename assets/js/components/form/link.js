import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  containerLink: {
    display: "inline-block",
    marginTop: "14px",
  },
  popupLink: {
    color: "#035ADF",
    lineHeight: "24px",
  },
  popupIcon: {
    paddingRight: "20px",
  }
});

class Link extends React.Component {
  render() {
    const { classes, text, link, onClick, icon } = this.props;

    return (
      <div className={classes.containerLink}>
          <a className={classes.popupLink} onClick={onClick} href={link} target="_blank">
            <img className={classes.popupIcon} src={icon} alt="icon"/>
            {text}
          </a>
      </div>
    );
  }
}

Link.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Link);
