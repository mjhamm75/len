import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePersonalInfo } from './../actions/CounterActions';
import FormField from './FormField';
var fields = require('./mock.fields.js');

class PersonalInfo extends Component {
  constructor() {
    super();
    this.updateValue = this.updateValue.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  updateValue(value) {
    let key = value.target.name;
    let val = value.target.value;
    this.props.dispatch(updatePersonalInfo(key, val));
  }

  saveAndContinue() {

  }

  renderFields() {
    return fields.map((field, i) => {
      return field.title ? <FormField key={i} title={field.title} name={field.name} type={field.type} updateValue={this.updateValue} /> :
                  <h4 key={i} >{field.header}</h4>
    });
  }

  render() {
    let fieldsDOM = this.renderFields();
    return (
      <div>
        <h2>Personal Info</h2>
        {fieldsDOM}
        <button onClick={this.saveAndContinue}>Save and Continue</button>
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