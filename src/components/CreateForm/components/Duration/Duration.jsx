import React, { useState } from 'react';

import { Input } from '../../../../common/Input';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { DUR_PLCHDR, MIN_TIME, DURATION } from '../../../../constants';

import classes from './Duration.module.css';

const Duration = (props) => {
	const [time, setTime] = useState(MIN_TIME);
	const durationTime = pipeDuration(time);

	function onChangeTime(e) {
		if (e.target.value === '') {
			setTime(MIN_TIME);
		} else {
			setTime(e.target.value);
		}
	}

	return (
		<fieldset>
			<legend className={classes.legend}>{DURATION}</legend>
			<Input
				defaultValue={props?.data?.duration}
				type='number'
				name={classes.duration}
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
