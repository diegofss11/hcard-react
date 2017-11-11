import React from 'react';

import HCardFormattedAddressItem from '../../../../src/components/HComponents/HCardFormattedAddressItem';

describe('<HCardFormattedAddressItem />', () => {
  it('renders correctly given the props', () => {
    const hCardFormattedAddressItem = shallow(
      <HCardFormattedAddressItem
        houseName='house 1'
        street='Arden Street'
        locality='Coogee'
        region='Sydney'
      />
    );

    expect(hCardFormattedAddressItem.find('.street-address').text()).to.equal('house 1 Arden Street');
    expect(hCardFormattedAddressItem.find('.locality').text()).to.equal('Coogee');
    expect(hCardFormattedAddressItem.find('.region').text()).to.equal('Sydney');
  });

  describe('hCard-compliant',() => {
    let hCardFormattedAddressItem = null
    
    beforeEach(() => {
      hCardFormattedAddressItem= shallow(<HCardFormattedAddressItem />);
    })

    it('contains class name as `address-item`', () => {
      expect(hCardFormattedAddressItem.find('.address-item')).to.have.length(1);
    });

    it('contains class name as `street-address`', () => {
      expect(hCardFormattedAddressItem.find('.street-address')).to.have.length(1);
    });

    it('contains class name as `locality`', () => {
      expect(hCardFormattedAddressItem.find('.locality')).to.have.length(1);
    });

    it('contains class name as `region`', () => {
      expect(hCardFormattedAddressItem.find('.region')).to.have.length(1);
    });
  });
});