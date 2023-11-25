import React from 'react';

export default function Steps() {
	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto flex flex-wrap'>
				<h1 className='text-4xl font-bold text-center mb-8 text-gray-800 w-full'>
					Dengan 5 Langkah Mudah
				</h1>
				<div className='flex flex-wrap w-full'>
					<div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6'>
						<div className='flex relative pb-12'>
							<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
								<div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
							</div>
							<div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='w-5 h-5'
									viewBox='0 0 24 24'>
									<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
								</svg>
							</div>
							<div className='flex-grow pl-4'>
								<h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
									LANGKAH 1
								</h2>
								<p className='leading-relaxed'>
									Buat akun terlebih dahulu, anda dapat membuat akun dengan
									mengklik tombol daftar di bawah
								</p>
								<button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
									Daftar
								</button>
							</div>
						</div>
						<div className='flex relative pb-12'>
							<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
								<div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
							</div>
							<div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='w-5 h-5'
									viewBox='0 0 24 24'>
									<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
								</svg>
							</div>
							<div className='flex-grow pl-4'>
								<h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
									LANGKAH 2
								</h2>
								<p className='leading-relaxed'>
									Login ke PrintThis.id setelah selesai membuat akun, anda dapat
									login dengan menekan tombol dibawah
								</p>
								<button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
									Login
								</button>
							</div>
						</div>
						<div className='flex relative pb-12'>
							<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
								<div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
							</div>
							<div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='w-5 h-5'
									viewBox='0 0 24 24'>
									<circle cx='12' cy='5' r='3'></circle>
									<path d='M12 22V8M5 12H2a10 10 0 0020 0h-3'></path>
								</svg>
							</div>
							<div className='flex-grow pl-4'>
								<h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
									LANGKAH 3
								</h2>
								<p className='leading-relaxed'>
									Isi Saldo akun anda dengan cara top up melalui e- wallet Dana
								</p>
							</div>
						</div>
						<div className='flex relative pb-12'>
							<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
								<div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
							</div>
							<div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='w-5 h-5'
									viewBox='0 0 24 24'>
									<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
									<circle cx='12' cy='7' r='4'></circle>
								</svg>
							</div>
							<div className='flex-grow pl-4'>
								<h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
									LANGKAH 4
								</h2>
								<p className='leading-relaxed'>
									Silahkan datangi mesin kios terdekat dan scan barcode yang ada
									pada layar mesin
								</p>
							</div>
						</div>
						<div className='flex relative'>
							<div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='w-5 h-5'
									viewBox='0 0 24 24'>
									<path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
									<path d='M22 4L12 14.01l-3-3'></path>
								</svg>
							</div>
							<div className='flex-grow pl-4'>
								<h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
									FINISH
								</h2>
								<p className='leading-relaxed'>
									Mesin sudah siap digunakan untuk keperluan pindai dan cetak
									dokumen anda
								</p>
							</div>
						</div>
					</div>
					<img
						className='lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12'
						src='/maskot.svg'
						alt='step'
					/>
				</div>
			</div>
		</section>
	);
}
