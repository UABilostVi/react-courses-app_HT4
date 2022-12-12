import { SET_COURSES, DEL_COURSE, ADD_COURSE } from './actionTypes';

export const setCoursesAction = (payload) => ({ type: SET_COURSES, payload });
export const delCourseAction = (payload) => ({ type: DEL_COURSE, payload });
export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
