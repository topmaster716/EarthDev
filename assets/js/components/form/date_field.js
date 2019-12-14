import React, { useState, useEffect } from "react";
import MaterialTextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

function DateField(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    var isIOS =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    var isAndroid = /(android)/i.test(navigator.userAgent);
    setIsMobile(isIOS || isAndroid);
  }, []);

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    //yyyy-MM-dd
    return [year, month, day].join("-");
  }

  function handleOnChange(e) {
    // Material uses Synthenic events
    // Need to persist to access the value for native pickers
    // https://reactjs.org/docs/events.html#event-pooling
    if (isMobile) {
      e.persist();
      onChange(e.target.value);
    }
    // Formats data to same format as native pickers: yyyy-MM-dd
    else {
      onChange(formatDate(e));
    }
  }

  const {
    id,
    required,
    label,
    value,
    onChange,
    error,
    helperText,
    disabled
  } = props;

  // Native pickers for iOS/Android
  // Date picker lib for desktop browsers: Safari doesn't have native picker, Chrome looks shit
  return isMobile ? (
    <MaterialTextField
      margin="normal"
      fullWidth
      type="date"
      required={required}
      id={id}
      autoComplete={label}
      label={label}
      value={formatDate(value)}
      onChange={handleOnChange}
      error={error}
      helperText={helperText}
      disabled={disabled}
      InputLabelProps={{
        shrink: true // Puts label on top
      }}
    />
  ) : (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        margin="normal"
        fullWidth
        openToYearSelection={true}
        format="dd/MM/yyyy"
        required={required}
        id={id}
        autoComplete={label}
        label={label}
        value={value}
        onChange={handleOnChange}
        error={error}
        helperText={helperText}
        disabled={disabled}
      />
    </MuiPickersUtilsProvider>
  );
}

export default DateField;
