import React from 'react';
import PropTypes from 'prop-types';

import LabelStyle from './index.scss';

const Label = ({label, forField}) => {
  return(
    <label
      className="label"
      htmlFor={forField}
    >
      {label}
    </label>
  );
}

// --

Label.propTypes = {
  label: PropTypes.string.isRequired,
  forField: PropTypes.string.isRequired
};

export default Label;