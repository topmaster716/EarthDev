import React from "react";
import MaterialTextField from "@material-ui/core/TextField";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const styles = theme => ({
  container: {
    width: "100%",

    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, " ", "-", " ", /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

class FormattedInputs extends React.Component {
  constructor() {
    super();

    this.state = {
      textmask: "-"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;

    e.persist();

    // this.setState({
    //   textmask: e.target.value
    // });

    onChange(e.target.value);
  }

  render() {
    const { classes, id, label, value, onChange, error, helperText } = this.props;
    const { textmask, numberformat } = this.state;

    return (
      <div className={classes.container}>
        <FormControl margin="normal" fullWidth id={id} error={error}>
          <InputLabel htmlFor="formatted-text-mask-input">{label}</InputLabel>
          <Input
            value={value}
            onChange={onChange}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
          <FormHelperText id="my-helper-text">{helperText}</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

FormattedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormattedInputs);

// class CodeField extends React.Component {
//   render() {
//     const {
//       id,
//       label,
//       value,
//       onChange,
//       error,
//       helperText,
//     } = this.props;

//     return (
//       <MaterialTextField
//         margin="normal"
//         fullWidth
//         id={id}
//         autoComplete={label}
//         type={type}
//         multiline={multiline}
//         rowsMax="5"
//         required={required}
//         label={label}
//         value={value}
//         onChange={onChange}
//         error={error}
//         helperText={helperText}
//         disabled={disabled}
//       />
//     );
//   }
// }

// export default TextField;
