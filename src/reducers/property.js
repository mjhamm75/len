import { ADD_PROPERTY, UPDATE_PROPERTY } from '../constants/ActionTypes';

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
		case UPDATE_PROPERTY:
			state[action.index] = action.property;
			return [...state];
		default:
			return state;
	}
}
