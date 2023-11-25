import React from 'react';

export default function Footer() {
	const items = [
		'Item 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perspiciatis numquam sunt, dolorem quae sit fuga nobis hic enim unde.    ',
		'Item 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perspiciatis numquam sunt, dolorem quae sit fuga nobis hic enim unde.    ',
		'Item 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perspiciatis numquam sunt, dolorem quae sit fuga nobis hic enim unde.    ',
		'Item 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perspiciatis numquam sunt, dolorem quae sit fuga nobis hic enim unde.    ',
		'Item 5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perspiciatis numquam sunt, dolorem quae sit fuga nobis hic enim unde.    ',
		// Add more items as needed
	];
	const scrollingText = items.join('. | ');

	return (
		<footer className='fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between'>
			<div className='flex items-center space-x-2'>
				<img src='/logo.ico' alt='Logo' className='h-10 w-9' />
				<span className='font-bold text-3xl'>Info:</span>
			</div>
			<div className='overflow-hidden whitespace-nowrap ml-10 text-3xl'>
				<marquee>{scrollingText}</marquee>
			</div>
		</footer>
	);
}
