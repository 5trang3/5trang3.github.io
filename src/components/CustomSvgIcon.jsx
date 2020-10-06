import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import svgIcons from '../images/svgIcons';

const CustomSvgIcon = ({
  icon, viewboxWidth, viewboxHeight,
}) => {
  const svgIconStyles = makeStyles({
    root: {
      margin: '0 12px 0 0',
    },
  });
  const svgIconClasses = svgIconStyles();
  const viewBox = `0 0 ${viewboxWidth} ${viewboxHeight}`;
  return (
    <SvgIcon viewBox={viewBox} fontSize="default" className={svgIconClasses.root}>
      {svgIcons[icon].paths.map((pathObj, index) => (
        <path d={pathObj.path} fill={svgIcons[icon].fills[index]} key={pathObj.index} />
      ))}
    </SvgIcon>
  );
};

CustomSvgIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  viewboxWidth: PropTypes.string,
  viewboxHeight: PropTypes.string,
};

CustomSvgIcon.defaultProps = {
  viewboxWidth: '128',
  viewboxHeight: '128',
};

export default CustomSvgIcon;
