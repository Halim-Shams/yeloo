import React from 'react';
import Brand from '../components/Brand';
import Search from '../components/Search';
import Catagory from '../components/Catagory';
import Resource from '../components/Resource';
import Footer from '../components/Footer';

const SearchPage = () => {
	return (
		<div className='relative py-10 pb-28 pl-10 bg-yellow-50 grid auto-cols-max auto-rows-auto gap-x-16 gap-y-14'>
			<Brand className='w-full text-4xl col-start-1 row-start-1 tracking-[0.4rem] sm:animate-pulse font-extrabold text-yellow-400' />
			<Search
				icon='text-lg absolute left-4'
				className='py-2 pl-12 pr-4 rounded-md shadow-md outline-none w-full text-md font-normal bg-gray-50 text-gray-900 focus:shadow-xl hover:shadow-lg placeholder:font-extralight'
				div='w-7/12 col-start-2 flex relative items-center text-gray-400'
			/>
			<div className='flex flex-col gap-6 items-start col-start-2 row-start-2 w-8/12'>
				<Catagory />
				<div className='flex flex-col gap-3'>
					<Resource
						link='https://www.dictionary.com/browser/goggle'
						title='Goggle Definitin & Meaning - Dectionary.com'
						desc='large spectacles equipped with special lenses, protective rims, etc. to prevent injury to the eyes tfrom strong wind, flying objects, blinding light, etc.'
					/>
					<Resource
						link='https://www.dictionary.com/browser/goggle'
						title='Goggle Definitin & Meaning - Dectionary.com'
						desc='large spectacles equipped with special lenses, protective rims, etc. to prevent injury to the eyes tfrom strong wind, flying objects, blinding light, etc.'
					/>
					<Resource
						link='https://www.dictionary.com/browser/goggle'
						title='Goggle Definitin & Meaning - Dectionary.com'
						desc='large spectacles equipped with special lenses, protective rims, etc. to prevent injury to the eyes tfrom strong wind, flying objects, blinding light, etc.'
					/>
					<Resource
						link='https://www.dictionary.com/browser/goggle'
						title='Goggle Definitin & Meaning - Dectionary.com'
						desc='large spectacles equipped with special lenses, protective rims, etc. to prevent injury to the eyes tfrom strong wind, flying objects, blinding light, etc.'
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SearchPage;
