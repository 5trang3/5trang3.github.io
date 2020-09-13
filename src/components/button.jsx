import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import PropTypes from 'prop-types'; // ES6

import { makeStyles } from '@material-ui/core/styles';

const CustomButton = ({ buttonName, buttonColor, textColor }) => {
  const useStyles = makeStyles(() => ({
    button: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
      color: textColor,
    },
  }));

  let button;

  switch (buttonName) {
    case 'home':
      button = <HomeOutlinedIcon />;
      break;
    case 'about':
      button = <InfoOutlinedIcon />;
      break;
    case 'showcase':
      button = <WorkOutlineOutlinedIcon />;
      break;
    case 'skills':
      button = <BookOutlinedIcon />;
      break;
    case 'github':
      button = <GitHubIcon />;
      break;
    case 'linkedin':
      button = <LinkedInIcon />;
      break;
    case 'mail':
      button = <MailOutlinedIcon />;
      break;
    default:
      button = null;
  }
  const [hover, toggleHover] = useState(false);
  const classes = useStyles();
  const renderButton = () => {
    if (hover) {
      return (
        <Button className={classes.button} disableRipple>
          {buttonName}
        </Button>
      );
    }
    return <IconButton color={buttonColor}>{button}</IconButton>;
  };
  return (
    <div
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      style={{
        width: '64px',
        height: '48px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {renderButton()}
    </div>
  );
};

CustomButton.defaultProps = {
  buttonColor: 'secondary',
  textColor: '#fff5eb',
};

CustomButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default CustomButton;
