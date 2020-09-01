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
    justifyContent: 'space-between'
  }
}))


export default () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar className={ classes.toolbar }>
          <Link to='/'>
            <Button buttonName='home'/>
          </Link>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <Link to='/about/'>
              <Button buttonName='about'/>
            </Link>
            <Link to='/skills/'>
              <Button buttonName='skills'/>
            </Link>
            <Link to='/showcase/'>
              <Button buttonName='showcase'/>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  )
}
