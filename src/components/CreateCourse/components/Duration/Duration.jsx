import React, { useState } from 'react';

import { Input } from '../../../../common/Input';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { DUR_PLCHDR, MIN_TIME, DURATION } from '../../../../constants';

import './duration.css';

const Duration = () => {
	let [time, setTime] = useState(MIN_TIME);
	const durationTime = pipeDuration(time);

	function onChangeTime(e) {
		if (e.target.value === '') {
			setTime(MIN_TIME);
		} else {
			setTime(e.target.value);
		}
	}

	return (
		<fieldset className='create-course__duration'>
			<legend className='create-course__details-title'>{DURATION}</legend>
			<Input
				type='number'
				name='duration'
				onChange={onChangeTime}
				labelText={DURATION}
				placeholder={DUR_PLCHDR}
				min={MIN_TIME}
			/>
			<p className='create-course__duration-show'>
				{DURATION} :<strong>{durationTime}</strong> hours
			</p>
		</fieldset>
	);
};

export default Duration;
