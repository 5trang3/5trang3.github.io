import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'gatsby';

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
    <div>
      <AppBar>
        <Toolbar className={ classes.toolbar }>
          <Link to='/'>
            <IconButton edge='start'>
              <HomeOutlinedIcon/>
            </IconButton>
          </Link>
          <div>
            <Link to='/about/'>
              <IconButton>
                <InfoOutlinedIcon/>
              </IconButton>
            </Link>
            <Link to='/skills/'>
              <IconButton>
                <WorkOutlineOutlinedIcon/>
              </IconButton>
            </Link>
            <Link to='/showcase/'>
              <IconButton>
                <BookOutlinedIcon/>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  )
}
