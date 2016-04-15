import { UPDATE_PERSONAL_INFO } from '../constants/ActionTypes';

export default function personalInfo(state = {}, action) {
	switch(action.type) {
		case UPDATE_PERSONAL_INFO:
			return Object.assign({}, state, action.info);
		default:
			return state;
	}
}
