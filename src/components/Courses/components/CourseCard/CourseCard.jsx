import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../../common/Button';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { transformDate } from '../../../../helpers/dateGenerator';
import { delCourseAction } from '../../../../store/courses/actionCreators';
import { getAuthors } from './selectors';
import { BUTTON_SHOW_COURSE_TEXT, EDIT, DELETE } from '../../../../constants';

import './courseCard.css';

const CourseCard = (props) => {
	const course = props.course;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const authors = useSelector(getAuthors);
	const creationDate = transformDate(course.creationDate);
	const durationTime = pipeDuration(course.duration);

	const courseAuthors = course.authors.map((authorId) => {
		return authors.find(({ id }) => id === authorId);
	});

	const courseAuthorsList = courseAuthors.map((author, index, array) => {
		return index + 1 === array.length ? author.name : author.name + ', ';
	});

	function onShowCourse() {
		navigate(`${course.id}`);
	}

	function onDelCourse() {
		dispatch(delCourseAction(course.id));
	}

	return (
		<div className='course-card'>
			<div className='course-card__info'>
				<h2 className='course-card__title'>{course.title}</h2>
				<p className='course-card__desc'>{course.description}</p>
			</div>
			<div className='course-card__details'>
				<div className='course-card__authors'>
					<strong>Authors: </strong>
					<div className='course-card__authors-wrapper'>
						{courseAuthorsList}
					</div>
				</div>
				<div>
					<strong>Duration: </strong>
					{durationTime} hours
				</div>
				<div>
					<strong>Created: </strong>
					{creationDate}
				</div>
				<div className='course-card__buttons-holder'>
					<Button buttonText={BUTTON_SHOW_COURSE_TEXT} onClick={onShowCourse} />
					<Button serviceButton={true} buttonText={EDIT} />
					<Button
						serviceButton={true}
						buttonText={DELETE}
						onClick={onDelCourse}
					/>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
