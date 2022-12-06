import React from 'react';

import { Input } from '../../../../common/Input';
import { Button } from '../../../../common/Button';
import { BUTTON_SEARCH_TEXT, SEARCH_PLCHDR } from '../../../../constants';

import './searchBar.css';

const SearchBar = (props) => {
	return (
		<form className='search-wrapper' onSubmit={props.handleSubmit}>
			<Input
				onChange={props.handleChange}
				type='text'
				id='search'
				placeholder={SEARCH_PLCHDR}
			/>
			<Button type='submit' buttonText={BUTTON_SEARCH_TEXT} />
		</form>
	);
};

export default SearchBar;
