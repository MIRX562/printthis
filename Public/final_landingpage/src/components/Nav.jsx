import Link from 'next/link';
import Button from '@/components/Button';

export default async function Nav() {
	return (
		<nav className='text-gray-600 body-font'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
				<div className='flex items-center'>
					<Link
						href='/'
						className='flex title-font font-bold items-center text-blue-400 mb-4 md:mb-0'>
						<img className='h-10 w-10' src='/logo.svg' alt='logo' />
						<span className='ml-3 text-xl'>PrintThis.Id</span>
					</Link>
				</div>

				<div className='block md:flex md:ml-auto md:mr-auto md:flex-row flex-col items-center text-base justify-center'>
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

				<div className='flex items-center'>
					<Link href='/auth-pages/login'>
						<Button primary>Log In</Button>
					</Link>
					<Link href='/auth-pages/daftar'>
						<Button primary>Daftar</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
