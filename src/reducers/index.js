import { combineReducers } from 'redux';
import client from './client.js';
import spouse from './spouse.js';
import dependents from './dependents.js';
import employment from './employment.js';
import { routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers({
  client,
  spouse,
  dependents,
  employment,
  routing: routeReducer
});

export default rootReducer;
