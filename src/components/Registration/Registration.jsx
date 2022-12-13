import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { fetchRegistr } from '../../services';
import {
	REGISTRATION_TEXT,
	BUTTON_LOGIN_TEXT,
	PASSWORD,
	EMAIL,
	NAME,
} from '../../constants';

const Registration = () => {
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');
	const navigate = useNavigate();

	function submitHandler(e) {
		e.preventDefault();
		let newUser = {
			name: name,
			email: email,
			password: password,
		};
		fetchRegistr(newUser);
		navigate('/login');
	}

	function onChangeName(e) {
		setName(e.target.value);
	}

	function onChangeEmail(e) {
		setEmail(e.target.value);
	}

	function onChangePassword(e) {
		setPassword(e.target.value);
	}

	return (
		<div className='auth-wrapper'>
			<form onSubmit={submitHandler}>
				<fieldset>
					<legend className='text-center'>{REGISTRATION_TEXT}</legend>
					<Input
						minLength={2}
						type='text'
						labelText={NAME}
						onChange={onChangeName}
					/>
					<Input type='email' labelText={EMAIL} onChange={onChangeEmail} />
					<Input
						minLength={6}
						type='password'
						labelText={PASSWORD}
						onChange={onChangePassword}
					/>
					<Button
						type='submit'
						buttonText={REGISTRATION_TEXT}
						centered={true}
					/>
				</fieldset>
			</form>
			<p>
				If you have an account you can{' '}
				<Link to='/login'>{BUTTON_LOGIN_TEXT}</Link>
			</p>
		</div>
	);
};

export default Registration;
