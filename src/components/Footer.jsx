import React from 'react';
import {FaHeart} from 'react-icons/fa';

const Footer = () => {
	return (
		<div
			className={
				'flex items-center row-start-3 justify-center bg-gray-100 py-2 border-b-8 border-yellow-400 w-full absolute bottom-0'
			}>
			<p className='text-md font-sans tracking-tight font-semibold text-gray-500'>
				Made with{' '}
				<FaHeart className='text-red-500 text-lg inline animate-pulse' /> by{' '}
				<a
					className='text-gray-600 decoration-wavy hover:underline decoration-yellow-400'
					href='https://twitter.com/HalimOFFI'>
					Halim
				</a>
			</p>
		</div>
	);
};

export default Footer;
