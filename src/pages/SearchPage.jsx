import React from 'react';
import Brand from '../components/Brand';
import Search from '../components/Search';
import Catagory from '../components/Catagory';
import Resource from '../components/Resource';

const SearchPage = () => {
	return (
		<div className='py-10 pl-10 grid grid-cols-12 gap-y-14 items-center auto-rows-auto'>
			<div className='flex items-center gap-12 col-start-1 col-span-8'>
				<Brand className='w-52 text-4xl tracking-[0.4rem] font-extrabold text-yellow-400' />
				<Search
					icon='text-lg absolute left-4'
					className='py-2 pl-12 pr-4 rounded-md shadow-md outline-none w-full text-md font-normal text-gray-900 focus:shadow-xl hover:shadow-lg placeholder:font-extralight'
					div='w-full flex relative items-center text-gray-400'
				/>
			</div>
			<div className='flex flex-col gap-3 items-start auto-rows-min col-start-3 row-start-2 col-span-7'>
				<Catagory />
				<Resource />
			</div>
		</div>
	);
};

export default SearchPage;
