<script lang="ts">
	import { onMount } from 'svelte';
	import type { EmojiResponse } from '$lib/utils/emoji';
	import EmojiCard from '../card/emoji_card.svelte';

	let {
		emojis,
	}: {
		emojis: EmojiResponse[] | null | undefined;
	} = $props();
</script>

<p class="py-3 text-center text-lg md:text-2xl">Explore</p>

<div
	id="explore"
	class="grid min-h-128 w-full grid-cols-4 gap-2.5 overflow-x-hidden overflow-y-auto rounded-xl bg-[#1F1F1F] p-3 md:grid-cols-9 md:p-4"
	style="box-shadow: 0 0 4px 0 #00000040;"
>
	{#each emojis as emoji}
		<EmojiCard {emoji} />
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
