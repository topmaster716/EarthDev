import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    margin: 'auto',
    width: '100%'
  },
  formTitle: {
    width: '100%',
    marginBottom: '10px',
    textAlign: 'center'
  },
});

class SecondaryTitle extends React.Component {

  render() {
    const { classes, text } = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="subtitle2" color="inherit" className={classes.formTitle}>
          {text}
        </Typography>
      </div>
    );
  }
}

SecondaryTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SecondaryTitle);
