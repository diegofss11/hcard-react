import React from 'react';

import Label from '../../../src/components/Label';

describe('<Label />', () => {
  it('renders correctly with the given props', () => {
    const label = shallow(<Label forField="labelField" label="Label Test" />);

    expect(label.find('.label').text()).to.equal('Label Test');
    expect(label.find('.label').prop('htmlFor')).to.equal('labelField');
  });
});
