import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components/Header';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { Courses } from './components/Courses';
import { CreateCourse } from './components/CreateCourse';
import { CourseInfo } from './components/CourseInfo';
import { fetchAllCourses, fetchAllAuthors } from './services';
import { setCoursesAction } from './store/courses/actionCreators';
import { setAuthorsAction } from './store/authors/actionCreators';
import { logInAction } from './store/user/actionCreators';

import './App.css';

function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = JSON.parse(localStorage.getItem('userToken'));

	useEffect(() => {
		checkToken();
		getAuthors();
		getCourses();
	}, []);

	function checkToken() {
		if (token) {
			dispatch(logInAction(token));
		} else {
			navigate('login');
		}
	}

	async function getCourses() {
		const courses = await fetchAllCourses();
		dispatch(setCoursesAction(courses));
	}

	async function getAuthors() {
		const authors = await fetchAllAuthors();
		dispatch(setAuthorsAction(authors));
	}

	return (
		<>
			<Header />
			<main className='main'>
				<Routes>
					<Route path='*' element={<h1>Page not found</h1>} />
					<Route path='/' element={<Navigate to='/courses' />} />
					<Route path='registration' element={<Registration />} />
					<Route
						path='login'
						element={token ? <Navigate to='/courses' /> : <Login />}
					/>
					<Route path='courses' element={<Courses />} />
					<Route path='courses/add' element={<CreateCourse />} />
					<Route path='courses/:courseId' element={<CourseInfo />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
