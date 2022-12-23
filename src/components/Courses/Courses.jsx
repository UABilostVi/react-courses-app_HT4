import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';
import { Button } from '../../common/Button';
import { ProtectedContent } from '../ProtectedContent';

import { selectCourses } from './selectors';

import { BUTTON_ADD_COURSE_TEXT } from '../../constants';

import classes from './Courses.module.css';

const Courses = () => {
	const navigate = useNavigate();
	const [searchText, setSearchText] = useState('');
	const courses = useSelector(selectCourses);

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
			<div>{coursesList}</div>
		</div>
	);
};

export default Courses;
