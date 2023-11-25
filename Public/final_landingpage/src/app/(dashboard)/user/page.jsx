import React from 'react';
import NavActive from '@/components/NavActive';
import Footer from '@/components/Footer';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/helper/auth';
import UserPage from '@/components/UserPage/UserPage';

export default async function page() {
	const session = await getServerSession(authOptions);
	if (session?.user) {
		return (
			<>
				<NavActive />
				<UserPage />
				<Footer />
			</>
		);
	} else {
		return (
			<>
				<h2>Harap Login Terlebih dahulu</h2>
			</>
		);
	}
}
