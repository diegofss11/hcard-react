const React = require('react');

import Button from '../../../src/components/Button';

describe('<Button />', () => {
  it('renders correctly with the given props', () => {
    const button = shallow(<Button text="text-test"  type="submit" />);

    expect(button.find('button').text()).to.equal('text-test');
    expect(button.find('button').prop('type')).to.equal('submit');
  });

  it('executes callback when the button is clicked', () => {
    const callback = spy();
    const button = shallow(<Button text="Test" type="submit" onClick={callback} />);
    
    button.simulate('click');
    expect(callback.called).to.equal(true);
  });
});
