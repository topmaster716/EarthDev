import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MaterialTextField from "@material-ui/core/TextField";
import ReusableData from "../reusable_data";

const styles = theme => ({
  container: {
    width: "100%"
  },
  regionDropdown: {
    width: "100px",
    marginRight: "10px"
  },
  phoneNumber: {
    width: "calc(100% - 110px)"
  }
});

class PhoneField extends React.Component {
  constructor() {
    super();

    this.state = {
      isMobile: false
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    //var isIOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    var isAndroid = /(android)/i.test(navigator.userAgent);

    if (isAndroid) {
      this.setState({
        isMobile: true
      });
    }
  }

  // Safari desktop still allows alphabetic characters with type='number'
  // Manually checking values
  handleOnChange(e) {
    const { onChangeNumber } = this.props;

    e.persist(); // https://reactjs.org/docs/events.html#event-pooling
    var value = e.target.value;
    var regex = /^\d+$/; // http://regexlib.com/Search.aspx?k=integer

    // Allows only: positive integer or ''
    if (regex.test(value) || value == "") {
      onChangeNumber(value);
    }
  }

  render() {
    const {
      classes,
      idRegion,
      idNumber,
      required,
      labelRegion,
      labelNumber,
      valueRegion,
      valueNumber,
      onChangeRegion,
      error,
      helperText,
      disabledRegion,
      disabledNumber
    } = this.props;

    const { isMobile } = this.state;

    // To open number keyboard on mobile devices
    var field_type = isMobile ? "number" : "text";

    return (
      <div className={classes.container}>
        <MaterialTextField
          margin="normal"
          select
          id={idRegion}
          label={labelRegion}
          className={classes.regionDropdown}
          value={valueRegion}
          onChange={onChangeRegion}
          SelectProps={{ native: true }}
          error={error}
          disabled={disabledRegion}
        >
          {ReusableData.phone_regions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </MaterialTextField>
        <MaterialTextField
          margin="normal"
          type={field_type}
          required={required}
          id={idNumber}
          label={labelNumber}
          className={classes.phoneNumber}
          value={valueNumber}
          onChange={this.handleOnChange}
          error={error}
          helperText={helperText}
          disabled={disabledNumber}
        />
      </div>
    );
  }
}

PhoneField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PhoneField);
