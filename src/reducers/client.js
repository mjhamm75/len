import { UPDATE_CLIENT } from '../constants/ActionTypes';

let defaultState = {
	name: null,
	ssn: null,
	dob: null,
	phones: [],
	emails: [],
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
		case UPDATE_CLIENT:
			return {
				...state,
				...action.info
			};
		default:
			return state;
	}
}
