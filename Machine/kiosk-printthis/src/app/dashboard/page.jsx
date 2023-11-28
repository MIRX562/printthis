'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function page() {
	const router = useRouter();

	const handleButton1Click = () => {
		// Navigate to the first route
		router.push('/dashboard/scan');
	};

	const handleButton2Click = () => {
		// Navigate to the second route
		router.push('/dashboard/print');
	};

	return (
		<div className='flex h-screen items-center justify-center -mt-[100px]'>
			<div className='text-center w-80%'>
				{/* Button 1 */}
				<button
					className='bg-blue-500 text-white p-8 rounded-3xl mx-auto mb-10 flex flex-col items-center'
					onClick={handleButton1Click}>
					<img src='/scan.svg' alt='scan' className='h-[20vh] w-[20vh]' />
					<span className='text-9xl font-semibold'>Scan</span>
				</button>

				{/* Button 2 */}
				<button
					className='bg-blue-500 text-white p-8 rounded-3xl m-4 flex flex-col items-center'
					onClick={handleButton2Click}>
					<img src='/print.svg' alt='print' className='h-[20vh[] w-[20vh]' />
					<span className='text-9xl font-semibold'>Print</span>
				</button>
			</div>
		</div>
	);
}
