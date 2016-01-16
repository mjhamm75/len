import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import App from './App';
import Foo from './../components/Foo';

const history = createHistory();

export default class Root extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="foo" component={Foo} />
        </Route>
      </Router>
    );
  }
}
