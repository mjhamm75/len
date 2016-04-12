import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePersonalInfo } from './../actions/Actions';
import FormField from './FormField';
import ListFormField from './ListFormField';
import { routeActions } from 'redux-simple-router'
import Select from './Select';

var fields = require('./mock.fields.js');

class PersonalInfo extends Component {
  constructor() {
      super();
      this.updateRadio = this.updateRadio.bind(this);
  }

  updateValue(name, value) {
    this.props.dispatch(updatePersonalInfo(name, value));
  }

  updateRadio(event) {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    this.props.dispatch(updatePersonalInfo(name, value))
  }

  saveAndContinue() {
    if(this.props.personalInfo.marriage === 'married') {
      this.props.dispatch(routeActions.push('/spouse'));
    } else {
      this.props.dispatch(routeActions.push('/dependents'));
    }
  }

  renderFields(fields) {
    let that = this;
    return fields.map((field, i) => {
      if(field.title) {
        return <FormField
                  key={i}
                  mask={field.mask}
                  name={field.name}
                  title={field.title}
                  type={field.type}
                  updateValue={this.updateValue.bind(this)}
                  value={that.props.personalInfo[field.name]}
                />;
      } else {
        return <h4 key={i} >{field.header}</h4>;
      }
    });
  }

  render() {
    let nameDOM = this.renderFields(fields.name);
    let addressDOM = this.renderFields(fields.address);

    return (
      <div>
        <h2>Personal Info</h2>
        <form className="pure-form pure-form-stacked">
            {nameDOM}
        </form>
        <h4>Contact Info</h4>
          <Select options={fields.phones} title="Add Phone" updateValue={this.updateValue}/>
          <Select options={fields.email} title="Add Email" updateValue={this.updateValue}/>
          <div className="radio">
            <input
              checked={this.props.personalInfo.marriage === ''}
              name="marriage"
              onClick={this.updateRadio}
              type="radio"
              value="single"
            />
            <label>Single</label>
            <input
              name="marriage"
              onClick={this.updateRadio}
              type="radio"
              value="married"
            />
            <label>Married</label>
            <input
              name="marriage"
              onClick={this.updateRadio}
              type="radio"
              value="widowed"
            />
            <label>Widowed</label>
            <input
              name="marriage"
              onClick={this.updateRadio}
              type="radio"
              value="divorced"
            />
            <label>Divorced</label>
            <input
              name="marriage"
              onClick={this.updateRadio}
              type="radio"
              value="separated"
            />
            <label>Separated</label>
          </div>
        <h4>Address Info</h4>
        <form className="pure-form pure-form-stacked">
            {addressDOM}
        </form>
        <button className="pure-button" onClick={this.saveAndContinue.bind(this)}>Save and Continue</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let personalInfo = state.personalInfo;
  return {
    personalInfo
  }
}

export default connect(
  mapStateToProps
)(PersonalInfo);
