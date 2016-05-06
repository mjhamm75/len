import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import App from './app';
import Client from '../components/Client';
import Spouse from '../components/Spouse';
import Dependents from '../components/Dependents';
import Employment from '../components/Employment';
import PropertyInfo from '../components/PropertyInfo';

const routes = (
  <Route path="/" component={App}>
    <Route path="personal" component={Client} />
    <Route path="spouse" component={Spouse} />
    <Route path="dependents" component={Dependents} />
    <Route path="employment" component={Employment} />
    <Route path="property" component={PropertyInfo} />
  </Route>
)
export default class Root extends Component {
  render() {
    let history = this.props.history;
    return (
      <Router history={history}>
        {routes}
      </Router>
    );
  }
}
