import React, { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

const CustomAlert = ({ severity, message }) => {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <Alert severity={severity} onClose={() => setIsOpen(false)}>
      {message}
    </Alert>
  ) : null;
};

CustomAlert.propTypes = {
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default CustomAlert;
