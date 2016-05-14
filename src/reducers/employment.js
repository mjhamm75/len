import { ADD_EMPLOYMENT, UPDATE_EMPLOYMENT } from '../constants/ActionTypes';

function createNestedObject(state, type, key, value) {
	if(!state[type]) {
		state[type] = {};
	}
	state[type][key] = value;
	return state;
}

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
			state = createNestedObject(state, action.employmentType, action.key, action.value);
			return {
				...state
			};
		default:
			return state;
	}
}
