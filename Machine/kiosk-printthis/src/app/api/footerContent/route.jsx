// pages/api/footerContent.js

import { db } from '@/helper/db';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const itemsFromDatabase = await db.footer_content.findMany();
			const items = itemsFromDatabase.map((item) => item.content_text);
			res.status(200).json({ items });
		} catch (error) {
			console.error('Error fetching data from database:', error);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).end(); // Method Not Allowed
	}
}
