import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <div>
            <div className="field">
              <label>Name</label>
              <input/>
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
            <div className="fields">
              <div className="radio">
                <input
                  name="marriage"
                  onClick={this.updateRadio}
                  type="radio"
                  value="single"
                />
                <label>Single</label>
                <input
                  name="marriage"
                  onClick={this.updateRadio}
                  type="radio"
                  value="married"
                />
                <label>Married</label>
                <input
                  name="marriage"
                  onClick={this.updateRadio}
                  type="radio"
                  value="widowed"
                />
                <label>Widowed</label>
                <input
                  name="marriage"
                  onClick={this.updateRadio}
                  type="radio"
                  value="divorced"
                />
                <label>Divorced</label>
                <input
                  name="marriage"
                  onClick={this.updateRadio}
                  type="radio"
                  value="separated"
                />
                <label>Separated</label>
              </div>
            </div>
          </div>
        </div>
        <a className="next pull-right">Next</a>
      </div>
    )
  }
}

export default PersonalInfo;
