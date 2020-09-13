import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  appbar: {
    bottom: '0',
    top: 'auto',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <a href="https://github.com/5trang3">
            <CustomButton buttonName="github" />
          </a>
          <a href="https://www.linkedin.com/in/prasant-prasath">
            <CustomButton buttonName="linkedin" />
          </a>
          <a href="mailto:prasant.prasath@hotmail.com">
            <CustomButton buttonName="mail" />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};
