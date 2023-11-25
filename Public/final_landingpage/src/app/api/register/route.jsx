import { db } from '@/helper/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		const body = await req.json();
		// Process the request and send a response
		const { username, email, password } = body;

		if (!email) {
			return NextResponse.json(
				{
					user: null,
					message: 'Email is required for registration',
				},
				{ status: 400 }
			);
		}
		if (!username) {
			return NextResponse.json(
				{
					user: null,
					message: 'Username is required for registration',
				},
				{ status: 400 }
			);
		}

		// check existing user by email
		const existingByEmail = await db.user.findUnique({
			where: { email: email },
		});
		if (existingByEmail) {
			return NextResponse.json(
				{
					message: 'Akun dengan email ini sudah ada, mohon gunakan email lain',
				},
				{ status: 409 }
			);
		}
		// check existing user by username
		const existingByUserName = await db.user.findUnique({
			where: { username: username },
		});
		if (existingByUserName) {
			return NextResponse.json(
				{
					message:
						'Akun dengan username ini sudah ada, mohon gunakan username lain',
				},
				{ status: 409 }
			);
		}

		// create new User
		const hashedPassword = await hash(password, 10);
		const newUser = await db.user.create({
			data: { username, email, password: hashedPassword },
		});

		const { password: newUserPassword, ...rest } = newUser;

		return NextResponse.json(
			{
				user: rest,
				message: 'Akun berhasil dibuat',
			},
			{ status: 201 }
		);
	} catch (error) {
		// Log the entire error object for debugging
		console.error('Error:', error);
		// Return an error response
		return NextResponse.error({
			status: 500,
			statusText: 'Internal Server Error',
		});
	}
}
