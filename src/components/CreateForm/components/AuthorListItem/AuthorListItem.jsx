import React from 'react';

import { Button } from '../../../../common/Button';

import classes from './AuthorListItem.module.css';

const AuthorListItem = (props) => {
	const author = props.author;

	function addHandler() {
		const newCourseAuthor = { id: author.id, name: author.name };
		return props.onClickHand(newCourseAuthor);
	}

	return (
		<div
			key={author.id}
			id={author.id}
			title={author.name}
			className={classes.item}
		>
			<span>{author.name}</span>
			<Button
				type='button'
				buttonText={props.buttonText}
				onClick={addHandler}
			/>
		</div>
	);
};

export default AuthorListItem;
