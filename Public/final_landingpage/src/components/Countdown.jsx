'use client';
import React, { useState, useEffect } from 'react';

const COUNTDOWN_TARGET = new Date('2023-11-29T09:00:00');

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const hari = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const jam = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const menit = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const detik = Math.floor((totalTimeLeft / 1000) % 60);
	return { hari, jam, menit, detik };
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<header className='bg-white h-auto mb-10'>
			<div className='max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-5'>
				<h1 className='font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800'>
					Nantikan Keseruannya
				</h1>
				<div className='max-w-xl mx-auto'>
					<p className='mt-10 text-gray-500 text-center text-xl'>
						Selamat datang di masa depan Sains, Teknologi, dan Percetakan! Kami
						sedang mempersiapkan produk dan layanan revolusioner yang akan
						mengubah cara Anda berinteraksi dengan dunia sekitar. Tunggu apa
						yang akan terjadi dalam hitungan mundur ini, karena sesuatu yang
						besar akan segera tiba!
					</p>
				</div>
				<div className='mt-10 flex justify-center items-center w-full mx-auto overflow-x-auto max-w-full'>
					{Object.entries(timeLeft).map(([label, value]) => (
						<div
							key={label}
							className='flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/4 max-w-150 h-1/4 sm:h-auto mb-2 sm:mb-0'>
							<div className='w-20 h-20 lg:w-48 lg:h-48 bg-blue-700 text-gray-100 font-bold text-3xl md:text-5xl lg:text-8xl flex justify-center items-center rounded-lg'>
								<span>{value}</span>
							</div>
							<span className='label mt-3 text-xl sm:text-base lg:text-lg font-bold uppercase tracking-wide'>
								{label}
							</span>
						</div>
					))}
				</div>
			</div>
		</header>
	);
};

export default Countdown;
