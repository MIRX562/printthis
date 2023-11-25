import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { db } from './db';
import { compare } from 'bcrypt';

export const authOptions = {
	adapter: PrismaAdapter(db),
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/auth-pages/login',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',

			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'jsmith@mail.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					return null;
				}

				const existingUser = await db.user.findUnique({
					where: { email: credentials?.email },
				});
				if (!existingUser) {
					return null;
				}

				const passwordMatch = await compare(
					credentials.password,
					existingUser.password
				);
				if (!passwordMatch) {
					return null;
				}

				return {
					id: existingUser.id,
					username: existingUser.username,
					email: existingUser.email,
				};
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],

	callbacks: {
		async jwt({ token, user }) {
			// Persist the OAuth access_token and or the user id to the token right after signin
			if (user) {
				return {
					...token,
					username: user.username,
				};
			}
			return token;
		},
		async session({ session, token }) {
			// Send properties to the client, like an access_token and user id from a provider.
			return {
				...session,
				user: {
					...session.user,
					username: token.username,
				},
			};
		},
	},
};
