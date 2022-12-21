import {
	SET_COURSES,
	DEL_COURSE,
	ADD_COURSE,
	UPDT_COURSE,
} from './actionTypes';

export const setCoursesAction = (payload) => ({ type: SET_COURSES, payload });
export const delCourseAction = (payload) => ({ type: DEL_COURSE, payload });
export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const updateCourseAction = (payload) => ({ type: UPDT_COURSE, payload });
