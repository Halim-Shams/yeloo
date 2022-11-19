import React from 'react';
import {BsSearch} from 'react-icons/bs';

const Search = () => {
	return (
		<div className='w-6/12 flex relative items-center text-gray-400 focus-within:text-yellow-300'>
			<BsSearch className='text-xl absolute left-3' />
			<input
				className='py-1.5 pl-11 pr-4 border rounded-md shadow-md outline-none transition-all w-full text-lg font-normal text-gray-900 hover:shadow-lg focus:shadow-xl focus:border-yellow-200 focus:pl-12 focus:placeholder:tracking-wide placeholder:tracking-wide placeholder:font-extralight'
				type='search'
				placeholder='Search'
			/>
		</div>
	);
};

export default Search;
