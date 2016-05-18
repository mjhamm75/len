import {
	ADD_MORTGAGE,
	ADD_PROPERTY,
	UPDATE_MORTGAGE,
	UPDATE_PROPERTY
} from '../constants/ActionTypes';

const defaultState = [];

let mortgage = {
	payoff: null,
	lender: null,
	monthly: null
}

let property = {
	address: null,
	mortgages: []
}

export default function property(state = defaultState, action) {
	switch(action.type) {
    case ADD_PROPERTY:
      state.push(property)
      return [...state]
      break;
		case UPDATE_PROPERTY:
			state[action.index] = action.property;
			return [...state];
		case ADD_MORTGAGE:
			state[action.index].mortgages.push(mortgage);
			return [...state];
		case UPDATE_MORTGAGE:
			state[action.propertyIndex].mortgages[action.mortgageIndex] = action.mortgage;
			return [...state];
		default:
			return state;
	}
}
