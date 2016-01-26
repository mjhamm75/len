import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePersonalInfo } from './../actions/CounterActions';
import FormField from './FormField';
import ListFormField from './ListFormField';
import { routeActions } from 'redux-simple-router'
import Select from './Select';

var fields = require('./mock.fields.js');

class PersonalInfo extends Component {
  constructor() {
    super();
    this.updateValue = this.updateValue.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  updateValue(event) {
    let key = event.target.name;
    let val = event.target.value;
    this.props.dispatch(updatePersonalInfo(key, val));
  }

  saveAndContinue() {
    if(this.props.personalInfo.marriage === 'married') {
      this.props.dispatch(routeActions.push('/step2'));
    } else {
      this.props.dispatch(routeActions.push('/step3'));
    }
  }

  renderFields(fields) {
    let that = this;
    return fields.map((field, i) => {
      if(field.title) {
        return <FormField key={i} title={field.title} name={field.name} type={field.type} updateValue={this.updateValue} value={that.props.personalInfo[field.name]}/>; 
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
        {nameDOM}
        <h4>Contact Info</h4>
          <Select options={fields.phones} title="Add Phone" updateValue={this.updateValue}/>
          <Select options={fields.email} title="Add Email" updateValue={this.updateValue}/>
          <div>
            <input onClick={this.updateValue} name="marriage" type="radio" value="single"/>Single
            <input onClick={this.updateValue} name="marriage" type="radio" value="married"/>Married
            <input onClick={this.updateValue} name="marriage" type="radio" value="widowed"/>Widowed
            <input onClick={this.updateValue} name="marriage" type="radio" value="divorced"/>Divorced
            <input onClick={this.updateValue} name="marriage" type="radio" value="separated"/>Separated
          </div>
        <h4>Address Info</h4>
        {addressDOM}
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