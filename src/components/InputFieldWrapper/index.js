import React from 'react';
import PropTypes from 'prop-types';

import InputFieldWrapperStyle from './index.scss';
import Label from '../Label';

const InputFieldWrapper = ({label, name, type, onChange}) => {
  return (
    <div className="input-field-wrapper">
      <Label forField={name} label={label} />
      {<input
        className="input-field"
        name={name}
        id={name}
        onChange={onChange}
        type={type}
      />}
    </div>
  );
}

//--

InputFieldWrapper.defaultProps = {
  type: 'text'
};

InputFieldWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default InputFieldWrapper;