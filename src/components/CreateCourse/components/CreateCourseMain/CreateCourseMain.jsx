import React from 'react';

import { Input } from '../../../../common/Input';
import { Button } from '../../../../common/Button';
import { TITLE_PLCHDR, DESCR_PLCHDR } from '../../../../constants';

import './createCourseMain.css';

const CreateCourseMain = () => {
	return (
		<div className='create-course__main'>
			<div className='create-course__title-holder create-course__main-item'>
				<Input
					name='title'
					labelText='Title'
					type='text'
					placeholder={TITLE_PLCHDR}
					minLength={2}
				/>
				<Button buttonText='Create course' type='submit' />
			</div>
			<div className='create-course__main-item'>
				<textarea
					name='description'
					className='create-course__desc'
					placeholder={DESCR_PLCHDR}
					rows='5'
					minLength={2}
				></textarea>
			</div>
		</div>
	);
};

export default CreateCourseMain;
