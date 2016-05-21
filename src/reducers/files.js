import {
  ADD_FILE,
  DELETE_FILE,
  RENAME_FILE,
  SAVE_FILES
} from '../constants/ActionTypes';

const defaultState = [];

export default function employment(state = defaultState, action) {
	switch(action.type) {
		case ADD_FILE:
      let addfiles = state;
      let result = addfiles.concat(action.files);
      return [...result];
		case DELETE_FILE:
      let deletefiles = state;
      deletefiles.splice(action.index, 1);
      return [...deletefiles];
    case RENAME_FILE:
      let renamefiles = state;
      renamefiles[action.index].rename = action.name;
      return [...renamefiles];
		default:
			return state;
	}
}
