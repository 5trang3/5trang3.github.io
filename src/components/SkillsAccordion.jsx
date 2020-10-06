import React from 'react';
import PropTypes from 'prop-types';
import SkillsAccordionItem from './SkillsAccordionItem';

const SkillsDisplay = ({ skills }) => (
  <div style={{ width: '50%' }}>
    {skills.map((skill) => (
      <React.Fragment key={`${skill.icon}-accordion-item`}>
        <SkillsAccordionItem skill={skill} />
      </React.Fragment>
    ))}
  </div>
);

SkillsDisplay.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default SkillsDisplay;
