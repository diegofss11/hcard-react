import React from 'react';

import InputFieldWrapper from '../../../src/components/InputFieldWrapper';

describe('<InputFieldWrapper />', () => {
  it('renders correctly with default props', () => {
    const inputFieldWrapper = shallow(<InputFieldWrapper label="Label to test" name="labelField" />);

    expect(inputFieldWrapper.find('input').prop('type')).to.equal('text');
    expect(inputFieldWrapper.find('input').prop('id')).to.equal('labelField');
  });
    
  it('executes callback when the user starts to type', () => {
    const callback = spy();
    const inputFieldWrapper = shallow(<InputFieldWrapper label="Label to test" onChange={callback} name="labelField" />);
    
    inputFieldWrapper.find('input').simulate('change');
    expect(callback.called).to.equal(true);
  });

  it('renders correctly the label with the given prop', () => {
    const inputFieldWrapper = mount(<InputFieldWrapper label="Label to test" name="labelField" />);

    expect(inputFieldWrapper.find('.label').text()).to.equal('Label to test');
  });
});
