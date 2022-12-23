import React, { useEffect, useState, useContext } from 'react';

import { Input } from '../../../../common/Input';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { DUR_PLCHDR, MIN_TIME, DURATION } from '../../../../constants';

import classes from './Duration.module.css';

import { CourseContext } from '../../CreateForm';

const Duration = () => {
	const [time, setTime] = useState(MIN_TIME);
	const durationTime = pipeDuration(time || MIN_TIME);
	const course = useContext(CourseContext);

	useEffect(() => {
		setTime(course?.duration);
	}, []);

	function onChangeTime(e) {
		if (e.target.value === '') {
			setTime(MIN_TIME);
		} else {
			setTime(e.target.value);
		}
	}

	return (
		<fieldset>
			<legend className='legend'>{DURATION}</legend>
			<Input
				defaultValue={course?.duration}
				type='number'
				name='duration'
				onChange={onChangeTime}
				labelText={DURATION}
				placeholder={DUR_PLCHDR}
				min={MIN_TIME}
			/>
			<p>
				{DURATION}: <strong className={classes.hours}>{durationTime}</strong>{' '}
				hours
			</p>
		</fieldset>
	);
};

export default Duration;
