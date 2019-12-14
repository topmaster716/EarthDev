import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
  container: {
   width: '100%'
  },
  checkbox: {
    marginLeft: '-12px' // Setting paddingLeft breaks ripple effect
  },
  helperText: {
    marginTop: '0px',
    width: '100%',
    display: 'inline'
  },
});

class Checkbox extends React.Component {

  render() {
    const { 
      classes,
      checked,
      onChange,
      label,
      helperText,
      disabled
    } = this.props;

    return (
      <div className={classes.container} >
        <MaterialCheckbox
          value="checked"
          color="primary"
          className={classes.checkbox}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {label}
        <FormHelperText className={classes.helperText}>{helperText}</FormHelperText>
      </div>
    );
  }
}

Checkbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Checkbox);
