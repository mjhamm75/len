import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';
import Calendar from 'react-input-calendar';
import MultiAdd from './MultiAdd';

class Contact extends Component {
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

          />
        </div>
        <div className="field">
          <label>Email Address</label>
          <MultiAdd
            label="Add Email"
            name="email"

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

  updateContact() {
    this.props.onChange({
      contact: {
        name: this.state.name,
        ssn: this.state.ssn
      }
    })
  }
}

export default Contact;
