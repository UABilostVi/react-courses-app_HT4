import React, { useState, createContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CreateFormMain } from './components/CreateFormMain';
import { CreateFormDetails } from './components/CreateFormDetails';

import { getCreationDate } from '../../helpers/dateGenerator';
import { createCourse } from '../../store/courses/thunk';

import { FILL_ALERT } from '../../constants';

export const CourseContext = createContext({});

const CreateForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { courseId } = useParams();
	const [courseAuthors, setcourseAuthors] = useState([]);
	const courses = useSelector((state) => state.courses);
	const course = courses.find((course) => {
		return course.id === courseId;
	});

	function getCourseAuthors(authors) {
		setcourseAuthors(authors);
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
			<form onSubmit={onSubmit}>
				<CourseContext.Provider value={course}>
					<CreateFormMain />
					<CreateFormDetails getCourseAuthors={getCourseAuthors} />
				</CourseContext.Provider>
			</form>
		</div>
	);
};

export default CreateForm;
