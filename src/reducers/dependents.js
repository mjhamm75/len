import { UPDATE_DEPENDENT_INFO } from '../constants/ActionTypes';

export default function dependents(state = {}, action) {
	switch(action.type) {
		case UPDATE_DEPENDENT_INFO:
			state[action.key] = action.value;
			return {
				...state
			}
		default:
			return state;
	}
}
