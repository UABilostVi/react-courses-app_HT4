import React, { useState } from 'react';

import { Input } from '../../../../../../common/Input';
import { pipeDuration } from '../../../../../../helpers/pipeDuration';
import { DUR_PLCHDR } from '../../../../../../constants';

import './duration.css';

const Duration = () => {
	let [time, setTime] = useState(0);
	function changeTime(e) {
		if (e.target.value === '') {
			setTime(0);
		} else {
			setTime(e.target.value);
		}
	}
	return (
		<fieldset className='create-course__duration'>
			<legend className='create-course__details-title'>Duration</legend>
			<Input
				type='number'
				name='duration'
				onChange={changeTime}
				labelText='Duration'
				placeholder={DUR_PLCHDR}
				min={0}
			/>
			<p className='create-course__duration-show'>
				Duration: <strong>{pipeDuration(time)}</strong> hours
			</p>
		</fieldset>
	);
};

export default Duration;
