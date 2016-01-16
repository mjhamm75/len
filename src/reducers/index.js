import { combineReducers } from 'redux';
import counter from './counter';
import personalInfo from './personal.info.js';

const rootReducer = combineReducers({
  counter,
  personalInfo
});

export default rootReducer;
