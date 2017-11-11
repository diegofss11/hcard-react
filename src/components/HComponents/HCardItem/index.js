import React from 'react';
import PropTypes from 'prop-types';

import HCardItemStyle from './index.scss';

const HCardItem = ({label, children}) => {
  const displayClass = label? '' :'hide';
  return (
    <div className="hcard-row">
      <span className={`card-item-label ${displayClass}`}>
        {label}
      </span>
      
      {children}
    </div>
  );
}

// --

HCardItem.propTypes = {
  label: PropTypes.string
};

export default HCardItem;