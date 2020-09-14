import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const CustomSvgIcon = ({
  paths, fills, viewboxWidth, viewboxHeight,
}) => {
  const svgIconStyles = makeStyles((theme) => ({
    root: {
      padding: '5px',
      '&:hover': {
        border: `solid 2px ${theme.palette.secondary.main}`,
        cursor: 'pointer',
        borderRadius: '50%',
      },
    },
  }));
  const svgIconClasses = svgIconStyles();
  const viewBox = `0 0 ${viewboxWidth} ${viewboxHeight}`;
  return (
    <SvgIcon viewBox={viewBox} fontSize="large" className={svgIconClasses.root}>
      {paths.map((path, index) => (
        <path d={path} fill={fills[index]} />
      ))}
    </SvgIcon>
  );
};

CustomSvgIcon.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
  fills: PropTypes.arrayOf(PropTypes.string).isRequired,
  viewboxWidth: PropTypes.string,
  viewboxHeight: PropTypes.string,
};

CustomSvgIcon.defaultProps = {
  viewboxWidth: '128',
  viewboxHeight: '128',
};

export default CustomSvgIcon;
