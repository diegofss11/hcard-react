import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyle from './index.scss';

const Button = ({text, styleClass, type, onClick}) => {
  return (
    <button className={`button ${styleClass}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

// --
Button.defaultProps = {
  type: 'button'
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;