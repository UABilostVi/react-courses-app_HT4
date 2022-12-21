import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import { authorsReducer } from './authors/reducer';
import { coursesReducer } from './courses/reducer';
import { userReducer } from './user/reducer';

const rootReduser = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
});

const store = createStore(
	rootReduser,
	composeWithDevTools(applyMiddleware(thunk))
);

export { store };
