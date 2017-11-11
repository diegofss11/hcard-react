import React from 'react';
import PropTypes from 'prop-types';

import HCardItem from '../HCardItem';
import HCardFormattedAddressItem from '../HCardFormattedAddressItem';

const HCardAddressCreator = ({
    houseName, street, locality, region,
    postalCode, countryName
  }) => {
  return (
    <div className="adr">
      <HCardFormattedAddressItem
        houseName={houseName}
        street={street}
        locality={locality}
        region={region}
      />
      
      <div className="row-groupped">
        <HCardItem label="Postcode">
          <span className="postal-code">
            {postalCode}
          </span>
        </HCardItem>
        <HCardItem label="Country">
          <span className="country-name">
            {countryName}
          </span>
        </HCardItem>
      </div>
    </div>
  );
}

// --

HCardAddressCreator.propTypes = {
  houseName: PropTypes.string,
  street: PropTypes.string,
  locality: PropTypes.string,
  region: PropTypes.string,
  postalCode: PropTypes.string,
  countryName: PropTypes.string
};

export default HCardAddressCreator;