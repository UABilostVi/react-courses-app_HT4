import {
	SET_COURSES,
	DEL_COURSE,
	ADD_COURSE,
	UPDT_COURSE,
} from './actionTypes';

const coursesInitialState = [];

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
		case UPDT_COURSE:
			return [
				...state.filter((course) => course.id !== action.payload.id),
				action.payload,
			];
		default:
			return state;
	}
};
