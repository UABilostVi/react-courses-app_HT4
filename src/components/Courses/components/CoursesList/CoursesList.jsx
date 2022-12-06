import React from 'react';

import { CourseCard } from '../CourseCard';

const CoursesList = (props) => {
	return (
		<div className='courses-list'>
			{props.coursesList.map((course) => {
				return (
					<CourseCard
						key={course.id}
						course={course}
						authorsList={props.authorsList}
					/>
				);
			})}
		</div>
	);
};

export default CoursesList;
