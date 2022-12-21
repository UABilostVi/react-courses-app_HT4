import axios from 'axios';

const axs = axios.create({
	baseURL: 'http://localhost:4000',
});

export const serviceAPI = {
	fetchLogin(loginPayload) {
		return axs.post('login', loginPayload);
	},

	fetchLogout() {
		return axs.delete('logout', {
			headers: {
				Authorization: `${localStorage.getItem('userToken')}`,
			},
		});
	},

	fetchRegistr(newUser) {
		return axs.post('register', newUser);
	},

	fetchAllCourses() {
		return axs.get('courses/all');
	},

	fetchAllAuthors() {
		return axs.get('authors/all');
	},

	fetchCurrentUser() {
		return axs.get('users/me', {
			headers: {
				Authorization: `${localStorage.getItem('userToken')}`,
			},
		});
	},

	fetchDelCourse(courseId) {
		return axs.delete(`courses/${courseId}`, {
			headers: {
				Authorization: `${localStorage.getItem('userToken')}`,
			},
		});
	},

	fetchCreateCourse(course) {
		return axs.post(`courses/add`, course, {
			headers: {
				Authorization: `${localStorage.getItem('userToken')}`,
			},
		});
	},

	fetchCreateAuthor(author) {
		return axs.post(`authors/add`, author, {
			headers: {
				Authorization: `${localStorage.getItem('userToken')}`,
			},
		});
	},

	fetchUpdateCourse(course) {
		return axs.put(`courses/id`, course, {
			headers: {
				Authorization: `${localStorage.getItem('userToken')}`,
			},
		});
	},
};
