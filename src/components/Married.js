import React, { Component } from 'react';

class Married extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <div className="flex column radio">
            <div>
              <input
                name="marriage"
                onClick={this.updateRadio}
                type="radio"
                value="single"
              />
              <label>Single</label>
            </div>
            <div>
                <input
                  name="marriage"
                  onClick={this.updateRadio}
                  type="radio"
                  value="married"
                />
              <label>Married</label>
            </div>
            <div>
                <input
                  name="marriage"
                  onClick={this.updateRadio}
                  type="radio"
                  value="widowed"
                />
              <label>Widowed</label>
            </div>
            <div>
                <input
                  name="marriage"
                  onClick={this.updateRadio}
                  type="radio"
                  value="divorced"
                />
              <label>Divorced</label>
            </div>
            <div>
                <input
                  name="marriage"
                  onClick={this.updateRadio}
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
