'use client';
import React from 'react';
import { signOut } from 'next-auth/react';
import Button from '@/components/Button';

export default function OutBt() {
	return (
		<Button
			primary
			onClick={() =>
				signOut({
					redirect: true,
					callbackUrl: `${window.location.origin}/auth-pages/login`,
				})
			}>
			Log Out
		</Button>
	);
}
