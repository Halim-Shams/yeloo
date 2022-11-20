import React from 'react';

const Resource = () => {
	return (
		<a
			href='#resource'
			className='group bg-yellow-100/20 transition-shadow ease-out hover:shadow-lg shadow-md flex flex-col gap-1 rounded-md py-5 px-5 w-full'>
			<p className='group-hover:text-blue-600 font-extralight'>
				https://www.dictionary.com/browse/goggle
			</p>
			<p className='font-bold ease-out transition-all group-hover:text-yellow-400 text-xl text-gray-800'>
				Goggle Definition & Meaning - Dectionary.com
			</p>
			<p className='font-medium text-gray-600'>
				large spectacles equipped with special lenses, protective rims, etc., to
				prevent injury to the eyes from strong wind, flying objects, blinding
				light, etc.
			</p>
		</a>
	);
};

export default Resource;
