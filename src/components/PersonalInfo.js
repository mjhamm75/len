import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router'
import Calendar from 'react-input-calendar';

import MultiAdd from './MultiAdd';

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
              <Calendar />
            </div>
            <div className="field">
              <label>Phone Number</label>
              <MultiAdd
                label="Add Phone"
              />
            </div>
            <div className="field">
              <label>Email Address</label>
              <MultiAdd
                label="Add Email"
              />
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
              <div className="flex column radio">
                <div>
                  <input
                    name="marriage"
                    onClick={this.updateRadio}
                    type="radio"
                    value="single"
                  />
                  <label>Single</label>
                </div>
                <div>
                    <input
                      name="marriage"
                      onClick={this.updateRadio}
                      type="radio"
                      value="married"
                    />
                  <label>Married</label>
                </div>
                <div>
                    <input
                      name="marriage"
                      onClick={this.updateRadio}
                      type="radio"
                      value="widowed"
                    />
                  <label>Widowed</label>
                </div>
                <div>
                    <input
                      name="marriage"
                      onClick={this.updateRadio}
                      type="radio"
                      value="divorced"
                    />
                  <label>Divorced</label>
                </div>
                <div>
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
        </div>
        <a className="button pull-right" onClick={this.continue.bind(this)}>Next</a>
      </div>
    )
  }

  continue() {
    if(this.props.personalInfo.marriage === 'married') {
      this.props.dispatch(routeActions.push('/spouse'));
    } else {
      this.props.dispatch(routeActions.push('/dependents'));
    }
  }
}

function mapStateToProps(state) {
  return {
    personalInfo: state.personalInfo
  }
}

export default connect(mapStateToProps)(PersonalInfo);
