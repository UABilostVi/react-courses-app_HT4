import React from 'react';

import './button.css';

const Button = (props) => {
	let classes = 'button';
	classes += props.centered === true ? ' centered' : '';
	return (
		<button
			className={classes}
			// style={props.style}
			type={props.type}
			onClick={props.onClick}
		>
			{props.buttonText}
		</button>
	);
};

export default Button;
