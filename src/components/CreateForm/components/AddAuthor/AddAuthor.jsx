import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input } from '../../../../common/Input';
import { Button } from '../../../../common/Button';

import { createAuthor } from '../../../../store/authors/thunk';

import {
	BUTTON_CREATE_AUTHOR_TEXT,
	AUTHOR_PLCHDR,
	CHARS_ALERT,
	NAME_MIN_LENGTH,
	AUTHOR_NAME_TEXT,
} from '../../../../constants';

import classes from './AddAuthor.module.css';

const AddAuthor = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');

	function onChange(e) {
		setName(e.target.value);
	}

	function onCreateAuthor() {
		if (name.trim().length < NAME_MIN_LENGTH || name.trim() === '') {
			alert(CHARS_ALERT);
			return;
		}
		dispatch(createAuthor({ name }));
		setName('');
	}

	return (
		<fieldset>
			<legend className={classes.legend}>Add author</legend>
			<Input
				value={name}
				name='authorName'
				labelText={AUTHOR_NAME_TEXT}
				placeholder={AUTHOR_PLCHDR}
				onChange={onChange}
				minLength={NAME_MIN_LENGTH}
			/>
			<Button
				onClick={onCreateAuthor}
				type='button'
				buttonText={BUTTON_CREATE_AUTHOR_TEXT}
				centered={true}
			/>
		</fieldset>
	);
};

export default AddAuthor;
