import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { browserHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'

const reduxRouterMiddleware = syncHistory(browserHistory);

const finalCreateStore = compose(
  applyMiddleware(thunk, reduxRouterMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot && process.env.NODE_ENV !== 'development') {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
