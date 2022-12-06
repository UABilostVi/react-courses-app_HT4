import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

import './registration.css';

const Registration = () => {
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');
	const navigate = useNavigate();
	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:4000/register', {
				name: name,
				email: email,
				password: password,
			})
			.then(() => {
				navigate('/login');
			})
			.catch(() => {
				alert('Wrong data');
			});
	};
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
					<legend className='text-center'>Registration</legend>
					<Input
						minLength={2}
						type='text'
						labelText='Name'
						onChange={onChangeName}
					/>
					<Input type='email' labelText='Email' onChange={onChangeEmail} />
					<Input
						minLength={6}
						type='password'
						labelText='Password'
						onChange={onChangePassword}
					/>
					<Button type='submit' buttonText='Registration' centered={true} />
				</fieldset>
			</form>
			<p>
				If you have an account you can <Link to='/login'>Login</Link>
			</p>
		</div>
	);
};

export default Registration;
