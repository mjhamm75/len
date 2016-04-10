import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePersonalInfo } from './../actions/Actions';
import FormField from './FormField';
import ListFormField from './ListFormField';
import { routeActions } from 'redux-simple-router'
import Select from './Select';

var fields = require('./mock.fields.js');

class PersonalInfo extends Component {
  updateValue(name, value) {
    this.props.dispatch(updatePersonalInfo(name, value));
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
          <div>
            <input onClick={this.updateValue} name="marriage" type="radio" value="single"/>
            <label>Single</label>
            <input onClick={this.updateValue} name="marriage" type="radio" value="married"/>
            <label>Married</label>
            <input onClick={this.updateValue} name="marriage" type="radio" value="widowed"/>
            <label>Widowed</label>
            <input onClick={this.updateValue} name="marriage" type="radio" value="divorced"/>
            <label>Divorced</label>
            <input onClick={this.updateValue} name="marriage" type="radio" value="separated"/>
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
