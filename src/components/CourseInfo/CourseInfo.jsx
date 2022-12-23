import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { pipeDuration } from '../../helpers/pipeDuration';
import { transformDate } from '../../helpers/dateGenerator';
import { selectCourses, selectAuthors } from './selectors';
import { BACK_TO_COURSES } from '../../constants';

import classes from './CourseInfo.module.css';

const CourseInfo = () => {
	const courses = useSelector(selectCourses);
	const authors = useSelector(selectAuthors);
	const { courseId } = useParams();
	const course = courses.find((course) => course.id === courseId);

	if (!course) {
		return <div>No courses found.</div>;
	}

	const createdDate = transformDate(course.creationDate);
	const duration = pipeDuration(course.duration);

	const courseAuthors = (course.authors || [])
		.map((authorId) => (authors || []).find(({ id }) => id === authorId))
		.filter(Boolean)
		.map((author) => author.name)
		.join(', ');

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
							<div className={classes.authorsWrapper}>{courseAuthors}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
