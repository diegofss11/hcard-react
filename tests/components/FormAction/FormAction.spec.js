const React = require('react');

import FormAction from '../../../src/components/FormAction';

describe('<FormAction />', () => {
  it('renders correctly the given children', () => {
    const formAction = shallow(
      <FormAction formName='form-test' >
        <button class="button-1">Button 1</button>
        <button class="button-2">Button 2</button>
      </FormAction>
    );

    expect(formAction.find('.form-bottom').children()).to.have.length(2);
    expect(formAction.find('.form-bottom').children()).to.have.length(2);
  });
});
