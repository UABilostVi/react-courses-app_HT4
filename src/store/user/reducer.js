import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return action.payload;
		case LOGOUT_USER:
			return userInitialState;
		default:
			return state;
	}
};
