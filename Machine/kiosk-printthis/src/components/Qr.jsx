// Import necessary libraries and components
'use client';
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

// Define the Qr component
export default function Qr() {
	const [qrData, setQrData] = useState('');
	const router = useRouter();

	useEffect(() => {
		const generateQrCode = () => {
			// Generate a new unique identifier
			const uniqueId = uuidv4();

			// Create a QR code data using a combination of timestamp and the unique identifier
			const newQrData = `${Date.now()}-${uniqueId}`;
			setQrData(newQrData);
		};

		// Initial generation of QR code
		generateQrCode();

		// Set interval to refresh QR code every one minute
		const intervalId = setInterval(() => {
			generateQrCode();
		}, 60000); // 60000 milliseconds = 1 minute

		// Clean up interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

	// Function to handle the click event on the QR code
	const handleQrCodeClick = () => {
		// Use the router to navigate to the target page
		router.push('/dashboard');
	};

	return (
		<section className='flex'>
			<div className='h-[840px] w-1/2 flex items-center justify-center'>
				<img src='/textV.svg' alt='' />
			</div>
			<div className='h-[840px] w-1/2 flex items-center justify-center'>
				<div
					className='relative p-10 rounded-3xl bg-white border-[15px] border-slate-900'
					onClick={handleQrCodeClick} // Attach the click event handler
					style={{ cursor: 'pointer' }} // Change cursor style to indicate it's clickable
				>
					<QRCode size={256} value={qrData} />
				</div>
			</div>
		</section>
	);
}
