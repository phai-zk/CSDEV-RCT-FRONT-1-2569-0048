<div class="relative flex w-full items-center justify-center overflow-hidden">
	<div class="flex flex-col items-center justify-center pt-43 pb-13">
		<img class="img1 top-22 left-21.5" width="85" src="/images/img1.png" alt="floating emoji" />
		<img class="img2 bottom-30 left-10.25 -rotate-16" width="74" src="/images/img2.png" alt="floating emoji" />
		<img class="img3 bottom-28 right-14.25" width="74" src="/images/img3.png" alt="floating emoji" />
		<img class="img4 top-18 right-10.25 rotate-32" width="74" src="/images/img4.png" alt="floating emoji" />

		<div class="flex flex-col gap-6 text-center">
			<p class="text-8xl font-semibold tracking-wide">Take Banana</p>
			<p class="text-3xl font-light tracking-wider">Copied png to use as your emoji</p>
		</div>
		<a href="#explore" class="mt-13 rounded-xl bg-[#FF7A45] px-19 py-3">
			<p class="text-[1rem] font-medium text-[#181818]">Explore banana</p>
		</a>
	</div>
</div>

<style>

	img {
		position: absolute;
		border-radius: 12px;
	}

    .img1 {animation: top-left-float 4s ease-in-out infinite;animation-delay: 0.5s;}
    .img2 {animation: top-left-float 3.8s ease-in-out infinite;animation-delay: 0s;}
    .img3 {animation: top-right-float 4.2s ease-in-out infinite;animation-delay: 0.5s;}
    .img4 {animation: top-right-float 3.7s ease-in-out infinite;animation-delay: 0s;}

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
