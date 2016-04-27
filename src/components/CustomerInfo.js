import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';
import { connect } from 'react-redux';

import Calendar from './Calendar';
import MultiAdd from './MultiAdd';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label>Name</label>
          <input
            onChange={this.onChange.bind(this, "name")}
            value={this.props.customer.name}
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
            onChange={this.updateDate.bind(this, "dob")}
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
            name="emails"
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

  updateDate(key, value) {
    this.setState({
      [key]: value
    }, this.updateContact.bind(this))
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
      ...this.state
    })
  }
}

function mapStateToProps(state) {
  return {
    customer: state.customer
  }
}

export default connect(mapStateToProps)(Contact);
