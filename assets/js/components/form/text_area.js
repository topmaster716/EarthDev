import React from "react";
import MaterialTextField from "@material-ui/core/TextField";
import styled from "styled-components";

const StyledTextField = styled(MaterialTextField)`
    .MuiOutlinedInput-multiline {
        height: 140px;
    }
    .MuiFormLabel-root {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 12px;
        background: #ffffff;
        padding-right: 6px;
    }
    .MuiFormHelperText-contained {
        position: absolute;
        right: 8px;
        bottom: 8px;
        font-weight: bold;
        font-size: 12px;
        line-height: 20px;
        color: #4c91fa;
    }
    .MuiFormControl-marginNormal {
        margin-top: 9px;
        margin-bottom: 9px;
    }
`;

class TextArea extends React.Component {
    render() {
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
        } = this.props;

        return (
            <StyledTextField
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
}

export default TextArea;
