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
      <div className="rows">
        <a className="button small" onClick={this.add.bind(this)}>{this.props.label}</a>
         {rows}
      </div>
    )
  }

  renderRowsDom() {
    return this.state.rows.map((row, index) => {
      return <input key={index}/>
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
