import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import { Courses } from './components/Courses';
import { CreateCourse } from './components/CreateCourse';
import { Header } from './components/Header';
import { Registration } from './components/Registration';
import { Login } from './components/Login';
import { CourseInfo } from './components/CourseInfo';

import './App.css';

function App() {
	const navigate = useNavigate();
	let [isLogedIn, setIsLogedIn] = useState(!!localStorage.getItem('userToken'));

	function logInHandler(res) {
		localStorage.setItem('userToken', res.data.result);
		setIsLogedIn(true);
		navigate('/courses');
	}

	function logOutHandler() {
		localStorage.removeItem('userToken');
		setIsLogedIn(false);
		navigate('/login');
	}

	return (
		<>
			<Header
				isLogedIn={isLogedIn}
				logOut={logOutHandler}
				logedIn={isLogedIn}
			/>
			<main className='main'>
				<Routes>
					<Route path='*' element={<h1>Page not found</h1>} />
					<Route
						path='/'
						element={
							isLogedIn ? <Navigate to='/courses' /> : <Navigate to='/login' />
						}
					/>
					<Route
						path='login'
						element={
							isLogedIn ? (
								<Navigate to='/courses' />
							) : (
								<Login login={logInHandler} />
							)
						}
					/>
					<Route path='registration' element={<Registration />} />
					<Route path='courses'>
						<Route index element={<Courses />} />
						<Route path='add' element={<CreateCourse />} />
						<Route path=':courseId' element={<CourseInfo />} />
					</Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
