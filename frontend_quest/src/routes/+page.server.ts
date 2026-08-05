import type { PageServerLoad } from './$types';
import type { EmojiResponse } from '$lib/type/emoji.js';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const res = await fetch('/api/emoji');

		if (!res.ok) {
			throw Error('Failed to load emoji');
		}

		const data: { data: EmojiResponse[] } = await res.json();
		return {
			data: data?.data
		};
	} catch (error) {
		console.error('Failed to fetch emojis:', error);
		return {
			data: null
		};
	}
};
