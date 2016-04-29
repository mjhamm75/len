import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';

class MultiAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: props.values
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
                  onChange={this.onUnmask.bind(this, index)}
                  value={row.value}
                />
      });
    } else {
      return this.state.rows.map((row, index) => {
        return <input
                  key={index}
                  onChange={this.onChange.bind(this, index, event)}
                  value={row.value}
                />
      });
    }
  }

  onUnmask(index, event) {
    let value = event.target.value.replace(/\D/g,'');
    let rows = this.state.rows;
    rows[index] = {
      name: index,
      value: value
    }
    this.setState({
      rows: rows
    }, this.updateMultiAdd.bind(this));
  }

  onChange(index, event) {
    let value = event.target.value;
    let rows = this.state.rows;
    rows[index] = {
      name: index,
      value: value
    }
    this.setState({
      rows: rows
    }, this.updateMultiAdd.bind(this));
  }

  updateMultiAdd() {
    this.props.onChange({
      [this.props.name]: this.state.rows
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
