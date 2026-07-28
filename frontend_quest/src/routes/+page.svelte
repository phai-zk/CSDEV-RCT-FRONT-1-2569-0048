<script lang="ts">
	import Header from '$lib/components/hero_page/header.svelte';
	import Hero from '$lib/components/hero_page/hero.svelte';
	import Expolor from '$lib/components/hero_page/explore.svelte';
	import Footer from '$lib/components/hero_page/footer.svelte';
	import Transition from '$lib/components/transition.svelte';
	import get_all_emoji from '$lib/utils/emoji.js';
	import type { EmojiResponse } from '$lib/utils/emoji.js';
	import { onMount } from 'svelte';

	let isLoading = $state(true);
	let emojis: EmojiResponse[] | null | undefined = $state<EmojiResponse[] | null>();
	onMount(async () => {
		emojis = await get_all_emoji();

		setTimeout(() => {
			isLoading = false;
		}, 1000);
	});
</script>

{#if isLoading}
	<Transition />
{:else}
	<div class="min-h-screen flex flex-col">
		<main class="px-64 pb-9">
			<Header />
			<Hero />
			<Expolor bind:isLoading {emojis} />
		</main>
		<Footer />
	</div>
{/if}
