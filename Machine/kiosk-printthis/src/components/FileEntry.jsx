// FileEntry.js
import React from 'react';

// Define SVG icons for different file types
const fileIcons = {
	Pdf: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6 text-red-500'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 14l-4-4 4-4m4 4l-4-4'
			/>
		</svg>
	),
	Image: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6 text-blue-500'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M15 19l-7-7 7-7'
			/>
		</svg>
	),
	// Add more file type icons as needed
};

const FileEntry = ({ fileName, fileType, expiredAt, size, onClick }) => {
	const fileIcon = fileIcons[fileType] || <div>Unknown File Type</div>;

	return (
		<tr>
			<td className='px-5 py-5 border-b border-gray-200 bg-white text-xl'>
				<div className='flex items-center'>
					<div className='flex-shrink-0 w-10 h-10'>{fileIcon}</div>
					<div className='ml-3'>
						<p className='text-gray-900 whitespace-no-wrap'>{fileName}</p>
					</div>
				</div>
			</td>
			<td className='px-5 py-5 border-b border-gray-200 bg-white text-xl'>
				<p className='text-gray-900 whitespace-no-wrap'>{expiredAt}</p>
			</td>
			<td className='px-5 py-5 border-b border-gray-200 bg-white text-xl'>
				<p className='text-gray-900 whitespace-no-wrap'>{size}</p>
			</td>
			<td className='px-5 py-5 border-b border-gray-200 bg-white text-xl'>
				<p className='text-gray-900 whitespace-no-wrap'>{fileType}</p>
			</td>
			<td className='px-5 py-5 border-b border-gray-200 bg-white text-xl'>
				<button className='text-blue-600 hover:underline' onClick={onClick}>
					Print
				</button>
			</td>
		</tr>
	);
};

export default FileEntry;
