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
			state[action.key] = action.value;
			return Object.assign({}, state);
		case SYNC_ADDRESS:
			return Object.assign({}, state, action.address);
		default:
			return state;
	}
}
