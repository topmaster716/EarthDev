import React from "react";
//import PropTypes from "prop-types";
// import Container from '@material-ui/core/Container';
// import styled from 'styled-components';
//
//
// const StyledForm = styled(Container)`
//   .MuiContainer-root {
//       max-width: 352px;
//       border: 0;
//       background-color: #FFFFFF;
//       border-radius: 4px;
//       z-index: 4;
//   }
// `
//
// class Form extends React.Component {
//   render() {
//     const { classes, children } = this.props;
//
//     return (
//       <StyledForm
//         noValidate
//         autoComplete="on"
//         onKeyPress={this.props.onKeyPress}
//       >
//         {children}
//       </StyledForm>
//     );
//   }
// }
//
// Form.propTypes = {
//   classes: PropTypes.object.isRequired
// };
//
// export default Form;


import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "304px",
    margin: "auto",
    padding: "24px",
    border: "0",
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    zIndex: "4",
    //[theme.breakpoints.up("sm")]: {},
  }
});

class Form extends React.Component {
  render() {
    const { classes, children } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="on"
        onKeyPress={this.props.onKeyPress}
      >
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Form);
