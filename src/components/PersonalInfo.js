import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router'
import { updatePersonalInfo } from './../actions/Actions'

import Contact from './Contact';
import Address from './Address';
import Married from './Married';

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <Contact
            onChange={this.onChange.bind(this)}
          />
          <Address
            address={this.props.personalInfo.address}
            onChange={this.onChange.bind(this)}
          />
          <Married
            onChange={this.onChange.bind(this)}
          />
        </div>
        <a className="button pull-right" onClick={this.continue.bind(this)}>Next</a>
      </div>
    )
  }

  onChange(obj) {
    this.props.dispatch(updatePersonalInfo(obj));
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
