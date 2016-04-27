import React, { Component } from 'react';

class Married extends Component {
  updateRadio(event) {
      this.props.onChange({
        marriage: event.target.value
      })
  }

  render() {
    return (
      <div>
        <div className="field">
          <div className="flex column radio">
            <div>
              <input
                checked={this.props.married === 'single'}
                name="marriage"
                onClick={this.updateRadio.bind(this)}
                type="radio"
                value="single"
              />
              <label>Single</label>
            </div>
            <div>
                <input
                  checked={this.props.married === 'married'}
                  name="marriage"
                  onClick={this.updateRadio.bind(this)}
                  type="radio"
                  value="married"
                />
              <label>Married</label>
            </div>
            <div>
                <input
                  checked={this.props.married === 'widowed'}
                  name="marriage"
                  onClick={this.updateRadio.bind(this)}
                  type="radio"
                  value="widowed"
                />
              <label>Widowed</label>
            </div>
            <div>
                <input
                  checked={this.props.married === 'divorced'}
                  name="marriage"
                  onClick={this.updateRadio.bind(this)}
                  type="radio"
                  value="divorced"
                />
              <label>Divorced</label>
            </div>
            <div>
                <input
                  name="marriage"
                  onClick={this.updateRadio.bind(this)}
                  type="radio"
                  value="separated"
                />
              <label>Separated</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Married;
