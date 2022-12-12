import { SET_COURSES, DEL_COURSE, ADD_COURSE } from './actionTypes';

const coursesInitialState = []; // default value - empty array. After success getting courses from API - array of courses.

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case SET_COURSES:
			return [...action.payload];
		case ADD_COURSE:
			return [...state, action.payload];
		case DEL_COURSE:
			return [
				...state.filter((course) => {
					return course.id !== action.payload;
				}),
			];
		default:
			return state;
	}
};
