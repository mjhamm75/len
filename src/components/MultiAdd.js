import React, { Component } from 'react';

class MultiAdd extends Component {
  constructor() {
    super();
    this.state = {
      rows: []
    }
  }

  render() {
    let rows = this.renderRowsDom();
    return (
      <div>
        <a className="button small" onClick={this.add.bind(this)}>{this.props.label}</a>
         {rows}
      </div>
    )
  }

  renderRowsDom() {
    return this.state.rows.map(row => {
      return <input />
    });
  }

  add() {
    let rows = this.state.rows;
    rows.push({
      name: undefined,
      value: undefined
    })
    this.setState({
      rows: rows
    });
  }
}

export default MultiAdd;
