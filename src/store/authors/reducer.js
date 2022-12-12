import { SET_AUTHORS } from './actionTypes';
import { CREATE_AUTHOR } from './actionTypes';

const authorsInitialState = []; // default value - empty array. After success getting authors from API - array of authors.

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case SET_AUTHORS:
			return [...action.payload];
		case CREATE_AUTHOR:
			return [...state, action.payload];
		default:
			return state;
	}
};
