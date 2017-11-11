import React from 'react';

import HCardHeader from '../../../../src/components/HComponents/HCardHeader';

describe('<HCardHeader />', () => {
  it('renders correctly the children elements', () => {
    const hCardHeader = shallow(
      <HCardHeader label="labelField">
        <div> Test 1</div>
        <div> Test 2</div>
      </HCardHeader>
    );

    expect(hCardHeader.find('.hcard-header').children()).to.have.length(2);
  });
});