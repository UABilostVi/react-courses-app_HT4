import React from 'react';

import { Button } from '../../../../common/Button';

import classes from './AuthorListItem.module.css';

const AuthorListItem = (props) => {
	const author = props.author;

	function onClick() {
		const clickedCourse = { id: author.id, name: author.name };
		return props.onClick(clickedCourse);
	}

	return (
		<div key={author.id} id={author.id} className={classes.item}>
			<span>{author.name}</span>
			<Button type='button' buttonText={props.buttonText} onClick={onClick} />
		</div>
	);
};

export default AuthorListItem;
