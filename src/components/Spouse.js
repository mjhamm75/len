import React, { Component } from 'react';
import { routeActions } from 'redux-simple-router'
import { connect } from 'react-redux';
import { Link } from 'react-router';

import PersonalInformation from './PersonalInformation';
import Address from './Address';
import Married from './Married';
import { syncAddress, updateSpouse } from './../actions/Actions'

class SpouseInfo extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <PersonalInformation
            person={this.props.spouse}
            onChange={this.onChange.bind(this)}
          />
          <Address
            address={this.props.spouse.address}
            onChange={this.onChange.bind(this)}
          />
        </div>
        <Link className="button pull-right" to="/dependents">Next</Link>
      </div>
    )
  }

  onCheck(e) {
    let checked = e.target.checked;
    this.props.dispatch(syncAddress(checked));
  }

  onChange(obj) {
    this.props.dispatch(updateSpouse(obj));
  }
}

function mapStateToProps(state) {
  return {
    spouse: state.spouse
  }
}

export default connect(mapStateToProps)(SpouseInfo);
