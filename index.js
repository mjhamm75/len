import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import {Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {syncReduxAndRouter, routeReducer} from 'redux-simple-router';
import getRoutes from './routes.js';
import reducers from './reducers';

// // Redux DevTools store enhancers
import {devTools, persistState} from 'redux-devtools';
// React components for Redux DevTools
// import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

// const finalCreateStore = __DEVTOOLS ? compose(
//   // Provides support for DevTools:
//   devTools(),
//   // Lets you write ?debug_session=<name> in address bar to persist debug sessions
//   persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
// )(createStore) : createStore;

const finalCreateStore = createStore;

const store = finalCreateStore(reducer);
const history = createBrowserHistory();

syncReduxAndRouter(history, store);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        {getRoutes()}
      </Router>
    </Provider>
  </div>,
  document.getElementById('app')
);