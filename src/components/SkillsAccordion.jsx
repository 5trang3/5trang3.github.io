import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SkillsAccordionItem from './SkillsAccordionItem';

const SkillsDisplay = ({ skills }) => {
  const isSmallWidth = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const accordionStyles = { marginBottom: '30px' };
  accordionStyles.width = isSmallWidth ? '100%' : '50%';
  return (
    <div style={accordionStyles}>
      {skills.map((skill) => (
        <React.Fragment key={`${skill.icon}-accordion-item`}>
          <SkillsAccordionItem skill={skill} />
        </React.Fragment>
      ))}
    </div>
  );
};

SkillsDisplay.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default SkillsDisplay;
