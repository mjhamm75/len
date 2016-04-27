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
          <input
            onChange={this.onChange.bind(this, 'street1')}
            value={this.props.street1}
          />
        </div>
        <div className="field">
          <label>Street 2</label>
          <input
            onChange={this.onChange.bind(this, 'street2')}
            value={this.props.street2}
          />
        </div>
        <div className="field">
          <label>City</label>
          <input
            onChange={this.onChange.bind(this, 'city')}
            value={this.props.city}
          />
        </div>
        <div className="field">
          <label>State</label>
          <input
            onChange={this.onChange.bind(this, 'state')}
            value={this.props.state}
          />
        </div>
        <div className="field">
          <label>Zip Code</label>
          <input
            onChange={this.onChange.bind(this, 'zip')}
            value={this.props.zip}
          />
        </div>
      </div>
    )
  }

  onChange(key, event) {
    this.setState({
      [key]: event.currentTarget.value
    }, () => {
      this.props.onChange({
        address: {
          ...this.state
        }
      })
    })
  }
}

export default Address;
