import React from 'react';
import PropTypes from 'prop-types';

import FormStyle from './index.scss';

const Form = ( { formName, children, onSubmit }) => {
  return (
    <form name={formName} className="hcard-form" onSubmit={onSubmit}>
      { children }
    </form>
  );
}

// ---

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired
};



export default Form;