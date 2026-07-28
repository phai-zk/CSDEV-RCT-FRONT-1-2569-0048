export interface EmojiResponse {
	id: string;
	name: string;
}

export default async function get_all_emoji(): Promise<EmojiResponse[] | null> {
	try {
		const res = await fetch('/api/emoji');

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		const data: { data: EmojiResponse[] } = await res.json();
		return data?.data;
	} catch (error) {
		console.error('Failed to fetch emojis:', error);
		return null;
	}
}
