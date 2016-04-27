import React, { Component } from 'react';
import { routeActions } from 'redux-simple-router'
import { connect } from 'react-redux';

import PersonalInformation from './PersonalInformation';
import Address from './Address';
import Married from './Married';
import { syncAddress, updateSpouseInfo } from './../actions/Actions'

class SpouseInfo extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <PersonalInformation
            onChange={this.onChange.bind(this)}
          />
          <Address
            onChange={this.onChange.bind(this)}
            onCheck={this.onCheck.bind(this)}
            showSame={true}
          />
        </div>
        <a className="button pull-right" onClick={this.continue.bind(this)}>Next</a>
      </div>
    )
  }

  onCheck(e) {
    let checked = e.target.checked;
    this.props.dispatch(syncAddress(checked));
  }

  onChange(obj) {
    this.props.dispatch(updateSpouseInfo(obj));
  }

  continue() {
    this.props.dispatch(routeActions.push('/dependents'));
  }
}

function mapStateToProps(state) {
  return {
    spouseInfo: state.spouseInfo
  }
}

export default connect(mapStateToProps)(SpouseInfo);
