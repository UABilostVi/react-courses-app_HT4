import { SET_AUTHORS } from './actionTypes';
import { CREATE_AUTHOR } from './actionTypes';

export const setAuthorsAction = (payload) => ({ type: SET_AUTHORS, payload });
export const createAuthorAction = (payload) => ({
	type: CREATE_AUTHOR,
	payload,
});
