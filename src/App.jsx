import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Courses } from './components/Courses';
import { CreateCourse } from './components/CreateCourse';
import { Header } from './components/Header';
import { Registration } from './components/Registration';
import { Login } from './components/Login';
import { CourseInfo } from './components/CourseInfo';

import { getAllCourses, getAllAuthors } from './services';
import { setCoursesAction } from './store/courses/actionCreators';
import { setAuthorsAction } from './store/authors/actionCreators';
import { logInAction } from './store/user/actionCreators';

import './App.css';

function App() {
	const dispatch = useDispatch();
	const token = JSON.parse(localStorage.getItem('userToken'));
	const navigate = useNavigate();

	useEffect(() => {
		checkIsAuth();
		fetchAuthors();
		fetchCourses();
	}, []);

	async function checkIsAuth() {
		if (!!token) {
			dispatch(logInAction(token));
		} else {
			navigate('login');
		}
	}

	async function fetchCourses() {
		const courses = await getAllCourses();
		dispatch(setCoursesAction(courses));
	}

	async function fetchAuthors() {
		const authors = await getAllAuthors();
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
