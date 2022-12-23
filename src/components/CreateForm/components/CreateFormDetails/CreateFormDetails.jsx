import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';

import { AddAuthor } from '../AddAuthor';
import { AuthorsList } from '../AuthorsList';
import { Duration } from '../Duration';
import { getAuthors } from './selectors';
import {
	BUTTON_ADD_AUTHOR_TEXT,
	BUTTON_DEL_AUTHOR_TEXT,
} from '../../../../constants';

import { CourseContext } from '../../CreateForm';

import classes from './CreateFormDetails.module.css';

const CreateFormDetails = (props) => {
	const authors = useSelector(getAuthors);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [allAuthors, setAllAuthors] = useState([]);
	const course = useContext(CourseContext);

	useEffect(() => {
		const updatedAuthorsList = authors.filter((item) => {
			return !course?.authors.includes(item.id);
		});
		const updatedCourseAuthors = authors.filter((item) => {
			return course?.authors.includes(item.id);
		});
		setAllAuthors(updatedAuthorsList);
		setCourseAuthors(updatedCourseAuthors);
	}, [authors]);

	useEffect(() => {
		props.getCourseAuthors(courseAuthors);
	}, [courseAuthors]);

	function addCourseAuthor(newAuthor) {
		setCourseAuthors([newAuthor, ...courseAuthors]);
		setAllAuthors((prev) => prev.filter((item) => item.id !== newAuthor.id));
	}

	function delCourseAuthor(newAuthor) {
		setAllAuthors([newAuthor, ...allAuthors]);
		setCourseAuthors((prev) => prev.filter((item) => item.id !== newAuthor.id));
	}

	// let authorsList = allAuthors.map((author) => {
	// 	return (
	// <AuthorListItem
	// 	key={author.id}
	// 	author={author}
	// 	buttonText={BUTTON_ADD_AUTHOR_TEXT}
	// 	onClickHand={addCourseAuthor}
	// />
	// 		<div
	// 			key={author.id}
	// 			id={author.id}
	// 			title={author.name}
	// 			className={classes.item}
	// 		>
	// 			<span>{author.name}</span>
	// 			<Button
	// 				type='button'
	// 				buttonText={BUTTON_ADD_AUTHOR_TEXT}
	// 				onClick={addCourseAuthor}
	// 			/>
	// 		</div>
	// 	);
	// });

	// let courseAuthorsList =
	// 	courseAuthors.length === 0 ? (
	// 		<div style={{ textAlign: 'center' }}>{EMPTY_AUTHORS_LIST}</div>
	// 	) : (
	// 		courseAuthors.map((author) => {
	// 			return (
	// 				// <AuthorListItem
	// 				// 	key={author.id}
	// 				// 	author={author}
	// 				// 	buttonText={BUTTON_DEL_AUTHOR_TEXT}
	// 				// 	onClickHand={delCourseAuthor}
	// 				// />
	// 				<div
	// 					key={author.id}
	// 					id={author.id}
	// 					title={author.name}
	// 					className={classes.item}
	// 				>
	// 					<span>{author.name}</span>
	// 					<Button
	// 						type='button'
	// 						buttonText={BUTTON_DEL_AUTHOR_TEXT}
	// 						onClick={delCourseAuthor}
	// 					/>
	// 				</div>
	// 			);
	// 		})
	// 	);

	return (
		<div className={classes.details}>
			<div className={classes.col}>
				<AddAuthor />
				<Duration />
			</div>
			<div className={classes.col}>
				<AuthorsList
					list={allAuthors}
					title='Authors'
					clickHandler={addCourseAuthor}
					buttonText={BUTTON_ADD_AUTHOR_TEXT}
				/>
				<AuthorsList
					list={courseAuthors}
					title='Course authors'
					clickHandler={delCourseAuthor}
					buttonText={BUTTON_DEL_AUTHOR_TEXT}
				/>
			</div>
		</div>
	);
};

export default CreateFormDetails;
