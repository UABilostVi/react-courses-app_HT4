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
	const course = courses.find((course) => {
		return course.id === courseId;
	});
	const createdDate = transformDate(course.creationDate);
	const duration = pipeDuration(course.duration);
	//FIXME
	const authorsList = course.authors
		.map((authorId) => {
			return authors.find(({ id }) => {
				return id === authorId;
			});
		})
		.map((author, index, array) => {
			if (index + 1 === array.length) {
				return author.name;
			}
			return author.name + ', ';
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
							<div className='course-info__authors-wrapper'>{authorsList}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
