import React, { Component } from 'react';

class MultiAdd extends Component {
  render() {
    return (
      <div>
        <a className="button small">{this.props.label}</a>
      </div>
    )
  }
}

export default MultiAdd;
