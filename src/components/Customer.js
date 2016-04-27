import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router'
import { updateCustomer } from './../actions/Actions'

import CustomerInfo from './CustomerInfo';
import Address from './Address';
import Married from './Married';

class Customer extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <CustomerInfo
            onChange={this.onChange.bind(this)}
          />
          <Address
            address={this.props.customer.address}
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
    this.props.dispatch(updateCustomer(obj));
  }

  continue() {
    if(this.props.customer.marriage === 'married') {
      this.props.dispatch(routeActions.push('/spouse'));
    } else {
      this.props.dispatch(routeActions.push('/dependents'));
    }
  }
}

function mapStateToProps(state) {
  return {
    customer: state.customer
  }
}

export default connect(mapStateToProps)(Customer);
