<script lang="ts">
	import { onMount } from 'svelte';
	import type { EmojiResponse } from '$lib/utils/emoji';
	import EmojiCard from '../card/emoji_card.svelte';

	let { emojis, loading_handle }: {
		emojis: EmojiResponse[] | null | undefined,
		loading_handle: (status: boolean)=> void
	} = $props();
	let load_count = $state(0);

	const onload_handle = () => {
		load_count++;
		console.log(load_count + " = " + emojis?.length);
		loading_handle(load_count != emojis?.length);
	}
</script>

<p class="py-3 text-center md:text-2xl text-lg">Explore</p>

<div
	id="explore"
	class="grid min-h-128 w-full md:grid-cols-9 grid-cols-4 gap-2.5 overflow-x-hidden overflow-y-auto rounded-xl bg-[#1F1F1F] md:p-4 p-3"
	style="box-shadow: 0 0 4px 0 #00000040;"
>
	{#each emojis as emoji}
		<EmojiCard {emoji} {onload_handle} />
	{/each}
</div>

<style>
	#explore::-webkit-scrollbar {
		width: 5px;
	}

	#explore::-webkit-scrollbar-thumb {
		background: gray;
		border-radius: 100px;
	}

	#explore::-webkit-scrollbar-button {
		background: transparent;
	}
</style>
