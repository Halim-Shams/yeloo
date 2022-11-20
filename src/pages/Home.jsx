import React from 'react';
import Brand from '../components/Brand';
import Search from '../components/Search';

function Home() {
	return (
		<div className='py-36 flex flex-col gap-8 items-center'>
			<Brand className='text-8xl tracking-[1rem] text-yellow-400 font-extrabold' />
			<Search
				icon='text-xl absolute left-3'
				className='py-2 pl-11 pr-4 rounded-md shadow-md outline-none transition-all w-full text-lg font-normal text-gray-900 focus:border hover:shadow-lg focus:shadow-xl focus:border-yellow-200 focus:pl-12 focus:placeholder:tracking-wide placeholder:tracking-wide placeholder:font-extralight'
				div='w-6/12 flex relative items-center text-gray-400 focus-within:text-yellow-300'
			/>
		</div>
	);
}

export default Home;
