import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router'

import client from './client.js';
import spouse from './spouse.js';
import dependents from './dependents.js';
import employment from './employment.js';
import properties from './property.js';

const rootReducer = combineReducers({
  client,
  spouse,
  dependents,
  employment,
  properties,
  routing: routeReducer
});

export default rootReducer;
