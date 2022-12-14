import React from 'react';

import { Button } from '../../../../common/Button';

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
