// ScanButton.js
'use client';
import React, { useState } from 'react';
import Scanner from './Scanner'; // Import the Scanner component

const ScanButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<button
				onClick={handleOpenModal}
				className='rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none'>
				Open QR Code Modal
			</button>

			<Scanner isOpen={isModalOpen} onRequestClose={handleCloseModal} />
		</div>
	);
};

export default ScanButton;
