import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { currentUserThunk } from './store/user/thunk';

import { Header } from './components/Header';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { Courses } from './components/Courses';
import { CreateForm } from './components/CreateForm';
import { CourseInfo } from './components/CourseInfo';
import { PrivateRoute } from './components/PrivateRouter';

import { getAuthors } from './store/authors/thunk';
import { getCourses } from './store/courses/thunk';

import './App.css';

function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = localStorage.getItem('userToken');

	useEffect(() => {
		if (token) {
			console.log('UseApp');
			dispatch(currentUserThunk());
			dispatch(getAuthors());
			dispatch(getCourses());
		} else {
			navigate('login');
		}
	}, []);

	return (
		<>
			<Header />
			<main className='main'>
				<Routes>
					<Route path='/' element={<Navigate to='/courses' />} />
					<Route
						path='registration'
						element={token ? <Navigate to='/courses' /> : <Registration />}
					/>
					<Route
						path='login'
						element={token ? <Navigate to='/courses' /> : <Login />}
					/>
					<Route path='courses' element={<Courses />} />
					<Route element={<PrivateRoute />}>
						<Route path='courses/add' element={<CreateForm />} />
						<Route path='courses/update/:courseId' element={<CreateForm />} />
					</Route>
					<Route path='courses/:courseId' element={<CourseInfo />} />
					<Route path='*' element={<h1>Page not found</h1>} />
				</Routes>
			</main>
		</>
	);
}

export default App;
