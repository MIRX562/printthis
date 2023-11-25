// UserBT.js
'use client';
import React, { useState } from 'react';
import FileUpload from './UploadFile';
import Scanner from './Scanner';

const UploadButton = ({ onClick }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
		onClick(); // Call the provided onClick function
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className='mb-4 md:mb-0 md:mr-4 mx-auto'>
			<button
				onClick={handleOpenModal}
				className='rounded-lg px-2 py-5 bg-blue-700 hover:bg-blue-500 text-white font-bold focus:shadow-outline focus:outline-none w-full md:w-auto'>
				<img
					src='/Upload File.png' // Replace with the actual upload icon path
					alt='Upload'
					className='w-3/4 mx-auto my-auto'
				/>
				Upload File
			</button>

			<FileUpload isOpen={isModalOpen} onRequestClose={handleCloseModal} />
		</div>
	);
};

const ScanButton = ({ onClick }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
		onClick(); // Call the provided onClick function
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className='mb-4 md:mb-0 mx-auto'>
			<button
				onClick={handleOpenModal}
				className='rounded-lg px-2 py-5 bg-blue-700 hover:bg-blue-500 text-white font-bold focus:shadow-outline focus:outline-none w-full md:w-auto'>
				<img
					src='/QR Code.png' // Replace with the actual scan icon path
					alt='Scan'
					className='w-3/4 mx-auto my-auto'
				/>
				Scan QR
			</button>

			<Scanner isOpen={isModalOpen} onRequestClose={handleCloseModal} />
		</div>
	);
};

const UserBT = () => {
	const handleUploadClick = () => {
		// Add custom functionality for the upload button
		console.log('Upload button clicked');
	};

	const handleScanClick = () => {
		// Add custom functionality for the scan button
		console.log('Scan button clicked');
	};

	return (
		<div className='flex flex-col md:flex-row mx-auto'>
			{/* Upload Button */}
			<UploadButton onClick={handleUploadClick} />

			{/* Scan Button */}
			<ScanButton onClick={handleScanClick} />
		</div>
	);
};

export default UserBT;
