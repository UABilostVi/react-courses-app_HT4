import React from 'react';

import { Button } from '../../../../common/Button';

const AuthorListItem = (props) => {
	function addHandler() {
		let newCourseAuthor = { id: author.id, name: author.name };
		return props.onClickHand(newCourseAuthor);
	}

	const author = props.author;

	return (
		<div
			key={author.id}
			id={author.id}
			title={author.name}
			className='author-item'
		>
			<span className='author-item-name'>{author.name}</span>
			<Button
				type='button'
				buttonText={props.buttonText}
				onClick={addHandler}
			/>
		</div>
	);
};

export default AuthorListItem;
