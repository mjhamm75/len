import React from 'react';

export default class extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}