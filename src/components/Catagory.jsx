import React from 'react';
import {GiEarthAmerica} from 'react-icons/gi';
import {BsImage} from 'react-icons/bs';
import {MdMovie} from 'react-icons/md';

const Catagory = () => {
	return (
		<div className='border-b border-gray-600/60 pt-1 pb-2 text-md text-gray-700 font-semibold w-96 flex gap-12'>
			<a className='flex items-center gap-1' href='#all'>
				<GiEarthAmerica className='inline' /> All
			</a>
			<a className='flex items-center gap-1' href='#all'>
				<BsImage className='inline' /> Images
			</a>
			<a className='flex items-center gap-1' href='#all'>
				<MdMovie className='text-xl inline' /> Videos
			</a>
		</div>
	);
};

export default Catagory;
