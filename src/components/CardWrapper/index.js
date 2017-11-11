import React from 'react';

import CardWrapperStyle from './index.scss';

import Form from '../Form';
import FormAction from '../FormAction';
import FormSection from '../FormSection';
import InputFieldWrapper from '../InputFieldWrapper';
import Button from '../Button';
import HCardCreator from '../HComponents/HCardCreator';

import {hCardConverter} from '../../utils/helpers';

// to avoid style input components - cross browsers
const triggerFileUpload = () => {
  document.getElementById('fileInput').click();
}

class CardWrapper extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    hCardConverter(document.getElementById('vcard'));
  }

  uploadAvatar = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const imgSrc = window.URL.createObjectURL(file);
    this.setState({avatar: imgSrc});
  }

  updateCardFields = ({currentTarget}) => {
    const {id, value} = currentTarget;
    this.setState({ [id]: value });
  }

  render() {
    return (
      <div className="hcard-wrapper">
        <Form formName="detailsForm" onSubmit={this.onFormSubmit}>
          <span className="hcard-form-title">hCard Builder</span>
          <FormSection sectionName="Personal Details">
            <div className="groupped-row">
              <InputFieldWrapper name="givenName" label="Given Name" onChange={this.updateCardFields} />
              <InputFieldWrapper name="surname" label="Surname" onChange={this.updateCardFields} />
            </div>
            <div className="groupped-row">
              <InputFieldWrapper name="email" label="Email" onChange={this.updateCardFields} />
              <InputFieldWrapper name="phone" label="Phone" type="number" onChange={this.updateCardFields} />
            </div>
          </FormSection>

          <FormSection sectionName="Address">
            <div className="groupped-row">
              <InputFieldWrapper name="houseName" label="House Name or #" onChange={this.updateCardFields} />
              <InputFieldWrapper name="street" label="Street" onChange={this.updateCardFields} />
            </div>
            <div className="groupped-row">
              <InputFieldWrapper name="suburb" label="Suburb" onChange={this.updateCardFields} />
              <InputFieldWrapper name="state" label="State" onChange={this.updateCardFields} />
            </div>
            <div className="groupped-row">
              <InputFieldWrapper name="postcode" label="Postcode" onChange={this.updateCardFields} />
              <InputFieldWrapper name="country" label="Country" onChange={this.updateCardFields} />
            </div>
          </FormSection>

          <FormAction>
            <Button styleClass="secondary" type="submit" onClick={triggerFileUpload} text="Upload Avatar" />
            <Button styleClass="primary" type="submit" text="Create hCard" />
          </FormAction>

          <input style={{display: 'none'}} id="fileInput" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.uploadAvatar} />
        </Form>
        
        <HCardCreator
          avatar={this.state.avatar}
          givenName={this.state.givenName}
          surname={this.state.surname}
          email={this.state.email}
          phone={this.state.phone}
          houseName={this.state.houseName}
          street={this.state.street}
          suburb={this.state.suburb}
          state={this.state.state}
          postcode={this.state.postcode}
          country={this.state.country}
        />
      </div>
    );
  }
}

export default CardWrapper;