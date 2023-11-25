import React from 'react';
import Button from '../Button';

export default function UserData() {
	return (
		<section className='text-gray-600 body-font overflow-hidden'>
			<div className='container px-4 py-4 mx-auto mb-5 mt-10 bg-slate-300 rounded-3xl'>
				<div className='w-full mx-auto flex items-center justify-center'>
					<img
						alt='profile'
						className='lg:w-1/4 w-1/4 h-auto mr-5 object-cover object-center rounded-xl'
						src='https://dummyimage.com/400x400'
					/>
					<div className='lg:w-2/3 lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-slate-100 rounded-xl px-5'>
						<h2 className='text-sm title-font text-gray-500 tracking-widest'>
							Selamat datang
						</h2>
						<h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
							Username
						</h1>
						<span className='title-font font-medium mr-2 text-2xl text-gray-900'>
							Saldo: Rp. 100.000
						</span>
						<Button primary className='mb-3'>
							Top Up Saldo
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
