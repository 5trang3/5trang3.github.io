import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}))

export default ({ buttonName, align }) => {
  let button;
  switch (buttonName) {
    case 'home':
      button = <HomeOutlinedIcon/>;
      break;
    case 'about':
      button = <InfoOutlinedIcon/>;
      break;
    case 'showcase':
      button = <WorkOutlineOutlinedIcon/>;
      break;
    case 'skills':
      button = <BookOutlinedIcon/>;
      break;
    case 'github':
      button = <GitHubIcon/>;
      break;
    case 'linkedin':
      button = <LinkedInIcon/>;
      break;
    case 'mail':
      button = <MailOutlinedIcon/>;
      break;
  }
  const [hover, toggleHover] = useState(false);
  const classes = useStyles();
  let renderButton = () => {
    if (hover) {
      return (
        <Button className={ classes.button } disableRipple>{ buttonName }</Button>
      )
    }
    else {
      return (
        <IconButton>
          { button }
        </IconButton>
      )
    }
  }
  return (
    <div onMouseEnter={ () => toggleHover(true)} onMouseLeave={ () => toggleHover(false)} style={{ width: '64px', height: '48px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
      { renderButton() }
    </div>
  )
}
