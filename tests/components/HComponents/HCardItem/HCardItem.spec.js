import React from 'react';

import HCardItem from '../../../../src/components/HComponents/HCardItem';

describe('<HCardItem />', () => {
  it('renders correctly the children elements', () => {
    const cardItem = shallow(
      <HCardItem label="labelField">
        <a href="#">Testing...</a>
      </HCardItem>
    );

    expect(cardItem.find('.card-item-label').text()).to.equal('labelField');
    expect(cardItem.find('.card-item-value').children().type()).to.equal('a');
    expect(cardItem.find('div').children()).to.have.length(2);
    expect(cardItem.find('a')).to.have.length(1);
  });
    
  it('hides the label if not given', () => {
    const cardItem = shallow(
      <HCardItem>
        <a href="#">Testing...</a>
      </HCardItem>
    );

    expect(cardItem.find('span .card-item-label.hide')).to.have.length(1);
  });
});