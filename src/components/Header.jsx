import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <CustomButton buttonName="home" />
          </Link>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <Link to="/about/">
              <CustomButton buttonName="about" />
            </Link>
            <Link to="/skills/">
              <CustomButton buttonName="skills" />
            </Link>
            <Link to="/showcase/">
              <CustomButton buttonName="showcase" />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
