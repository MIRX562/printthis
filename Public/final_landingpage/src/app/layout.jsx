import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'PrintThis.id',
	description: 'landing page',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<link rel='icon' href='/logo.ico' />
			</head>

			<body className={inter.className}>{children}</body>
		</html>
	);
}
