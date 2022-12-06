import React from 'react';

import { Input } from '../../../../../../common/Input';
import { Button } from '../../../../../../common/Button';
import {
	BUTTON_CREATE_AUTHOR_TEXT,
	AUTHOR_PLCHDR,
} from '../../../../../../constants';

import './addAuthor.css';

const AddAuthor = (props) => {
	return (
		<fieldset className='create-course__add-author'>
			<legend className='create-course__details-title'>Add author</legend>
			<Input
				value={props.name}
				name='authorName'
				labelText='Author name'
				placeholder={AUTHOR_PLCHDR}
				onChange={props.onChangeHandler}
				minLength={props.minLength}
			/>
			<Button
				onClick={props.addAuthor}
				type='button'
				buttonText={BUTTON_CREATE_AUTHOR_TEXT}
				centered={true}
			/>
		</fieldset>
	);
};

export default AddAuthor;
