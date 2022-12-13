import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CreateCourseMain } from './components/CreateCourseMain';
import { CreateCourseDetails } from './components/CreateCourseDetails';
import { AuthorListItem } from './components/CreateCourseDetails/components/AuthorListItem';
import { getCreationDate } from '../../helpers/dateGenerator';
import { createAuthorAction } from '../../store/authors/actionCreators';
import { addCourseAction } from '../../store/courses/actionCreators';
// import { createAuthor } from '../../services';
import {
	BUTTON_ADD_AUTHOR_TEXT,
	BUTTON_DEL_AUTHOR_TEXT,
	FILL_ALERT,
	CHARS_ALERT,
} from '../../constants';

import './createCourse.css';

const CreateCourse = () => {
	let authors = useSelector((state) => state.authors);
	let [newCourseAuthorsList, setCourseAuthorsList] = useState([]);
	let [newCourseAuthor, setnewCourseAuthor] = useState([]);
	let [name, setName] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		setnewCourseAuthor(authors);
	}, [authors]);

	function onChangeHandler(e) {
		setName(e.target.value);
	}

	function addAuthor() {
		if (name.length < 2) {
			alert(CHARS_ALERT);
			return;
		}
		let newAuthor = { id: uuidv4(), name: name };
		dispatch(createAuthorAction(newAuthor));
		// createAuthor(newAuthor);
		setName('');
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (
			e.target.description.value === '' ||
			e.target.title.value === '' ||
			e.target.duration.value === ''
		) {
			alert(FILL_ALERT);
			return;
		}
		createCourse(e);
		navigate('/courses');
	}

	function createCourse(e) {
		let newCourse = {
			title: e.target.title.value,
			description: e.target.description.value,
			creationDate: getCreationDate(),
			duration: Number(e.target.duration.value),
			authors: newCourseAuthorsList.map((course) => {
				return course.id;
			}),
			id: uuidv4(),
		};
		dispatch(addCourseAction(newCourse));
	}

	function addCourseAuthor(newAuthor) {
		setCourseAuthorsList([newAuthor, ...newCourseAuthorsList]);
		setnewCourseAuthor((prev) =>
			prev.filter((item) => item.id !== newAuthor.id)
		);
	}

	function delCourseAuthor(newAuthor) {
		setnewCourseAuthor([newAuthor, ...newCourseAuthor]);
		setCourseAuthorsList((prev) =>
			prev.filter((item) => item.id !== newAuthor.id)
		);
	}

	let authorsList = newCourseAuthor.map((author) => {
		return (
			<AuthorListItem
				id={author.id}
				key={author.id}
				title={author.name}
				buttonText={BUTTON_ADD_AUTHOR_TEXT}
				name={author.name}
				className='author-item'
				onClickHand={addCourseAuthor}
			/>
		);
	});

	let courseAuthorsList =
		newCourseAuthorsList.length === 0 ? (
			<div style={{ textAlign: 'center' }}>Author list is empty</div>
		) : (
			newCourseAuthorsList.map((author) => {
				return (
					<AuthorListItem
						id={author.id}
						key={author.id}
						title={author.name}
						buttonText={BUTTON_DEL_AUTHOR_TEXT}
						name={author.name}
						className='author-item'
						onClickHand={delCourseAuthor}
					/>
				);
			})
		);

	return (
		<div className='container'>
			<form onSubmit={handleSubmit} className='create-course__wrapper'>
				<CreateCourseMain />
				<CreateCourseDetails
					authorsList={authorsList}
					courseAuthorsList={courseAuthorsList}
					addAuthor={addAuthor}
					onChangeHandler={onChangeHandler}
					name={name}
				/>
			</form>
		</div>
	);
};

export default CreateCourse;
