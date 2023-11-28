import React from 'react';

export default function Footer() {
	const items = [
		'Dirgahayu UIN Imam Bonjol Padang, 57 tahun mencerdaskan bangsa!',
		'UIN Imam Bonjol Padang, 57 tahun menginspirasi, 57 tahun menebarkan ilmu!',
		'UIN Imam Bonjol Padang, 57 tahun mengabdi, 57 tahun membangun negeri!',
		'UIN Imam Bonjol Padang, 57 tahun berinovasi, 57 tahun menjemput masa depan!',
		'UIN Imam Bonjol Padang, 57 tahun berjaya, 57 tahun terus melaju!',
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
