import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

import { registrationThunk } from '../../store/user/thunk';

import {
	REGISTRATION_TEXT,
	BUTTON_LOGIN_TEXT,
	PASSWORD,
	EMAIL,
	NAME,
	NAME_MIN_LENGTH,
	PASS_MIN_LENGTH,
} from '../../constants';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function submitHandler(e) {
		e.preventDefault();
		dispatch(registrationThunk({ name, email, password }));
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
						minLength={NAME_MIN_LENGTH}
						type='text'
						labelText={NAME}
						onChange={onChangeName}
					/>
					<Input type='email' labelText={EMAIL} onChange={onChangeEmail} />
					<Input
						minLength={PASS_MIN_LENGTH}
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
