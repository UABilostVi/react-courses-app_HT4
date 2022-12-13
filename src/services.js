import axios from 'axios';

export const fetchLogin = async (loginPayload) => {
	let res = await axios
		.post('http://localhost:4000/login', loginPayload)
		.then((response) => {
			return response;
		})
		.catch(() => {
			alert('Invalid user password or email');
		});
	return res;
};

export const fetchRegistr = async (newUser) => {
	let res = await axios
		.post('http://localhost:4000/register', newUser)
		.then((response) => {
			return response;
		})
		.catch(() => {
			alert('Wrong data');
		});
	return res;
};

export const getAllCourses = async () => {
	let courses = await axios
		.get('http://localhost:4000/courses/all')
		.then((response) => {
			return response.data.result;
		})
		.catch((err) => {
			alert(err.message);
		});
	return courses;
};

export const getAllAuthors = async () => {
	let authors = await axios
		.get('http://localhost:4000/authors/all')
		.then((response) => {
			return response.data.result;
		})
		.catch((err) => {
			alert(err.message);
		});
	return authors;
};

// export const createAuthor = async (newAuthor) => {
// 	const token = JSON.parse(localStorage.getItem('userToken'));
// 	await axios
// 		.post('http://localhost:4000/authors/add', newAuthor, {
// 			headers: {
// 				Authorization: `${token.token}`,
// 			},
// 		})
// 		.then((res) => {
// 			return res;
// 		})
// 		.catch((err) => {
// 			alert(err.message);
// 		});
// };
