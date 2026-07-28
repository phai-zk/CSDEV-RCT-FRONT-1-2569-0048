<div class="relative flex w-full items-center justify-center overflow-hidden">
	<div class="flex flex-col items-center justify-center pt-20 pb-13 md:pt-43">
		<img
			class="img1 top-8 left-0 w-10 md:top-22 md:left-21.5 md:w-21.25"
			src="/images/img1.png"
			alt="floating emoji"
		/>
		<img
			class="img2 bottom-25 left-0 w-7.75 -rotate-16 md:bottom-30 md:left-10.25 md:w-18.5"
			src="/images/img2.png"
			alt="floating emoji"
		/>
		<img
			class="img3 right-2 bottom-25 w-7.75 md:right-14.25 md:bottom-28 md:w-18.5"
			src="/images/img3.png"
			alt="floating emoji"
		/>
		<img
			class="img4 top-10 right-2.25 w-7.75 rotate-32 md:top-18 md:right-10.25 md:w-18.5"
			src="/images/img4.png"
			alt="floating emoji"
		/>

		<div class="flex flex-col gap-3 text-center md:gap-6">
			<p class="text-4xl font-semibold tracking-wide md:text-8xl">Take Banana</p>
			<p class="text-sm font-light tracking-wider md:text-3xl">Copied png to use as your emoji</p>
		</div>
		<a href="#explore" class="mt-13 md:rounded-xl rounded-md bg-[#FF7A45] md:px-19 md:py-3 px-10 py-2 ">
			<p class="md:text-[1rem] text-xs font-medium text-[#181818]">Explore banana</p>
		</a>
	</div>
</div>

<style>
	img {
		position: absolute;
		border-radius: 12px;
	}

	@media (width < 64rem /* 1024px */) {
		img {
			border-radius: 8px;
		}
	}
	.img1 {
		animation: top-left-float 4s ease-in-out infinite;
		animation-delay: 0.5s;
	}
	.img2 {
		animation: top-left-float 3.8s ease-in-out infinite;
		animation-delay: 0s;
	}
	.img3 {
		animation: top-right-float 4.2s ease-in-out infinite;
		animation-delay: 0.5s;
	}
	.img4 {
		animation: top-right-float 3.7s ease-in-out infinite;
		animation-delay: 0s;
	}

	@keyframes top-left-float {
		0%,
		100% {
			transform: translate(0, 0);
		}

		50% {
			transform: translate(10%, 25%);
		}
	}

	@keyframes top-right-float {
		0%,
		100% {
			transform: translate(0, 0);
		}

		50% {
			transform: translate(-10%, 25%);
		}
	}
</style>
