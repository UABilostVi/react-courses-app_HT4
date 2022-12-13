import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { logInAction } from '../../store/user/actionCreators';
import { fetchLogin } from '../../services';
import {
	REGISTRATION_TEXT,
	BUTTON_LOGIN_TEXT,
	PASSWORD,
	EMAIL,
} from '../../constants';

const Login = () => {
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	async function onSubmit(e) {
		e.preventDefault();

		let loginPayload = {
			email: email,
			password: password,
		};

		let res = await fetchLogin(loginPayload);

		let storePayload = {
			isAuth: true,
			name: res.data.user.name,
			email: res.data.user.email,
			token: res.data.result,
		};

		localStorage.setItem('userToken', JSON.stringify(storePayload));
		dispatch(logInAction(storePayload));
		navigate('/courses');
	}

	function onChangeEmail(e) {
		setEmail(e.target.value);
	}

	function onChangePassword(e) {
		setPassword(e.target.value);
	}

	return (
		<div className='auth-wrapper'>
			<form onSubmit={onSubmit}>
				<fieldset>
					<legend className='text-center'>Login</legend>
					<Input type='email' labelText={EMAIL} onChange={onChangeEmail} />
					<Input
						type='password'
						labelText={PASSWORD}
						onChange={onChangePassword}
					/>
					<Button
						type='submit'
						buttonText={BUTTON_LOGIN_TEXT}
						centered={true}
					/>
				</fieldset>
			</form>
			<p>
				If you have an account you can{' '}
				<Link to='/registration'>{REGISTRATION_TEXT}</Link>
			</p>
		</div>
	);
};

export default Login;
