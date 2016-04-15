import React, { Component } from 'react';

class Address extends Component {
  render() {
    let showSameAddress = !this.props.showSame ? {
      display: 'none'
    } : null;
    return (
      <div>
        <div style={showSameAddress} className="checkbox">
          <input
            name="sameAddress"
            onChange={this.props.onCheck}
            type="checkbox"
            />
          <label>Same as Spouse</label>
        </div>
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
    )
  }
}

export default Address;
