import React from 'react';

import { Input } from '../../../../common/Input';
import { Button } from '../../../../common/Button';
import {
	TITLE_PLCHDR,
	DESCR_PLCHDR,
	TITLE,
	BUTTON_CREATE_COURSE_TEXT,
	DESC_MIN_LENGTH,
	DESCR_ROWS,
	TITLE_MIN_LENGTH,
} from '../../../../constants';

import classes from './CreateFormMain.module.css';

const CreateFormMain = (props) => {
	return (
		<div>
			<div className={classes.item}>
				<Input
					defaultValue={props?.data?.title}
					name='title'
					labelText={TITLE}
					type='text'
					placeholder={TITLE_PLCHDR}
					minLength={TITLE_MIN_LENGTH}
				/>
				<Button buttonText={BUTTON_CREATE_COURSE_TEXT} type='submit' />
			</div>
			<div className={classes.item}>
				<textarea
					defaultValue={props?.data?.description}
					name='description'
					className={classes.description}
					placeholder={DESCR_PLCHDR}
					rows={DESCR_ROWS}
					minLength={DESC_MIN_LENGTH}
				></textarea>
			</div>
		</div>
	);
};

export default CreateFormMain;