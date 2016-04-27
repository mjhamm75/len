import React, { Component } from 'react';
import ReactInputCalendar from 'react-input-calendar';
require('!style!css!sass!../styles/input-calendar.css');


class Calendar extends Component {
  render() {
    return (
      <ReactInputCalendar
        closeOnSelect={true}
        date={this.props.date}
        format="MM/DD/YYYY"
        onChange={this.props.onChange}
        placeholder="MM/DD/YYYY"
      />
    )
  }
}

export default Calendar;
