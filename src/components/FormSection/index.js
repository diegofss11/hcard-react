import React from 'react';
import PropTypes from 'prop-types';

import FormSectionStyle from './index.scss';

const FormSection = ({ sectionName, children }) => {
  return (
    <div className="form-section">
      <span className="form-section-name">
        {sectionName}
      </span>
      {children}
    </div>
  );
}

// --

FormSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormSection;