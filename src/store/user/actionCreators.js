import { LOGIN_USER } from './actionTypes';
import { LOGOUT_USER } from './actionTypes';

export const logOutAction = () => ({ type: LOGOUT_USER });
export const logInAction = (payload) => ({ type: LOGIN_USER, payload });
