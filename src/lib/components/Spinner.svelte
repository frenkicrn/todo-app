<script lang="ts">
	import { browser } from '$app/environment';
	import type { Comment } from '$lib/types/comment';
	import { fetchNewData } from '$lib/utils';

	let ancestor: HTMLElement;
	let pageNumber = $state(1);
	let fetching = $state(false);
	let { comments = $bindable([]) }: { comments?: Comment[] } = $props();


	let options = {
		rootMargin: '0px',
		threshold: 1.0
	};

	async function getNewData() {
		pageNumber = pageNumber + 1;
		fetching = true;
		const request = await fetchNewData(pageNumber);
		try {
			request?.comments.forEach(comment => comments.push(comment))
			fetching = false;
		} catch (e) {
			console.log(e);
		}
	}

	$effect(() => {
		if (browser){
			if (ancestor) {
				let observer = new IntersectionObserver((entries) => {
					if (entries[0].isIntersecting) {
						getNewData();
					}
				}, options);
				observer.observe(ancestor);
				return () => observer.disconnect();
			}
		}
	});
</script>


<div bind:this={ancestor}>
    {#if fetching}
        <div>
            <img src="./spinner.svg" alt="spinner" width="56" height="56" />
        </div>
    {/if}
</div>
