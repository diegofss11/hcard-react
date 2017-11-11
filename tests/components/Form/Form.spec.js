const React = require('react');

import Form from '../../../src/components/Form';

describe('<Form />', () => {
  it('renders correctly with the given props', () => {
    const form = shallow(<Form formName='form-test' />);

    expect(form.prop('name')).to.equal('form-test');
  });

  it('renders correctly the given children', () => {
    const form = shallow(
      <Form formName='form-test'>
        <div class="div-1">Div 1</div>
        <div class="div-2">Div 2</div>
        {<div class="div-3">Div 3</div>}
      </Form>
    );

    expect(form.find('.hcard-form').children()).to.have.length(3);
  });

  it('executes callback function when the form is submitted', () => {
    const callback = spy();
    const form = shallow(<Form formName='form-test' onSubmit={callback} />);
    
    form.simulate('submit');
    expect(callback.called).to.equal(true);
  });
});
