import React from 'react';
import PropTypes from 'prop-types';

import HCardFormattedAddressItemStyle from './index.scss';

import HCardItem from '../HCardItem';

const HCardFormattedAddressItem = ({houseName, street, locality, region = ''}) => {
  return (
    <div className="address-item">
      <HCardItem label="Address">
        <span className="street-address">
          {houseName} {street}
        </span>
      </HCardItem>
      <HCardItem>
        <span className="locality">
          {locality}
        </span>
        {locality && region? ', ': ''}
        <span className="region">
          {region}
        </span>
      </HCardItem>
    </div>
  );
}

// --

HCardFormattedAddressItem.propTypes = {
  houseName: PropTypes.string,
  street: PropTypes.string,
  locality: PropTypes.string,
  region: PropTypes.string
};

export default HCardFormattedAddressItem;