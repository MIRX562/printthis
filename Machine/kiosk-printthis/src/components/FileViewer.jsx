// FileViewerModal.js
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useReactToPrint } from 'react-to-print';
import { Document, Page, pdfjs } from 'react-pdf';

// Ensure worker from react-pdf is used
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.js',
	import.meta.url
).toString();

const FileViewerModal = ({ isOpen, onRequestClose, fileName, contentRef }) => {
	const [fileType, setFileType] = useState(null);
	const [numPages, setNumPages] = useState(null);
	// const [pageNumber, setPageNumber] = useState(1);

	const handlePrint = useReactToPrint({
		content: () => contentRef.current,
	});

	useEffect(() => {
		// Determine file type based on file extension
		if (fileName) {
			const extension = fileName.split('.').pop().toLowerCase();
			setFileType(extension);
		}
	}, [fileName]);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='File Viewer Modal'
			className='Modal'
			overlayClassName='Overlay'>
			<div ref={contentRef}>
				<h2>{fileName}</h2>
				{fileType === 'pdf' ? (
					<Document
						file={`/files/${fileName}`}
						onLoadSuccess={onDocumentLoadSuccess}>
						{Array.from(new Array(numPages), (el, index) => (
							<Page key={`page_${index + 1}`} pageNumber={index + 1} />
						))}
					</Document>
				) : fileType === 'jpg' || fileType === 'jpeg' || fileType === 'png' ? (
					<img src={`/files/${fileName}`} alt={fileName} />
				) : (
					<p>{`Unsupported file type: ${fileType}`}</p>
				)}
				<button onClick={handlePrint}>Print</button>
			</div>
		</Modal>
	);
};

export default FileViewerModal;
