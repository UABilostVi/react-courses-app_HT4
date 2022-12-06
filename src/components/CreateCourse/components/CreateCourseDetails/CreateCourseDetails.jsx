import React from 'react';

import { AddAuthor } from './components/AddAuthor';
import { Duration } from './components/Duration';

import './createCourseDetails.css';

const CreateCourseDetails = (props) => {
	return (
		<div className='create-course__details'>
			<div className='create-course__details-col'>
				<AddAuthor
					addAuthor={props.addAuthor}
					name={props.name}
					onChangeHandler={props.onChangeHandler}
				/>
				<Duration />
			</div>
			<div className='create-course__details-col'>
				<fieldset className='create-course__authors'>
					<legend className='create-course__details-title'>Authors</legend>
					{props.authorsList}
				</fieldset>
				<fieldset className='create-course__authors-list'>
					<legend className='create-course__details-title'>
						Course authors
					</legend>
					{props.courseAuthorsList}
				</fieldset>
			</div>
		</div>
	);
};

export default CreateCourseDetails;
