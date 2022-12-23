import React from 'react';

import { Button } from '../../../../common/Button';
import { EMPTY_AUTHORS_LIST } from '../../../../constants';

import classes from './AuthorsList.module.css';

const AuthorsList = (props) => {
	// const author = props.author;
	// console.log(author);

	function clickHandler(newCourseAuthor) {
		// const newCourseAuthor = { id: author.id, name: author.name };
		props.clickHandler(newCourseAuthor);
	}

	const list = props.list.map((author) => {
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
					onClick={clickHandler}
				/>
			</div>
		);
	});

	return props.list.length === 0 ? (
		<div>{EMPTY_AUTHORS_LIST}</div>
	) : (
		<div>
			<legend className='legend'>{props.title}</legend>
			{list}
		</div>
	);
};

export default AuthorsList;
