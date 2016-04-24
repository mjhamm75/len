import React, { Component } from 'react';
import ReactInputCalendar from 'react-input-calendar';
require('!style!css!sass!../styles/input-calendar.css');


class Calendar extends Component {
  render() {
    return (
      <ReactInputCalendar
        format="DD/MM/YYYY"
        placeholder="DD/MM/YYYY"
      />
    )
  }
}

export default Calendar;
