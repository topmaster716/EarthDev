import React from 'react';
// import Typography from "@material-ui/core/Typography";
// import {Close} from "@material-ui/icons";
// import styled from 'styled-components';
//
//
// const StyledTitle = styled(Typography)`
//
// `
//
// class Title extends React.Component {
//
//   render() {
//     const { text } = this.props;
//
//     return (
//       <StyledTitle>
//         <Typography variant="h6" color="inherit" >
//           {text}
//         </Typography>
//         <Close/>
//       </StyledTitle>
//     );
//   }
// }
//
// export default Title;

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Close} from "@material-ui/icons";

const styles = theme => ({
  container: {
      margin: '0',
      width: '100%',
      position: "relative",
      marginBottom: "14px"
  },
  formTitle: {
      fontStyle: "normal",
      fontWeight: "200",
      fontSize: "24px",
      color: "#081124",
  },
  formBtn: {
      minWidth: "0%",
      position: "absolute",
      top: "0",
      right: "0",
      padding: "6px 0px",
  }
});

class Title extends React.Component {

  render() {
    const { classes, text } = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="h6" color="inherit" className={classes.formTitle}>
            {text}
        </Typography>
        <Button className={classes.formBtn}>
            <Close/>
        </Button>
      </div>
    );
  }
}

Title.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Title);
