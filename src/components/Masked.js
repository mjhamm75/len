import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';

class Masked extends Component {
  render() {
    return (
      <MaskedInput
        mask={this.props.mask}
        name={this.props.name}
        onChange={this.change.bind(this)}
      />
    )
  }

  change(event) {
    let value = event.target.value.replace(/\D/g,'')
    this.props.onChange(this.props.name, value);
  }
}

export default Masked;
