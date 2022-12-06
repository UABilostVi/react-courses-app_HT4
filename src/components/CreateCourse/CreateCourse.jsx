import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import { CreateCourseMain } from './components/CreateCourseMain';
import { CreateCourseDetails } from './components/CreateCourseDetails';
import { mockedCoursesList } from '../../constants';
import {
	mockedAuthorsList as authors,
	BUTTON_ADD_AUTHOR_TEXT,
	BUTTON_DEL_AUTHOR_TEXT,
	FILL_ALERT,
	CHARS_ALERT,
} from '../../constants';
import { AuthorListItem } from './components/CreateCourseDetails/components/AuthorListItem';
import { getCreationDate } from '../../helpers/dateGenerator';

import './createCourse.css';

const CreateCourse = (props) => {
	let [newCourseAuthorsList, setCourseAuthorsList] = useState([]);
	let [newAuthorsList, setAuthorsList] = useState(authors);
	let [name, setName] = useState('');
	const navigate = useNavigate();

	function onChangeHandler(e) {
		setName(e.target.value);
	}

	function addAuthor() {
		if (name.length < 2) {
			alert(CHARS_ALERT);
			return;
		}
		let newAuthor = { id: uuidv4(), name: name };
		setAuthorsList([newAuthor, ...newAuthorsList]);
		setName('');
		authors.push(newAuthor);
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
			id: uuidv4(),
			title: e.target.title.value,
			description: e.target.description.value,
			creationDate: getCreationDate(),
			duration: e.target.duration.value,
			authors: newCourseAuthorsList.map((course) => {
				return course.id;
			}),
		};
		mockedCoursesList.push(newCourse);
	}

	function addCourseAuthor(newCourseAuthor) {
		setCourseAuthorsList([newCourseAuthor, ...newCourseAuthorsList]);
		setAuthorsList((prev) =>
			prev.filter((item) => item.id !== newCourseAuthor.id)
		);
	}

	function delCourseAuthor(newCourseAuthor) {
		setAuthorsList([newCourseAuthor, ...newAuthorsList]);
		setCourseAuthorsList((prev) =>
			prev.filter((item) => item.id !== newCourseAuthor.id)
		);
	}

	let authorsList = newAuthorsList.map((author) => {
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
