const { default: NextAuth } = require('next-auth/next');
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from './db';

const handler = NextAuth({
	adapter: PrismaAdapter(db),
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/auth/login',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',

			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'jsmith@mail.com' },
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
	],
});

export { handler as GET, handler as POST };
