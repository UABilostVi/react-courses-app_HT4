import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

import { loginThunk } from '../../store/user/thunk';
import { getAuthors } from '../../store/authors/thunk';
import { getCourses } from '../../store/courses/thunk';
import {
	REGISTRATION_TEXT,
	BUTTON_LOGIN_TEXT,
	PASSWORD,
	EMAIL,
} from '../../constants';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function onSubmit(e) {
		e.preventDefault();
		dispatch(loginThunk({ email, password }, navCourses));
		dispatch(getAuthors());
		dispatch(getCourses());
	}

	function navCourses() {
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
					<legend className='legend'>Login</legend>
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
