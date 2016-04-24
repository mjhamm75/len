import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';

import Calendar from './Calendar';
import MultiAdd from './MultiAdd';

class Contact extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  render() {
    return (
      <div>
        <div className="field">
          <label>Name</label>
          <input
            onChange={this.onChange.bind(this, "name")}
          />
        </div>
        <div className="field">
          <label>Social Security Number</label>
          <MaskedInput
            onChange={this.onUnmask.bind(this, "ssn")}
            mask="111-11-1111"
          />
        </div>
        <div className="field">
          <label>Date of Birth</label>
          <Calendar

          />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <MultiAdd
            label="Add Phone"
            mask="111-111-1111"
            name="phones"
            onChange={this.updateMultiAdd.bind(this)}
          />
        </div>
        <div className="field">
          <label>Email Address</label>
          <MultiAdd
            label="Add Email"
            name="email"
            onChange={this.updateMultiAdd.bind(this)}
          />
        </div>
      </div>
    )
  }

  onUnmask(key, event) {
    let value = event.target.value.replace(/\D/g,'');
    this.setState({
      ssn: value
    }, this.updateContact.bind(this));
  }

  onChange(key, event) {
    var that = this;

    this.setState({
      [key]: event.target.value
    }, this.updateContact.bind(this))
  }

  updateMultiAdd(obj) {
    delete obj.rows
    this.setState({
      ...obj
    }, this.updateContact.bind(this))
  }

  updateContact() {
    this.props.onChange({
        email: this.state.email,
        name: this.state.name,
        phone: this.state.phones,
        ssn: this.state.ssn
    })
  }
}

export default Contact;
