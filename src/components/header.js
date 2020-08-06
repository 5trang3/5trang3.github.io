import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

// Import icons:
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

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
    <AppBar>
      <Toolbar className={ classes.toolbar }>
        <IconButton edge='start'>
          <HomeOutlinedIcon/>
        </IconButton>
        <div>
          <IconButton>
            <InfoOutlinedIcon/>
          </IconButton>
          <IconButton>
            <WorkOutlineOutlinedIcon/>
          </IconButton>
          <IconButton>
            <BookOutlinedIcon/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}
