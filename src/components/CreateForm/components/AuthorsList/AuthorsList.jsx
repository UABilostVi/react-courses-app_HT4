import React from 'react';

import { EMPTY_AUTHORS_LIST } from '../../../../constants';
import { AuthorListItem } from '../AuthorListItem';

const AuthorsList = (props) => {
	const list = props.list.map((author) => {
		return (
			<AuthorListItem
				key={author.id}
				author={author}
				buttonText={props.buttonText}
				onClick={props.clickHandler}
			/>
		);
	});

	return props.list.length === 0 ? (
		<div className='emptyList'>{EMPTY_AUTHORS_LIST}</div>
	) : (
		<div>
			<legend className='legend'>{props.title}</legend>
			{list}
		</div>
	);
};

export default AuthorsList;
