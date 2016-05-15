import { ADD_PROPERTY } from '../constants/ActionTypes';

const defaultState = [];

export default function property(state = defaultState, action) {
	switch(action.type) {
    case ADD_PROPERTY:
      let property = {
        address: null,
        mortgages: []
      }
      state.push(property)
      return [...state]
      break;
		default:
			return state;
	}
}
