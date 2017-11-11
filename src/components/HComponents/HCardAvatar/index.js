import React from 'react';
import PropTypes from 'prop-types';

import HCardAvatarStyle from './index.scss';

const HCardAvatar = ({imgSource}) => {
  return (
    <div className="avatar-wrapper">
      <img src={imgSource} alt="avatar" className="photo" /> 
    </div>
  );
}

// --

HCardAvatar.propTypes = {
  imgSource: PropTypes.string
};

export default HCardAvatar;