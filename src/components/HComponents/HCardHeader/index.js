import React from 'react';
import PropTypes from 'prop-types';

import HCardHeaderStyle from './index.scss';

const HCardHeader = ({ children }) => {
  return (
    <div className="hcard-header">
      {children}
    </div>
  );
}

// --

HCardHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default HCardHeader;