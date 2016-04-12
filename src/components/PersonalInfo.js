import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <div>
            <div className="field">
              <label>Name</label>
              <input />
            </div>
            <div className="field">
              <label>Social Security Number</label>
              <input />
            </div>
            <div className="field">
              <label>Date of Birth</label>
              <input />
            </div>
          </div>
          <div>
            <div className="field">
              <label>Street 1</label>
              <input />
            </div>
            <div className="field">
              <label>Street 2</label>
              <input />
            </div>
            <div className="field">
              <label>City</label>
              <input />
            </div>
            <div className="field">
              <label>State</label>
              <input />
            </div>
            <div className="field">
              <label>Zip Code</label>
              <input />
            </div>
          </div>
          <div>
            <div className="field">
              <label>Phone Number</label>
              <input />
            </div>
            <div className="field">
              <label>Email Address</label>
              <input />
            </div>
          </div>
        </div>
        <a className="next pull-right">Next</a>
      </div>
    )
  }
}

export default PersonalInfo;
