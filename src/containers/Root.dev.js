import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import App from './App';
import PersonalInfo from './../components/PersonalInfo';
import SpouseInfo from './../components/SpouseInfo';
import DependentInfo from './../components/DependentInfo';

export default class Root extends Component {
  render() {
  	let history = this.props.history;
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="step1" component={PersonalInfo} />
          <Route path="step2" component={SpouseInfo} />
          <Route path="step3" component={DependentInfo} />
        </Route>
      </Router>
    );
  }
}
