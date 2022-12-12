import { LOGIN_USER } from './actionTypes';
import { LOGOUT_USER } from './actionTypes';

const logOutAction = () => ({ type: LOGOUT_USER });
const logInAction = (payload) => ({ type: LOGIN_USER, payload });

export { logInAction, logOutAction };
