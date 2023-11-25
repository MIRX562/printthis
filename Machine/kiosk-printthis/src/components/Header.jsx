import React from 'react';

export default function Header() {
	return (
		<header className='max-w-full bg-blue-800'>
			<div className='flex items-center justify-center mx-auto py-5'>
				<img className='h-20 w-20' src='/logo.ico' alt='' />
				<h1 className='text-7xl text-white font-extrabold ml-4 border-solid'>
					PrintThis.ID
				</h1>
			</div>
		</header>
	);
}
