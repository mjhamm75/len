import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePersonalInfo } from './../actions/CounterActions';
import FormField from './FormField';
import ListFormField from './ListFormField';
import { routeActions } from 'redux-simple-router'
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
    this.props.dispatch(routeActions.push('/step2'));
  }

  renderFields(fields) {
    return fields.map((field, i) => {
      if(field.title) {
        return <FormField key={i} title={field.title} name={field.name} type={field.type} updateValue={this.updateValue} />; 
      } else if (field.list) {
        return <ListFormField key={i} list={field.list}></ListFormField>;
      } else {
        return <h4 key={i} >{field.header}</h4>;
      }
    });
  }

  render() {
    let nameDOM = this.renderFields(fields.name);
    let phonesDOM = this.renderFields(fields.phones);
    let addressDOM = this.renderFields(fields.address);
    return (
      <div>                
        <h2>Personal Info</h2>
        {nameDOM}
        <h4>Contact Info</h4>
        {phonesDOM}
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