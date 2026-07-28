import { BASE_API } from '$env/static/private';
import type { RequestHandler } from './$types';
import sharp from 'sharp';

export const GET: RequestHandler = async ({ params, fetch }) => {
	try {
		const res = await fetch(`${BASE_API}/api/emoji/${params.id}`);
		console.log('emoji id:', params.id);
		if (!res.ok) {
			return new Response(null, {
				status: res.status
			});
		}

		console.log('backend status:', res.status);
		const buffer = Buffer.from(await res.arrayBuffer());
		console.log('buffer size:', buffer.length);
		const resized = await sharp(buffer).resize(64, 64).webp({ quality: 90 }).toBuffer();

		return new Response(resized, {
			headers: {
				'Content-Type': 'image/webp',
				'Cache-Control': 'public, max-age=31536000, immutable'
			}
		});
	} catch (err) {
		console.error(err);

		return new Response(null, {
			status: 500
		});
	}
};
