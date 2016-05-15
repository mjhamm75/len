import { ADD_EMPLOYMENT, UPDATE_EMPLOYMENT } from '../constants/ActionTypes';

const defaultState = {
	client: [],
	spouse: []
};

export default function employmentInfo(state = defaultState, action) {
	switch(action.type) {
		case ADD_EMPLOYMENT:
			let employment = {}
			let employers = state[action.employmentType].push(employment);

			return {
				...state,
				...employers
			};
		case UPDATE_EMPLOYMENT:
			state[action.employmentType][action.key] = action.value
			return {
				...state
			};
		default:
			return state;
	}
}
