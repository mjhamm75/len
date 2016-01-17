import { combineReducers } from 'redux';
import counter from './counter';
import personalInfo from './personal.info.js';
import spouseInfo from './spouse.info.js';
import { routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers({
  counter,
  personalInfo,
  spouseInfo,
  routing: routeReducer
});

export default rootReducer;
