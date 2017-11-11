import React from 'react';

import HCardCreator from '../../../../src/components/HComponents/HCardCreator';

describe('<HCardCreator />', () => {
  it('renders correctly given the props', () => {
    const hCardCreator = mount(
      <HCardCreator
        avatar='www.test.com.au'
        givenName='Diego'
        surname='Souza'
        email='test@gmail.com'
        phone='12345'
        houseName='House 1'
        street='Street 1'
        suburb='Coogee'
        state='Sydney'
        postcode='2200'
        country='Australia'
      />
    );
    expect(hCardCreator.find('.fn').text()).to.equal('Diego Souza');
    expect(hCardCreator.find('.photo').prop('src')).to.equal('www.test.com.au');
    expect(hCardCreator.find('.email').text()).to.equal('test@gmail.com');
    expect(hCardCreator.find('.email').prop('href')).to.equal('mailto: test@gmail.com');
    expect(hCardCreator.find('.tel').text()).to.equal('12345');
    expect(hCardCreator.find('.postal-code').text()).to.equal('2200');
    expect(hCardCreator.find('.country-name').text()).to.equal('Australia');
    expect(hCardCreator.find('.street-address').text()).to.equal('House 1 Street 1');
    expect(hCardCreator.find('.locality').text()).to.equal('Coogee');
    expect(hCardCreator.find('.region').text()).to.equal('Sydney');
  });

  describe('hCard-compliant',() => {
    let hCardCreator = null
    
    beforeEach(() => {
      hCardCreator= mount(<HCardCreator />);
    })

    it('contains class name as `vcard`', () => {
      expect(hCardCreator.find('.vcard')).to.have.length(1);
    });

    it('contains class name as `fn`', () => {
      expect(hCardCreator.find('.fn')).to.have.length(1);
    });

    it('contains class name as `photo`', () => {
      expect(hCardCreator.find('.photo')).to.have.length(1);
    });

    it('contains class name as `email`', () => {
      expect(hCardCreator.find('.email')).to.have.length(1);
    });

    it('contains class name as `tel`', () => {
      expect(hCardCreator.find('.tel')).to.have.length(1);
    });

    it('contains class name as `adr`', () => {
      expect(hCardCreator.find('.adr')).to.have.length(1);
    });

    it('contains class name as `postal-code`', () => {
      expect(hCardCreator.find('.postal-code')).to.have.length(1);
    });

    it('contains class name as `country-name`', () => {
      expect(hCardCreator.find('.country-name')).to.have.length(1);
    });

    it('contains class name as `locality`', () => {
      expect(hCardCreator.find('.locality')).to.have.length(1);
    });

    it('contains class name as `street-address`', () => {
      expect(hCardCreator.find('.street-address')).to.have.length(1);
    });

    it('contains class name as `region`', () => {
      expect(hCardCreator.find('.region')).to.have.length(1);
    });
  });
});