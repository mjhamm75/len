import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';

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
    if(this.props.mask) {
      return this.state.rows.map((row, index) => {
        return <MaskedInput
                  key={index}
                  mask={this.props.mask}
                  onChange={this.onChange.bind(this)}
                />
      });
    } else {
      return this.state.rows.map((row, index) => {
        return <input
                  key={index}
                  onChange={this.onChange.bind(this)}
                />
      });
    }
  }

  onChange() {
    
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
