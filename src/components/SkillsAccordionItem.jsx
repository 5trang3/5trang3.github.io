import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import svgIcons from '../images/svgIcons';
import CustomSvgIcon from './CustomSvgIcon';

const SkillsAccordionItem = ({ skill }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <CustomSvgIcon icon={skill.icon} />
      <Typography>{svgIcons[skill.icon].name}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography align="left">{skill.description}</Typography>
    </AccordionDetails>
  </Accordion>
);

SkillsAccordionItem.propTypes = {
  skill: PropTypes.shape({
    icon: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default SkillsAccordionItem;
