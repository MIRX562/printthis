'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Nav() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className='text-gray-600 body-font'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
				{/* Logo and Hamburger Menu */}
				<div className='flex items-center'>
					<Link
						href='/'
						className='flex title-font font-bold items-center text-blue-400 mb-4 md:mb-0'>
						<img className='h-10 w-10' src='/logo.svg' alt='logo' />
						<span className='ml-3 text-xl'>Printhis.Id</span>
					</Link>

					{/* Hamburger Menu for smaller screens */}
					<div className='md:hidden ml-auto'>
						<button
							onClick={toggleMobileMenu}
							className='text-gray-600 hover:text-gray-900 focus:outline-none'>
							<svg
								className='h-6 w-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16m-7 6h7'></path>
							</svg>
						</button>
					</div>
				</div>

				{/* Navigation Links */}
				<div
					className={`${
						isMobileMenuOpen ? 'block' : 'hidden'
					} md:flex md:ml-auto md:mr-auto md:flex-row flex-col items-center text-base justify-center`}>
					<Link className='mr-5 hover:text-gray-900' href='/'>
						Beranda
					</Link>
					<Link className='mr-5 hover:text-gray-900' href='/lokasi_mesin'>
						Lokasi Mesin
					</Link>
					<Link className='mr-5 hover:text-gray-900' href='/panduan'>
						Panduan
					</Link>
					<Link className='mr-5 hover:text-gray-900' href='/faqs'>
						FAQs
					</Link>
					<Link className='mr-5 hover:text-gray-900' href='/tentang_kami'>
						Tentang Kami
					</Link>
				</div>

				{/* Buttons */}
				<div className='md:flex'>
					<Link href='/auth/login'>
						<Button primary>login</Button>
					</Link>
					<Link href='/auth/daftar'>
						<Button primary>Daftar</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
