import React from 'react';
import PropTypes from 'prop-types';

import FormActionStyle from './index.scss';

const FormAction = ({children}) => {
  return (
    <div className="form-bottom">
      {children}
    </div>
  );
}

// --

FormAction.propTypes = {
  children: PropTypes.node
};

export default FormAction;