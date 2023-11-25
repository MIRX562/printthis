import Head from 'next/head';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'PrintThis.id',
	description: 'Masih pemula puh sepuh',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<Head>
				<link rel='icon' href='/logo.ico' />
			</Head>

			<body className={inter.className}>{children}</body>
		</html>
	);
}
