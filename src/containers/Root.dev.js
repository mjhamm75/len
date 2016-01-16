import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import App from './App';
import PersonalInfo from './../components/PersonalInfo';

const history = createHistory();

export default class Root extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="step1" component={PersonalInfo} />
        </Route>
      </Router>
    );
  }
}
