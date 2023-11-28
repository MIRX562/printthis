'use client';
import React, { useState } from 'react';
import Modal from 'react-modal';
import QrReader from 'react-qr-scanner';
import Button from '../Button';

const Scanner = ({ isOpen, onRequestClose }) => {
	const [scanResult, setScanResult] = useState('');

	const handleScan = (result) => {
		if (result && result.text) {
			setScanResult(result.text);
		}
	};

	const handleError = (error) => {
		console.error(error);
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='QR Code Scanner Modal'
			className='Modal'
			overlayClassName='Overlay'>
			<div className='modal-content'>
				<QrReader
					onScan={handleScan}
					onError={handleError}
					facingMode={'environtment'}
				/>
				{scanResult ? <p>Scanned QR Code: {scanResult}</p> : <p>Scanning...</p>}
				<Button onClick={onRequestClose}>Close Modal</Button>
			</div>
		</Modal>
	);
};

export default Scanner;
