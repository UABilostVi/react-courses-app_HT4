import React from 'react';

import { Button } from '../../../../../../common/Button';

const AuthorListItem = (props) => {
	function addHandler() {
		let newCourseAuthor = { id: props.id, name: props.name };
		return props.onClickHand(newCourseAuthor);
	}
	return (
		<div
			key={props.id}
			id={props.id}
			title={props.name}
			className='author-item'
		>
			<span className='author-item-name'>{props.name}</span>
			<Button
				type='button'
				buttonText={props.buttonText}
				onClick={addHandler}
			/>
		</div>
	);
};

export default AuthorListItem;
