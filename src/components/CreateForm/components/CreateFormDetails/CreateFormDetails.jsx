import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AddAuthor } from '../AddAuthor';
import { AuthorListItem } from '../AuthorListItem';
import { Duration } from '../Duration';
import { getAuthors } from './selectors';
import {
	BUTTON_ADD_AUTHOR_TEXT,
	BUTTON_DEL_AUTHOR_TEXT,
	EMPTY_AUTHORS_LIST,
} from '../../../../constants';

import classes from './CreateFormDetails.module.css';

const CreateFormDetails = (props) => {
	const authors = useSelector(getAuthors);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [allAuthors, setAllAuthors] = useState([]);

	useEffect(() => {
		const courseAuthorsId = courseAuthors.map((item) => item.id);
		// const courseAuthorsId = props.data.authors;
		const updatedAuthorsList = authors.filter((item) => {
			return !courseAuthorsId.includes(item.id);
		});
		setAllAuthors(updatedAuthorsList);
	}, [authors, courseAuthors]);

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

	let authorsList = allAuthors.map((author) => {
		return (
			<AuthorListItem
				key={author.id}
				author={author}
				buttonText={BUTTON_ADD_AUTHOR_TEXT}
				onClickHand={addCourseAuthor}
			/>
		);
	});

	let courseAuthorsList =
		courseAuthors.length === 0 ? (
			<div style={{ textAlign: 'center' }}>{EMPTY_AUTHORS_LIST}</div>
		) : (
			courseAuthors.map((author) => {
				return (
					<AuthorListItem
						key={author.id}
						author={author}
						buttonText={BUTTON_DEL_AUTHOR_TEXT}
						onClickHand={delCourseAuthor}
					/>
				);
			})
		);

	return (
		<div className={classes.details}>
			<div className={classes.col}>
				<AddAuthor />
				<Duration data={props.data} />
			</div>
			<div className={classes.col}>
				<div>
					<h2 className={classes.title}>Authors</h2>
					{authorsList}
				</div>
				<div>
					<h2 className={classes.title}>Course authors</h2>
					{courseAuthorsList}
				</div>
			</div>
		</div>
	);
};

export default CreateFormDetails;
