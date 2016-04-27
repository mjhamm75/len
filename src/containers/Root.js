import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import App from './App';
import Client from '../components/Client';
import SpouseInfo from '../components/SpouseInfo';
import DependentInfo from '../components/DependentInfo';
import EmploymentInfo from '../components/EmploymentInfo';
import PropertyInfo from '../components/PropertyInfo';
import Test from '../components/Test';

const routes = (
  <Route path="/" component={App}>
    <Route path="personal" component={Client} />
    <Route path="spouse" component={SpouseInfo} />
    <Route path="dependents" component={DependentInfo} />
    <Route path="employment" component={EmploymentInfo} />
    <Route path="property" component={PropertyInfo} />
    <Route path="test" component={Test} />
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
