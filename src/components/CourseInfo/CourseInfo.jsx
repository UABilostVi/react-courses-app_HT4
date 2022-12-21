import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { pipeDuration } from '../../helpers/pipeDuration';
import { transformDate } from '../../helpers/dateGenerator';
import { selectCourses, selectAuthors } from './selectors';
import { BACK_TO_COURSES } from '../../constants';

import classes from './CourseInfo.module.css';

import { getCourses } from '../../store/courses/thunk';
import { getAuthors } from '../../store/authors/thunk';
// import { currentUserThunk } from '../../store/user/thunk';

const CourseInfo = () => {
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	// const token = localStorage.getItem('userToken');
	const [course, setCourse] = useState(null);

	const courses = useSelector(selectCourses);
	const authors = useSelector(selectAuthors);
	const { courseId } = useParams();
	// const course = courses.find((course) => course.id === courseId);
	const createdDate = transformDate(course.creationDate);
	const duration = pipeDuration(course.duration);

	useEffect(() => {
		console.log('fgf');
		dispatch(getAuthors());
		dispatch(getCourses());
	}, []);

	useEffect(() => {
		setCourse(courses.find((course) => course.id === courseId));
	}, [courseId]);

	const courseAuthors = course.authors.map((authorId) => {
		return authors.find(({ id }) => id === authorId);
	});

	const courseAuthorsList = courseAuthors.map((author, index, array) => {
		return index + 1 === array.length ? author.name : author.name + ', ';
	});

	return (
		<div className='container'>
			<div className={classes.wrapper}>
				<Link to='/courses'>{BACK_TO_COURSES}</Link>
				<h2 className={classes.title}>{course.title}</h2>
				<div className={classes.info}>
					<p className={classes.description}>{course.description}</p>
					<div className={classes.details}>
						<div>
							<strong>ID: </strong>
							{courseId}
						</div>
						<div>
							<strong>Duration: </strong>
							{duration} hours
						</div>
						<div>
							<strong>Created: </strong>
							{createdDate}
						</div>
						<div>
							<strong>Authors: </strong>
							<div className={classes.authorsWrapper}>{courseAuthorsList}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
