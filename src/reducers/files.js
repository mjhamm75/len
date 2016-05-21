import {
  ADD_FILE,
  DELETE_FILE
} from '../constants/ActionTypes';

const defaultState = {
	files: [],
};

export default function employment(state = defaultState, action) {
	switch(action.type) {
		case ADD_FILE:

		case DELETE_FILE:

		default:
			return state;
	}
}
