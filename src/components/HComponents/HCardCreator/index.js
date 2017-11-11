import React from 'react';
import PropTypes from 'prop-types';

import HCardItem from '../HCardItem';
import HCardAvatar from '../HCardAvatar';
import HCardHeader from '../HCardHeader';
import HCardAddressCreator from '../HCardAddressCreator';

import HCardCreatorStyle from './index.scss';

const HCardCreator = ({
    avatar, givenName, surname, email, phone,
    street, houseName, suburb, state, postcode, country  
  }) => {
  return (
    <div id="vcard" className="vcard">
      <HCardHeader>
        <HCardItem>
          <div className="fn">
            {givenName} {surname}
          </div>
        </HCardItem>
        <HCardAvatar imgSource={avatar}/>
      </HCardHeader>

      <div className="hcard-body">
        <HCardItem label="Email">
          <a className="email" href={`mailto: ${email}`}>
            {email}
          </a>
        </HCardItem>
        <HCardItem label="Phone">
          <span className="tel">
            {phone}
          </span>
        </HCardItem>

        <HCardAddressCreator
          houseName={houseName}
          street={street}
          locality={suburb}
          region={state}
          postalCode={postcode}
          countryName={country}
        />
      </div>
    </div>
  );
}

// --

HCardCreator.defaultProps = {
  avatar: '../../..//assets/imgs/avatar.png'
};

HCardCreator.propTypes = {
  avatar: PropTypes.string,
  givenName: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  houseName: PropTypes.string,
  street: PropTypes.string,
  suburb: PropTypes.string,
  state: PropTypes.string,
  postcode: PropTypes.string,
  country: PropTypes.string
};

export default HCardCreator;