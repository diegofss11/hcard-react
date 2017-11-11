const React = require('react');

import FormSection from '../../../src/components/FormSection';

describe('<FormSection />', () => {
  it('renders correctly the given props and children', () => {
    const formSection = shallow(
      <FormSection sectionName='Section Test' >
        <button class="button-1">Button 1</button>
        <button class="button-2">Button 2</button>
      </FormSection>
    );

    expect(formSection.find('.form-section').children()).to.have.length(3);
    expect(formSection.find('.form-section-name').text()).to.equal('Section Test');
  });
});
