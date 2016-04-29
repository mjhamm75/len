import { ADD_DEPENDENT, UPDATE_DEPENDENT_INFO } from '../constants/ActionTypes';

const defaultState = [];

export default function dependents(state = defaultState, action) {
	switch(action.type) {
		case UPDATE_DEPENDENT_INFO:
			state[action.key] = action.dependent;
			return [
				...state
			]
		case ADD_DEPENDENT:
			let dependent = {
				name: null,
				age: null,
				relationship: null
			}
			return [
				...state,
				...dependent
			]
		default:
			return state;
	}
}
