export default function personalInfo(state = {}, action) {
	switch(action.type) {
		case "UPDATE_SPOUSE_INFO":
			state[action.key] = action.value;
			return Object.assign({}, state);
		default:
			return state;
	}
}