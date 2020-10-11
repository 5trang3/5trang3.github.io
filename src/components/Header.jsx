import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import CustomButton from './CustomButton';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const secondaryColor = theme.palette.secondary.main;
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <AniLink to="/" cover bg={secondaryColor}>
            <CustomButton buttonName="home" />
          </AniLink>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <AniLink to="/about/" cover direction="right">
              <CustomButton buttonName="about" />
            </AniLink>
            <AniLink to="/skills/" cover direction="right">
              <CustomButton buttonName="skills" />
            </AniLink>
            <AniLink to="/showcase/" cover direction="right">
              <CustomButton buttonName="showcase" />
            </AniLink>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
