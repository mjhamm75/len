import { UPDATE_SPOUSE, SYNC_ADDRESS } from '../constants/ActionTypes';

export default function spouseInfo(state = {}, action) {
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
