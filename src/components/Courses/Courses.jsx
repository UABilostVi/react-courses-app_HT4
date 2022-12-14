import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';
import { Button } from '../../common/Button';
import { getCourses } from './selectors';
import { BUTTON_ADD_COURSE_TEXT } from '../../constants';

import './courses.css';

const Courses = () => {
	const navigate = useNavigate();
	const courses = useSelector(getCourses);
	const [searchText, setSearchText] = useState('');

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
			<div className='courses-nav'>
				<SearchBar onSubmit={onSubmit} onChange={onChange} />
				<Button buttonText={BUTTON_ADD_COURSE_TEXT} onClick={onAddCourse} />
			</div>
			<div className='courses-list'>{coursesList}</div>
		</div>
	);
};

export default Courses;
