import React from 'react';

const categories = [
	{
		name: 'First Link',
		imageUrl: '/path/to/first-image.png',
		url: 'https://example.com/first-link',
	},
	{
		name: 'Second Link',
		imageUrl: '/path/to/second-image.png',
		url: 'https://example.com/second-link',
	},
	{
		name: 'Third Link',
		imageUrl: '/path/to/third-image.png',
		url: 'https://example.com/third-link',
	},
];

const socialMediaIcons = [
	<svg
		key='fb'
		fill='currentColor'
		stroke-linecap='round'
		stroke-linejoin='round'
		stroke-width='2'
		className='w-5 h-5'
		viewBox='0 0 24 24'>
		<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
	</svg>,
	<svg
		key='ig'
		fill='currentColor'
		viewBox='0 0 30 30'
		width='24px'
		height='24px'
		className='w-5 h-5'>
		<path d='M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z' />
	</svg>,
	<svg
		key='x'
		fill='currentColor'
		viewBox='0 0 50 50'
		width='24px'
		height='24px'
		className='w-5 h-5'>
		<path d='M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z' />
	</svg>,
];

export default function Footer() {
	return (
		<footer className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col bg-slate-700'>
				<div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
					<a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
						<img className='w-10 h-10' src='/logo.ico' alt='' />
						<span className='ml-3 text-xl font-extrabold text-blue-400'>
							PrintThis.id
						</span>
					</a>
					<p className='mt-2 text-sm text-gray-300'>
						Sebuah sistem anjungan cetak mandiri yang menggunakan gabungan mesin
						kiosk dan teknologi web untuk mempermudah keperluan pindai dan cetak
						dokumen anda
					</p>
				</div>
				<div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center items-center'>
					{categories.map((category, index) => (
						<div key={index} className='lg:w-1/4 md:w-1/2 w-full px-4'>
							<h2 className='title-font font-medium text-gray-400 tracking-widest text-sm mb-3'>
								<a
									href={category.url}
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-400 flex flex-col items-center h-full'>
									<img
										src={category.imageUrl}
										alt={category.name}
										className='w-10 h-10 mb-2 rounded-full'
									/>
									<span>{category.name}</span>
								</a>
							</h2>
						</div>
					))}
				</div>
			</div>
			<div className='bg-gray-900'>
				<div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
					<p className='text-gray-400 text-sm text-center sm:text-left'>
						© 2023 PrintThis by
						<a
							href='https://twitter.com/knyttneve'
							rel='noopener noreferrer'
							className='text-blue-400 ml-1'
							target='_blank'>
							@FSTechno
						</a>
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
						{socialMediaIcons.map((icon, idx) => (
							<a key={idx} className='text-gray-500 ml-3'>
								{icon}
							</a>
						))}
					</span>
				</div>
			</div>
		</footer>
	);
}
