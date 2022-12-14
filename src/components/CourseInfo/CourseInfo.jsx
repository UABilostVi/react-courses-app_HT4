import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { pipeDuration } from '../../helpers/pipeDuration';
import { transformDate } from '../../helpers/dateGenerator';
import { getCourses, getAuthors } from './selectors';
import { BACK_TO_COURSES } from '../../constants';

import './courseInfo.css';

const CourseInfo = () => {
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const { courseId } = useParams();
	const course = courses.find((course) => course.id === courseId);
	const createdDate = transformDate(course.creationDate);
	const duration = pipeDuration(course.duration);

	const courseAuthors = course.authors.map((authorId) => {
		return authors.find(({ id }) => id === authorId);
	});

	const courseAuthorsList = courseAuthors.map((author, index, array) => {
		return index + 1 === array.length ? author.name : author.name + ', ';
	});

	return (
		<div className='container'>
			<div className='course-info__wrapper'>
				<Link to='/courses'>{BACK_TO_COURSES}</Link>
				<h2 className='course-info__title'>{course.title}</h2>
				<div className='course-info'>
					<p className='course-info__desc'>{course.description}</p>
					<div className='course-info__details'>
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
						<div className='course-info__authors'>
							<strong>Authors: </strong>
							<div className='course-info__authors-wrapper'>
								{courseAuthorsList}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
