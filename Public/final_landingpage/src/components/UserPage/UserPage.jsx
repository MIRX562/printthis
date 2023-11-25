import React from 'react';
import UserData from './UserData';
import UserFile from './UserFile';
import UserBT from './UserBT';

export default function UserPage() {
	return (
		<>
			<UserData />

			<UserBT />

			<UserFile />
		</>
	);
}
