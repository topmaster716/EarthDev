import React from "react";
import { FormTextField } from "./styles";

function TextField(props) {
  const {
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
  } = props;

  return (
    <FormTextField
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

export default TextField;
