import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';
import { Button } from '../../common/Button';

import { BUTTON_ADD_COURSE_TEXT } from '../../constants';

import './courses.css';

const Courses = () => {
	let coursesList = useSelector((state) => state.courses);
	const navigate = useNavigate();
	let [searchText, setSearchText] = useState('');

	function handleAddCourse() {
		navigate('/courses/add');
	}

	function handleSubmit(e) {
		e.preventDefault();
		setSearchText(e.target.elements.search.value.toLowerCase());
	}

	function handleChange(e) {
		if (e.target.value === '') {
			setSearchText(e.target.value);
		}
	}

	let filteredList = coursesList.filter((course) => {
		return (
			course.title.toLowerCase().includes(searchText) ||
			course.id.toLowerCase().includes(searchText)
		);
	});

	let courses = filteredList.map((course) => {
		return <CourseCard key={course.id} course={course} />;
	});

	return (
		<div className='container'>
			<div className='courses-nav'>
				<SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
				<Button buttonText={BUTTON_ADD_COURSE_TEXT} onClick={handleAddCourse} />
			</div>
			<div className='courses-list'>{courses}</div>
		</div>
	);
};

export default Courses;
