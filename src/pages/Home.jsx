import React from 'react';
import Search from '../components/Search';

function Home() {
	return (
		<div className='py-36 flex flex-col gap-8 items-center'>
			<h1 className='text-8xl tracking-[1rem] text-yellow-500 font-extrabold'>
				YELOO
			</h1>
			<Search />
		</div>
	);
}

export default Home;
