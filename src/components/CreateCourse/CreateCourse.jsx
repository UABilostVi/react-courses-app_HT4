import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CreateCourseMain } from './components/CreateCourseMain';
import { CreateCourseDetails } from './components/CreateCourseDetails';
import { getCreationDate } from '../../helpers/dateGenerator';
import { addCourseAction } from '../../store/courses/actionCreators';
import { FILL_ALERT } from '../../constants';

import './createCourse.css';

const CreateCourse = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	let courseAuthors;
	function getCourseAuthors(data) {
		courseAuthors = data;
	}

	function onSubmit(e) {
		e.preventDefault();
		if (
			e.target.description.value.trim() === '' ||
			e.target.title.value.trim() === '' ||
			e.target.duration.value.trim() === ''
		) {
			alert(FILL_ALERT);
			return;
		}
		createCourse(e);
		navigate('/courses');
	}

	function createCourse(e) {
		const newCourse = {
			title: e.target.title.value,
			description: e.target.description.value,
			creationDate: getCreationDate(),
			duration: Number(e.target.duration.value),
			authors: courseAuthors.map((course) => {
				return course.id;
			}),
			id: uuidv4(),
		};
		dispatch(addCourseAction(newCourse));
	}

	return (
		<div className='container'>
			<form onSubmit={onSubmit} className='create-course__wrapper'>
				<CreateCourseMain />
				<CreateCourseDetails getCourseAuthors={getCourseAuthors} />
			</form>
		</div>
	);
};

export default CreateCourse;
