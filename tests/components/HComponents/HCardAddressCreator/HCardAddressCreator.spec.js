import React from 'react';

import HCardAddressCreator from '../../../../src/components/HComponents/HCardAddressCreator';

describe('<HCardAddressCreator />', () => {
  it('renders correctly given the props', () => {
    const hCardAddressCreator = mount(
      <HCardAddressCreator
        houseName='house 1'
        street='Arden Street'
        locality='Coogee'
        region='Sydney'
        postalCode='2200'
        countryName='Australia'
      />
    );

    expect(hCardAddressCreator.find('.postal-code').text()).to.equal('2200');
    expect(hCardAddressCreator.find('.country-name').text()).to.equal('Australia');
    expect(hCardAddressCreator.find('.street-address').text()).to.equal('house 1 Arden Street');
    expect(hCardAddressCreator.find('.locality').text()).to.equal('Coogee');
    expect(hCardAddressCreator.find('.region').text()).to.equal('Sydney');
  });

  describe('hCard-compliant',() => {
    let hCardAddressCreator = null
    
    beforeEach(() => {
      hCardAddressCreator= shallow(<HCardAddressCreator />);
    })

    it('contains class name as `adr`', () => {
      expect(hCardAddressCreator.find('.adr')).to.have.length(1);
    });

    it('contains class name as `postal-code`', () => {
      expect(hCardAddressCreator.find('.postal-code')).to.have.length(1);
    });

    it('contains class name as `country-name`', () => {
      expect(hCardAddressCreator.find('.country-name')).to.have.length(1);
    });
  });
});