'use client';
import React from 'react';
import FileEntry from './FileEntry'; // Import the FileEntry component

export default function UserFile() {
	// Replace the sample files with your actual file data
	const files = [
		{
			fileName: 'SampleFile1.pdf',
			uploadedAt: 'Jan 21, 2020',
			expiredAt: 'Jan 21, 2021',
			size: '2 MB',
			type: 'Pdf',
		},
		{
			fileName: 'SampleFile2.jpg',
			uploadedAt: 'Jan 22, 2020',
			expiredAt: 'Jan 22, 2021',
			size: '1.5 MB',
			type: 'Image',
		},
		{
			fileName: 'SampleFile3.pdf',
			uploadedAt: 'Jan 23, 2020',
			expiredAt: 'Jan 23, 2021',
			size: '2.5 MB',
			type: 'Pdf',
		},
		{
			fileName: 'SampleFile4.jpg',
			uploadedAt: 'Jan 24, 2020',
			expiredAt: 'Jan 24, 2021',
			size: '1 MB',
			type: 'Image',
		},
		// Add more file entries as needed
	];

	// Calculate total size of files and used size
	const totalSize = files.reduce((acc, file) => acc + parseFloat(file.size), 0);
	const usedSize = totalSize; // Used size is the sum of the sizes of all files

	// Calculate percentage of used size
	const percentageUsed = (usedSize / 30) * 100;

	const thStyle =
		'px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider';

	return (
		<div className='bg-slate-300 container px-5 py-4 mx-auto rounded-lg my-5'>
			<div className='flex items-center justify-between pb-6'>
				<div>
					<h2 className='text-gray-600 font-semibold'>Files</h2>
					<span className='text-xs'>All files</span>
				</div>
				<div className='flex bg-gray-50 items-center p-2 rounded-md'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-gray-400'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
							clipRule='evenodd'
						/>
					</svg>
					<input
						className='bg-gray-50 outline-none ml-1 block '
						type='text'
						name=''
						id=''
						placeholder='search...'
					/>
				</div>
				<div className='lg:ml-40 ml-10 space-x-8'>
					{/* Progress bar */}
					<div className='w-36'>
						<div className='overflow-hidden bg-blue-50 h-1.5 rounded-full w-full'>
							<span
								className='h-full bg-blue-500 w-full block rounded-full'
								style={{ width: `${percentageUsed}%` }}></span>
						</div>
						<div className='text-xs text-gray-600 mt-1'>
							{usedSize.toFixed(2)} MB / 30.00 MB used
						</div>
					</div>
				</div>
			</div>
			{/* File list */}
			<div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
				<div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
					<table className='min-w-full leading-normal'>
						<thead>
							<tr>
								<th className={thStyle}>Name</th>
								<th className={thStyle}>Uploaded at</th>
								<th className={thStyle}>Expired at</th>
								<th className={thStyle}>Size</th>
								<th className={thStyle}>Type</th>
								<th className={thStyle}>Actions</th>
							</tr>
						</thead>
						<tbody>
							{/* Use FileEntry component for each file entry */}
							{files.map((file, index) => (
								<FileEntry
									key={index}
									fileName={file.fileName}
									uploadedAt={file.uploadedAt}
									expiredAt={file.expiredAt}
									size={file.size}
									fileType={file.type}
									onDownload={() => handleDownload(file.fileName)} // Replace with your actual download function
									onDelete={() => handleDelete(file.fileName)} // Replace with your actual delete function
								/>
							))}
						</tbody>
					</table>
					{/* Pagination */}
					{/* <div className='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between'>
						<span className='text-xs xs:text-sm text-gray-900'>
							Showing 1 to 4 of 50 Entries
						</span>
						<div className='inline-flex mt-2 xs:mt-0'>
							<Button className='text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l'>
								Prev
							</Button>
							&nbsp; &nbsp;
							<Button className='text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r'>
								Next
							</Button>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
