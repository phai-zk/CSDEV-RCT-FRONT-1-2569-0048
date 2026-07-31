import { json } from '@sveltejs/kit';
import { BASE_API } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	try {
		const res = await fetch(`${BASE_API}/api/emoji`);

		if (!res.ok) {
			console.error('Emoji API error:', res.status, res.statusText);

			return json({ error: 'Failed to fetch emoji data' }, { status: res.status });
		}

		const data = await res.json();

		return json({ data }, { status: 200 });
	} catch (error) {
		console.error('Fetch emoji failed:', error);

		return json({ error: 'Internal server error' }, { status: 500 });
	}
};
