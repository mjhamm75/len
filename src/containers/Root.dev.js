import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import App from './App';
import PersonalInfo from './../components/PersonalInfo';

export default class Root extends Component {
  render() {
  	let history = this.props.history;
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="step1" component={PersonalInfo} />
        </Route>
      </Router>
    );
  }
}
