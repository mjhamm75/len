import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSpouseInfo, syncAddress } from './../actions/CounterActions';
import FormField from './FormField';
import { routeActions } from 'redux-simple-router'
var fields = require('./mock.fields.js');

class SpouseInfo extends Component {
  constructor() {
    super();
    this.updateValue = this.updateValue.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
    this.updateSame = this.updateSame.bind(this);
    this.mergeAddress = this.mergeAddress.bind(this);
    this.createAddress = this.createAddress.bind(this);
    this.state = {
      same: false
    }
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

  renderAddress(same) {
    return fields.spouseAddress.map((field, i) => {
      return <FormField key={i} title={field.title} name={field.name} disabled={same} />
    });
  }

  render() {
    let same = this.state.same;
    let fieldsDOM = this.renderFields();
    let addressDOM = this.renderAddress(same);
    return (
      <div>
        <h2>Spouse Info</h2>
        {fieldsDOM}
        <h3>Address</h3>
        <input ref="same" type="checkbox" onChange={this.updateSame}></input> Same as spouse
        <br />
        {addressDOM}
        <br />
        <button onClick={this.saveAndContinue}>Save and Continue</button>
      </div>
    )
  }

  updateSame() {
    this.setState({
      same: this.refs.same.checked
    })
    if(this.refs.same.checked) {
      this.mergeAddress();
    }
  }

  mergeAddress() {
    let address = this.createAddress();
    this.props.dispatch(syncAddress(address));
  }

  createAddress() {
    return {
      street1: this.props.personalInfo.street1,
      street2: this.props.personalInfo.street2,
      city: this.props.personalInfo.city,
      state: this.props.personalInfo.state,
      zipcode: this.props.personalInfo.zipcode
    }
  }
}

function mapStateToProps(state) {
  let spouseInfo = state.spouseInfo;
  let personalInfo = state.personalInfo
  return {
    spouseInfo,
    personalInfo
  }
}

export default connect(
  mapStateToProps
)(SpouseInfo);