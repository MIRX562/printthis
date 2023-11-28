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
		<div className='min-h-[87vh] bg-slate-100 container px-5 py-4 mx-auto rounded-2xl my-5'>
			<div class=' flex items-center justify-between pb-6'>
				<div>
					<h2 class='text-gray-600 font-semibold'>Products Oder</h2>
					<span class='text-xs'>All Files</span>
				</div>
				<div class='flex items-center justify-between'>
					<div class='lg:ml-40 ml-10 space-x-8'>
						<button class='bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer'>
							New Report
						</button>
						<button class='bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer'>
							Create
						</button>
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
									onClicked={() => window.print()} // Replace with your actual download function
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
