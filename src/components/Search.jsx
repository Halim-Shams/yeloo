import React from 'react';
import {BsSearch} from 'react-icons/bs';

const Search = (props) => {
	return (
		<div className={props.div}>
			<BsSearch className={props.icon} />
			<input className={props.className} type='search' placeholder='Search' />
		</div>
	);
};

export default Search;
