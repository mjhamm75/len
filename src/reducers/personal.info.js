import { UPDATE_PERSONAL_INFO } from '../constants/ActionTypes';

let defaultState = {
	name: null,
	ssn: null,
	dob: null,
	phoneNumbers: [],
	email: [],
	address: {
		street1: null,
		street2: null,
		city: null,
		state: null,
		zip: null
	},
	marriage: null
}

export default function personalInfo(state = defaultState, action) {
	switch(action.type) {
		case UPDATE_PERSONAL_INFO:
			return {
				...state,
				...action.info
			};
		default:
			return state;
	}
}
