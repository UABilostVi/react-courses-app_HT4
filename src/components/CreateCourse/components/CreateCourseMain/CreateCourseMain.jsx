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

import './createCourseMain.css';

const CreateCourseMain = () => {
	return (
		<div className='create-course__main'>
			<div className='create-course__title-holder create-course__main-item'>
				<Input
					name='title'
					labelText={TITLE}
					type='text'
					placeholder={TITLE_PLCHDR}
					minLength={TITLE_MIN_LENGTH}
				/>
				<Button buttonText={BUTTON_CREATE_COURSE_TEXT} type='submit' />
			</div>
			<div className='create-course__main-item'>
				<textarea
					name='description'
					className='create-course__desc'
					placeholder={DESCR_PLCHDR}
					rows={DESCR_ROWS}
					minLength={DESC_MIN_LENGTH}
				></textarea>
			</div>
		</div>
	);
};

export default CreateCourseMain;
