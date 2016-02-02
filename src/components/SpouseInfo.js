import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSpouseInfo } from './../actions/CounterActions';
import FormField from './FormField';
import { routeActions } from 'redux-simple-router'
var fields = require('./mock.fields.js');

class SpouseInfo extends Component {
  constructor() {
    super();
    this.updateValue = this.updateValue.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  updateValue(value) {
    let key = value.target.name;
    let val = value.target.value;
    this.props.dispatch(updateSpouseInfo(key, val));
  }

  saveAndContinue() {
    this.props.dispatch(routeActions.push('/dependents'));
  }

  renderFields() {
    return fields.name.map((field, i) => {
      return field.title ? <FormField key={i} title={field.title} name={field.name} type={field.type} updateValue={this.updateValue} /> :
                  <h4 key={i} >{field.header}</h4>
    });
  }

  render() {
    let fieldsDOM = this.renderFields();
    return (
      <div>
        <h2>Spouse Info</h2>
        {fieldsDOM}
        <button onClick={this.saveAndContinue}>Save and Continue</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let spouseInfo = state.spouseInfo;
  return {
    spouseInfo
  }
}

export default connect(
  mapStateToProps
)(SpouseInfo);