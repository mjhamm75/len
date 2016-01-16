import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePersonalInfo } from './../actions/CounterActions';
import FormField from './FormField';

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

  render() {
    return (
      <div>
        <FormField updateValue={this.updateValue} title="Name" name="name" type="text"/>
        <FormField updateValue={this.updateValue} title="Social Security Number" name="ssn" type="text"/>
        <FormField updateValue={this.updateValue} title="Date of Birth" name="dob" type="text"/>
        <FormField updateValue={this.updateValue} title="Home Phone" name="hphone" type="text"/>
        <FormField updateValue={this.updateValue} title="Work Phone" name="wphone" type="text"/>
        <FormField updateValue={this.updateValue} title="Cell Phone" name="cphone" type="text"/>                      
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