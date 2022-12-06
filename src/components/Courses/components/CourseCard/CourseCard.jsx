import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../common/Button';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { transformDate } from '../../../../helpers/dateGenerator';
import { BUTTON_SHOW_COURSE_TEXT } from '../../../../constants';

import './courseCard.css';

const CourseCard = (props) => {
	let creationDate = transformDate(props.course.creationDate);
	const navigate = useNavigate();

	function getCourseAuthors() {
		return props.course.authors
			.map((authorId) => {
				return props.authorsList.find(({ id }) => {
					return id === authorId;
				});
			})
			.map((author, index, array) => {
				if (index + 1 === array.length) {
					return <span key={author.id}>{author.name}</span>;
				} else return <span key={author.id}>{author.name}, </span>;
			});
	}

	function onShowCourse() {
		navigate(`${props.course.id}`);
	}

	return (
		<div className='course-card'>
			<div className='course-card__info'>
				<h2 className='course-card__title'>{props.course.title}</h2>
				<p className='course-card__desc'>{props.course.description}</p>
			</div>
			<div className='course-card__details'>
				<div className='course-card__authors'>
					<strong>Authors: </strong>
					<div className='course-card__authors-wrapper'>
						{getCourseAuthors()}
					</div>
				</div>
				<div>
					<strong>Duration: </strong>
					{pipeDuration(props.course.duration)} hours
				</div>
				<div>
					<strong>Created: </strong>
					{creationDate}
				</div>
				<Button
					centered={true}
					buttonText={BUTTON_SHOW_COURSE_TEXT}
					onClick={onShowCourse}
				/>
			</div>
		</div>
	);
};

export default CourseCard;
