import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePersonalInfo } from './../actions/CounterActions';
import FormField from './FormField';
var fields = require('./mock.fields.js');

class PersonalInfo extends Component {
  constructor() {
    super();
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(value) {
    let key = value.target.name;
    let val = value.target.value;
    this.props.dispatch(updatePersonalInfo(key, val));
  }

  renderFields() {
    return fields.map(field => {
      return <FormField title={field.title} name={field.name} type={field.type} />
    });
  }

  render() {
    let fieldsDOM = this.renderFields();
    return (
      <div>
        <h2>Personal Info</h2>
        {fieldsDOM}
      </div>
    )
  }
}

function mapStateToProps(state) {
  let personalInfo = state.personalInfo;
  console.log(personalInfo);
  return {
    personalInfo
  }
}

export default connect(
  mapStateToProps
)(PersonalInfo);