import React from "react";
import MaterialTextField from "@material-ui/core/TextField";
import styled from "styled-components";

const StyledTextField = styled(MaterialTextField)`
  .MuiFormLabel-root {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 12px;
    background: #ffffff;
    padding-right: 6px;
  }
  .MuiFormControl-marginNormal {
    margin-top: 9px;
    margin-bottom: 9px;
  }
`;

// const styles = theme => ({
//   input: {
//     border: "0.75px solid #C4C4C4",
//     boxSizing: "border-box",
//     borderRadius: "4px",
//     padding: "12px 24px 0"
//   },
//   placeholder: {
//     fontWeight: "bold",
//   },
//   label: {
//     color: "#494949",
//   }
//
// });

class TextField extends React.Component {
  render() {
    const {
      id,
      type,
      name,
      multiline,
      required,
      label,
      value,
      onChange,
      error,
      helperText,
      placeholder,
      disabled
    } = this.props;

    return (
      <StyledTextField
        margin="normal"
        fullWidth
        autoComplete={label}
        type={type}
        multiline={multiline}
        rowsMax="1"
        required={required}
        label={label}
        value={value}
        name={name}
        onChange={onChange}
        error={error}
        helperText={helperText}
        disabled={disabled}
        placeholder={placeholder}
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
    );
  }
}

export default TextField;
