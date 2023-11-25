import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		const body = await req.json();
		console.log('Received JSON:', body);
		// Process the request and send a response
		return NextResponse.json(body);
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
