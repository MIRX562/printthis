'use client';
import React, { useState, useEffect } from 'react';

function Carousel() {
	const slides = [
		{
			url: 'carousel/1.svg',
		},
		{
			url: 'carousel/2.svg',
		},
		{
			url: 'carousel/3.svg',
		},
		{
			url: 'carousel/4.svg',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			nextSlide();
		}, 15000);

		return () => {
			clearInterval(intervalId);
		};
	}, [currentIndex]);

	return (
		<div className='max-w-screen h-[840px] w-full m-auto pb-16 relative group'>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-screen h-full bg-center bg-cover duration-500'></div>
			{/* Left Arrow */}
			<div
				className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
				onClick={prevSlide}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					className='w-6 h-6'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M15 19l-7-7 7-7'></path>
				</svg>
			</div>
			{/* Right Arrow */}
			<div
				className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
				onClick={nextSlide}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					className='w-6 h-6'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M9 5l7 7-7 7'></path>
				</svg>
			</div>
			<div className='flex top-4 justify-center py-2'>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className='text-2xl cursor-pointer'>
						{/* Replace with your dot component or any other indicator */}
						{currentIndex === slideIndex ? '●' : '○'}
					</div>
				))}
			</div>
		</div>
	);
}

export default Carousel;
