import { combineReducers } from 'redux';
import client from './client.js';
import spouse from './spouse.js';
import dependentInfo from './dependent.info.js';
import employmentInfo from './employment.info.js';
import { routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers({
  client,
  spouse,
  dependentInfo,
  employmentInfo,
  routing: routeReducer
});

export default rootReducer;
