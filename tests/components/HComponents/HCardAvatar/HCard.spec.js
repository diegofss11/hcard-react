import React from 'react';

import HCardAvatar from '../../../../src/components/HComponents/HCardAvatar';

describe('<HCardAvatar />', () => {
  it('renders correctly the children elements', () => {
    const hCardAvatar = shallow(<HCardAvatar imgSource="www.test.com.au" />);

    expect(hCardAvatar.find('.avatar-wrapper img').prop('src')).to.equal('www.test.com.au');
  });

  it('contains class name as `photo` - hCard-compliant', () => {
    const hCardAvatar = shallow(<HCardAvatar imgSource="www.test.com.au" />);

    expect(hCardAvatar.find('img .photo')).to.have.length(1);
  });
});