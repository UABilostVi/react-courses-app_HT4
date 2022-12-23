import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../../common/Button';

import { pipeDuration } from '../../../../helpers/pipeDuration';
import { transformDate } from '../../../../helpers/dateGenerator';

import { delCourse } from '../../../../store/courses/thunk';
import { selectAuthors } from './selectors';
import { ProtectedContent } from '../../../ProtectedContent';
import { BUTTON_SHOW_COURSE_TEXT, EDIT, DELETE } from '../../../../constants';

import classes from './CourseCard.module.css';

const CourseCard = (props) => {
	const course = props.course;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const creationDate = transformDate(course.creationDate);
	const durationTime = pipeDuration(course.duration);
	const authors = useSelector(selectAuthors);

	const courseAuthors = (course.authors || [])
		.map((authorId) => (authors || []).find(({ id }) => id === authorId))
		.filter(Boolean)
		.map((author) => author.name)
		.join(', ');

	function onShowCourse() {
		navigate(`${course.id}`);
	}

	function onDelCourse() {
		dispatch(delCourse(course.id));
	}

	function onEdit() {
		navigate(`/courses/update/${course.id}`);
	}

	return (
		<div className={classes.courseCard}>
			<div>
				<h2 className={classes.courseTitle}>{course.title}</h2>
				<p>{course.description}</p>
			</div>
			<div className={classes.courseDetails}>
				<div className={classes.courseAuthors}>
					<strong>Authors: </strong>
					<div className={classes.authorsWrapper}>{courseAuthors}</div>
				</div>
				<div>
					<strong>Duration: </strong>
					{durationTime} hours
				</div>
				<div>
					<strong>Created: </strong>
					{creationDate}
				</div>
				<div className={classes.buttonsHolder}>
					<Button buttonText={BUTTON_SHOW_COURSE_TEXT} onClick={onShowCourse} />
					<ProtectedContent requiredRole='admin'>
						<Button serviceButton={true} buttonText={EDIT} onClick={onEdit} />
						<Button
							serviceButton={true}
							buttonText={DELETE}
							onClick={onDelCourse}
						/>
					</ProtectedContent>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
