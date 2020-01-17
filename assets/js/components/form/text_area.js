import React from "react";
import { StyledTextArea } from "./styles";

function TextArea(props) {
    const {
        id,
        type,
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
        <StyledTextArea
            margin="normal"
            fullWidth
            autoComplete={label}
            type={type}
            multiline
            rowsMax="6"
            rows="6"
            required={required}
            label={label}
            value={value}
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

export default TextArea;
