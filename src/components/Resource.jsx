import React from 'react';

const Resource = ({link, title, desc}) => {
	return (
		<a
			href='#resource'
			className='group bg-yellow-100/20 transition-colors ease-out hover:shadow-lg shadow-md flex flex-col gap-1 rounded-md py-5 px-5 w-full'>
			<p className='text-blue-600 group-hover:underline decoration-blue-700 decoration-1 font-extralight'>
				{link}
			</p>
			<p className='font-bold ease-out transition-all group-hover:text-yellow-400 text-xl text-gray-800'>
				{title}
			</p>
			<p className='font-medium text-gray-600'>{desc}</p>
		</a>
	);
};

export default Resource;
