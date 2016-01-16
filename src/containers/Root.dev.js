import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import DevTools from './DevTools';
import { Router, Route } from 'react-router';

import { createHistory } from 'history';

const history = createHistory();

import App from './app';
// import Foo from './../components/foo'
// import Bar from './../components/bar'

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={CounterApp}>
            
          </Route>
        </Router>
      </Provider>
    );
  }
}
