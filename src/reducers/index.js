import { combineReducers } from 'redux';
import client from './client.js';
import spouseInfo from './spouse.info.js';
import dependentInfo from './dependent.info.js';
import employmentInfo from './employment.info.js';
import { routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers({
  client,
  spouseInfo,
  dependentInfo,
  employmentInfo,
  routing: routeReducer
});

export default rootReducer;
