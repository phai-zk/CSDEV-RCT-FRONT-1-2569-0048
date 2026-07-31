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
{/if}

<div class="min-h-screen flex flex-col z-0">
	<main class="2xl:px-64 md:px-20 px-5 pb-9">
		<Header />
		<Hero />
		<Expolor {emojis} />
	</main>
	<Footer />
</div>

