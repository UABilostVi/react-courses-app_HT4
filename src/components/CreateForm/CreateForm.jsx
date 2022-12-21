import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CreateFormMain } from './components/CreateFormMain';
import { CreateFormDetails } from './components/CreateFormDetails';

import { getCreationDate } from '../../helpers/dateGenerator';
import { createCourse } from '../../store/courses/thunk';

import { FILL_ALERT } from '../../constants';

import './createForm.css';

const CreateForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { courseId } = useParams();
	// const [data, setData] = useState([]);

	const courses = useSelector((state) => state.courses);
	const course = courses.find((course) => {
		return course.id === courseId;
	});

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
		CreateForm(e);
		navigate('/courses');
	}

	function CreateForm(e) {
		const newCourse = {
			title: e.target.title.value,
			description: e.target.description.value,
			creationDate: getCreationDate(),
			duration: Number(e.target.duration.value),
			authors: courseAuthors.map((course) => {
				return course.id;
			}),
		};
		dispatch(createCourse(newCourse));
	}

	return (
		<div className='container'>
			<form onSubmit={onSubmit} className='create-course__wrapper'>
				<CreateFormMain data={course} />
				<CreateFormDetails data={course} getCourseAuthors={getCourseAuthors} />
			</form>
		</div>
	);
};

export default CreateForm;
