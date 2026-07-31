<script lang="ts">
	import type { EmojiResponse } from '$lib/utils/emoji';
	import { fade, fly } from 'svelte/transition';

	interface Prop { emoji: EmojiResponse; }
	const { emoji }: Prop  = $props();

	let copied = $state(false);
	const API_BASE = '/api/emoji';

	async function copy() {
		const response = await fetch(`${API_BASE}/${emoji?.id}`);
		const blob = await response.blob();

		const img = new Image();
		img.src = URL.createObjectURL(blob);

		await img.decode();

		const canvas = document.createElement('canvas');
		canvas.width = img.width;
		canvas.height = img.height;

		const ctx = canvas.getContext('2d');
		ctx?.drawImage(img, 0, 0);

		const pngBlob = await new Promise<Blob>((resolve) => {
			canvas.toBlob((blob) => {
				resolve(blob!);
			}, 'image/png');
		});

		await navigator.clipboard.write([
			new ClipboardItem({
				'image/png': pngBlob
			})
		]);

		URL.revokeObjectURL(img.src);

		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	}

	function error_handle(e: Event) {
		const img = e.currentTarget as HTMLImageElement;
		img.src = `/api/emoji/${emoji.id}?retry=1&t=${Date.now()}`;
	}
</script>

<button
	id="card"
	onclick={async () => {
		await copy();
	}}
	class="relative flex flex-col items-center justify-center gap-2 rounded-lg p-2 hover:bg-[#FFFFFF1C] xl:px-6 xl:py-3"
	style="transition: 0.5s;"
>
	<img
		src="{API_BASE}/{emoji?.id}"
		width="54"
		class="bg-center"
		alt="emoji"
		loading="lazy"
		decoding="async"
		onerror={error_handle}
	/>
	<p class="w-full overflow-clip text-center text-[8px] text-ellipsis md:text-xs">
		:{emoji?.name}:
	</p>
	{#if copied}
		<div transition:fade={{ duration: 250 }} class="overlay">
			<p in:fly={{ y: -50, delay: 1 }} class="text-xs md:text-lg">Copied!</p>
		</div>
	{/if}
</button>

<style>
	.overlay {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.75);
		border-radius: 0.5rem;
	}
</style>
