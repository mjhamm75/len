import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router'
import { updateClient } from './../actions/Actions'

import PersonalInformation from './PersonalInformation';
import Address from './Address';
import Married from './Married';

class Client extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <PersonalInformation
            person={this.props.client}
            onChange={this.onChange.bind(this)}
          />
          <Address
            address={this.props.client.address}
            onChange={this.onChange.bind(this)}
          />
          <Married
            married={this.props.client.married}
            onChange={this.onChange.bind(this)}
          />
        </div>
        <a className="button pull-right" onClick={this.continue.bind(this)}>Next</a>
      </div>
    )
  }

  onChange(obj) {
    this.props.dispatch(updateClient(obj));
  }

  continue() {
    if(this.props.client.marriage === 'married') {
      this.props.dispatch(routeActions.push('/spouse'));
    } else {
      this.props.dispatch(routeActions.push('/dependents'));
    }
  }
}

function mapStateToProps(state) {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(Client);
