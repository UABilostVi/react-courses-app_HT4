import { serviceAPI } from '../../services';
import { setAuthorsAction, createAuthorAction } from './actionCreators';

export const getAuthors = () => {
	return (dispatch) => {
		serviceAPI
			.fetchAllAuthors()
			.then((res) => {
				dispatch(setAuthorsAction(res.data.result));
			})
			.catch((err) => {
				console.log('AuthorsThunk', err.message);
			});
	};
};

export const createAuthor = (author) => {
	return (dispatch) => {
		serviceAPI
			.fetchCreateAuthor(author)
			.then((res) => {
				if (res.status === 201) {
					dispatch(createAuthorAction(res.data.result));
				}
			})
			.catch((err) => {
				console.log('createCourse', err.message);
			});
	};
};
