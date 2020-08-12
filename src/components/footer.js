import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'gatsby';
import Button from './button.js'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'center'
  },
  appbar: {
    bottom: '0',
    top: 'auto'
  }
}))


export default () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={ classes.appbar }>
        <Toolbar className={ classes.toolbar }>
          <a href='https://github.com/5trang3'>
            <Button buttonName='github'/>
          </a>
          <a href='https://www.linkedin.com/in/prasant-prasath'>
            <Button buttonName='linkedin'/>
          </a>
          <a href='mailto:prasant.prasath@hotmail.com'>
            <Button buttonName='mail'/>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  )
}
