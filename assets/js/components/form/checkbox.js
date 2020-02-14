import React from "react";
import { CheckboxContainer, CheckboxText, ErrorText } from "./styles";
import Checkbox from "@material-ui/core/Checkbox";

//import { Container, CheckboxStyled } from "./styles";

// const styles = theme => ({
//   container: {
//    width: '100%'
//   },
//   checkbox: {
//     marginLeft: '-12px' // Setting paddingLeft breaks ripple effect
//   },
//   helperText: {
//     marginTop: '0px',
//     width: '100%',
//     display: 'inline'
//   },
// });

// {      <ErrorText>You can display an error</ErrorText>}

function CheckboxForm(props) {
  const { checked, onChange, label, disabled, error_text } = props;

  return (
    <CheckboxContainer onChange={onChange} required component="fieldset" >
      <CheckboxText control={<Checkbox color="primary" />} label={label} />
       {checked ? null : <ErrorText>{error_text}</ErrorText>}
    </CheckboxContainer>
  );
}

export default CheckboxForm;
