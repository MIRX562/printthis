import React, { useState } from 'react';
import Modal from 'react-modal';

const FileUpload = ({ isOpen, onRequestClose }) => {
	const [files, setFiles] = useState({});

	const addFile = (file) => {
		const isImage = file.type.match('image.*');
		const objectURL = URL.createObjectURL(file);

		setFiles((prevFiles) => ({
			...prevFiles,
			[objectURL]: file,
		}));
	};

	const handleDrop = (event) => {
		event.preventDefault();

		for (const file of event.dataTransfer.files) {
			addFile(file);
		}
	};

	const handleInputChange = (event) => {
		for (const file of event.target.files) {
			// Check if the file type is JPEG or PDF
			if (file.type === 'image/jpeg' || file.type === 'application/pdf') {
				addFile(file);
			} else {
				alert('Please upload only JPEG or PDF files.');
			}
		}
	};

	const handleDelete = (objectURL) => {
		const newFiles = { ...files };
		delete newFiles[objectURL];
		setFiles(newFiles);
	};

	const handleSubmit = () => {
		alert(`Submitted Files:\n${JSON.stringify(files)}`);
		console.log(files);
	};

	const handleCancel = () => {
		setFiles({});
	};

	const hiddenInputRef = React.useRef(null);

	const handleButtonClick = () => {
		hiddenInputRef.current.click();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='File Upload Modal'
			className='Modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-8 w-80vw max-w-screen-xl max-h-80 overflow-auto'
			overlayClassName='Overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-1000'>
			<div
				onDrop={handleDrop}
				onDragOver={(e) => e.preventDefault()}
				onDragLeave={(e) => e.preventDefault()}
				onDragEnter={(e) => e.preventDefault()}>
				<section className='h-full overflow-auto p-8 w-full flex flex-col'>
					<header className='border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center'>
						<p className='mb-3 font-semibold text-gray-900 flex flex-wrap justify-center'>
							<span>Drag and drop your</span>&nbsp;
							<span>files anywhere or</span>
						</p>
						<input
							ref={hiddenInputRef}
							id='hidden-input'
							type='file'
							multiple
							className='hidden'
							onChange={handleInputChange}
						/>
						<button
							id='button'
							className='mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none'
							onClick={handleButtonClick}>
							Upload a file
						</button>
					</header>

					<h1 className='pt-8 pb-3 font-semibold sm:text-lg text-gray-900'>
						To Upload
					</h1>

					<ul id='gallery' className='flex flex-wrap justify-center -m-1'>
						{Object.entries(files).map(([objectURL, file]) => (
							<li
								key={objectURL}
								className='block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24'>
								<article
									tabIndex='0'
									className='group w-full h-full rounded-md focus:outline-none focus:shadow-outline relative bg-gray-100 cursor-pointer shadow-sm overflow-hidden'>
									{file.type.match('image.*') && (
										<img
											alt='upload preview'
											className='img-preview w-full h-full object-cover'
											src={objectURL}
										/>
									)}

									<section className='flex flex-col rounded-md text-xs break-words w-full max-w-full h-full z-20 absolute top-0 py-2 px-3 bg-white'>
										<h1 className='flex-1 group-hover:text-blue-800 overflow-hidden overflow-ellipsis whitespace-nowrap'>
											{file.name}
										</h1>
										<div className='flex items-center justify-between'>
											<div className='flex items-center'>
												<span className='p-1 text-blue-800'>
													<i>
														<svg
															className='fill-current w-4 h-4'
															xmlns='http://www.w3.org/2000/svg'
															width='24'
															height='24'
															viewBox='0 0 24 24'>
															<path d='M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z' />
														</svg>
													</i>
												</span>
												<p className='p-1 size text-xs text-gray-700'>
													{file.size > 1024
														? file.size > 1048576
															? Math.round(file.size / 1048576) + 'mb'
															: Math.round(file.size / 1024) + 'kb'
														: file.size + 'b'}
												</p>
											</div>
											<button
												className='delete focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800'
												onClick={() => handleDelete(objectURL)}>
												<svg
													className='fill-current w-4 h-4'
													xmlns='http://www.w3.org/2000/svg'
													width='24'
													height='24'
													viewBox='0 0 24 24'>
													<path d='M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z' />
												</svg>
											</button>
										</div>
									</section>
								</article>
							</li>
						))}
					</ul>
				</section>

				<footer className='flex justify-end px-8 pb-8 pt-4'>
					<button
						id='submit'
						className='rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none'
						onClick={handleSubmit}>
						Upload now
					</button>
					<button
						id='cancel'
						className='ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none'
						onClick={handleCancel}>
						Cancel
					</button>
				</footer>
			</div>
		</Modal>
	);
};

export default FileUpload;
