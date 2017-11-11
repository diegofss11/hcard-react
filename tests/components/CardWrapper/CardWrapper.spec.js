import React from 'react';

import CardWrapper from '../../../src/components/CardWrapper';

describe('<CardWrapper />', () => {
  it('renders the form', () => {
    const cardWrapper = mount(
      <CardWrapper />
    );

    expect(cardWrapper.find('Form')).to.have.length(1);
    expect(cardWrapper.find('FormSection')).to.have.length(2);
    expect(cardWrapper.find('FormAction')).to.have.length(1);
    
    expect(cardWrapper.find('form[name="detailsForm"]')).to.have.length(1);
  });

  it('renders the Card preview', () => {
    const cardWrapper = mount(
      <CardWrapper />
    );

    expect(cardWrapper.find('.vcard')).to.have.length(1);
  });

  describe('When the user types', () => {
    let cardWrapper = null;
    let event = (id, value) => {
      return { target: { id, value }}
    }

    beforeEach( () => {
      cardWrapper = mount(<CardWrapper />);
    });

    it('checks the changes on the states for CardWrapper component', () => {
      expect(cardWrapper.state()).to.eql({});

      cardWrapper.find('input[name="givenName"]').simulate('change', event('givenName', 'Diego'));
      cardWrapper.find('input[name="surname"]').simulate('change', event('surname', 'Souza'));
      cardWrapper.find('input[name="email"]').simulate('change', event('email', 'test@gmail.com'));
      cardWrapper.find('input[name="phone"]').simulate('change', event('phone', '123456'));
      cardWrapper.find('input[name="houseName"]').simulate('change', event('houseName', 'House 1'));
      cardWrapper.find('input[name="street"]').simulate('change', event('street', 'Arden St'));
      cardWrapper.find('input[name="postcode"]').simulate('change', event('postcode', '2030'));
      cardWrapper.find('input[name="country"]').simulate('change', event('country', 'Australia'));
      
      expect(cardWrapper.state()).to.eql({
        givenName: 'Diego',
        surname: 'Souza',
        email: 'test@gmail.com',
        phone: '123456',
        houseName: 'House 1',
        street: 'Arden St',
        postcode: '2030',
        country: 'Australia'
      });
    });
  });
});