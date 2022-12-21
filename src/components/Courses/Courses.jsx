import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';
import { Button } from '../../common/Button';
import { ProtectedContent } from '../ProtectedContent';

import { selectCourses } from './selectors';

import { getCourses } from '../../store/courses/thunk';
import { getAuthors } from '../../store/authors/thunk';

import { BUTTON_ADD_COURSE_TEXT } from '../../constants';

import classes from './Courses.module.css';

const Courses = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [searchText, setSearchText] = useState('');
	const courses = useSelector(selectCourses);
	const token = localStorage.getItem('userToken');

	useEffect(() => {
		if (token) {
			dispatch(getAuthors());
			dispatch(getCourses());
		}
	}, []);

	function onAddCourse() {
		navigate('/courses/add');
	}

	function onSubmit(e) {
		e.preventDefault();
		setSearchText(e.target.elements.search.value.toLowerCase());
	}

	function onChange(e) {
		if (e.target.value === '') {
			setSearchText(e.target.value);
		}
	}

	const filteredCourses = courses.filter((course) => {
		return (
			course.title.toLowerCase().includes(searchText) ||
			course.id.toLowerCase().includes(searchText)
		);
	});

	const coursesList = filteredCourses.map((course) => {
		return <CourseCard key={course.id} course={course} />;
	});

	return (
		<div className='container'>
			<div className={classes.nav}>
				<SearchBar onSubmit={onSubmit} onChange={onChange} />
				<ProtectedContent requiredRole='admin'>
					<Button buttonText={BUTTON_ADD_COURSE_TEXT} onClick={onAddCourse} />
				</ProtectedContent>
			</div>
			<div className='courses-list'>{coursesList}</div>
		</div>
	);
};

export default Courses;
