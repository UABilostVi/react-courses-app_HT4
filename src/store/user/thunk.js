import { logInAction, logOutAction } from './actionCreators';
import { serviceAPI } from '../../services';

export const loginThunk = (payload, navCourses) => {
	return (dispatch) => {
		serviceAPI
			.fetchLogin(payload)
			.then((res) => {
				localStorage.setItem('userToken', res.data.result);
			})
			.then(() => {
				dispatch(currentUserThunk());
			})
			.then(() => {
				navCourses();
			})
			.catch((err) => {
				alert(err.message);
			});
	};
};

export const logoutThunk = (onLogin) => {
	return (dispatch) => {
		serviceAPI
			.fetchLogout()
			.then(() => {
				localStorage.removeItem('userToken');
			})
			.then(() => {
				dispatch(logOutAction());
			})
			.then(() => {
				onLogin();
			})
			.catch((err) => {
				console.log('logoutThunk: ', err.message);
			});
	};
};

export const currentUserThunk = () => {
	return (dispatch) => {
		serviceAPI
			.fetchCurrentUser()
			.then((user) => {
				dispatch(
					logInAction({
						isAuth: true,
						name: user.data.result.name,
						email: user.data.result.email,
						token: localStorage.getItem('userToken'),
						role: user.data.result.role,
					})
				);
			})
			.catch((err) => {
				console.log('currentUserThunk: ', err.message);
			});
	};
};

export const registrationThunk = (payload) => {
	return () => {
		serviceAPI.fetchRegistr(payload).catch((err) => {
			console.log('registrationThunk: ', err.message);
		});
	};
};
