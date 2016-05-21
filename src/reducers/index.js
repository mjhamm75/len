import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router'

import client from './client.js';
import spouse from './spouse.js';
import dependents from './dependents.js';
import employment from './employment.js';
import properties from './property.js';
import files from './files.js';

const rootReducer = combineReducers({
  client,
  spouse,
  dependents,
  employment,
  files,
  properties,
  routing: routeReducer
});

export default rootReducer;
