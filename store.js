import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { createDevTools } from 'redux-devtools';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const middleware = applyMiddleware(thunk);
  let createStoreWithMiddleware = compose(middleware);

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  )

  return store;
}