import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { pipeDuration } from '../../helpers/pipeDuration';
import { transformDate } from '../../helpers/dateGenerator';
import {
	mockedCoursesList as coursesList,
	mockedAuthorsList as authorsList,
} from '../../constants';

import './courseInfo.css';

const CourseInfo = () => {
	const { courseId } = useParams();
	const course = coursesList.find((course) => {
		return course.id === courseId;
	});
	const duration = pipeDuration(course.duration);
	const createdDate = transformDate(course.creationDate);
	const authors = course.authors
		.map((authorId) => {
			return authorsList.find(({ id }) => {
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
				<Link to='/courses'>Back to courses</Link>
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
							<div className='course-info__authors-wrapper'>{authors}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
