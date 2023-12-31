// Filename: db.js

const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
	return new PrismaClient();
};

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
	globalForPrisma.prisma = prisma;
}

export const db = prisma;
