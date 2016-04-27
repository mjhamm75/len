import { UPDATE_SPOUSE, SYNC_ADDRESS } from '../constants/ActionTypes';

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
	}
}

export default function spouseInfo(state = defaultState, action) {
	switch(action.type) {
		case UPDATE_SPOUSE:
			return {
				...state,
				...action.info
			};
		case SYNC_ADDRESS:
			return {
				...state,
				...action.address
			}
		default:
			return state;
	}
}
