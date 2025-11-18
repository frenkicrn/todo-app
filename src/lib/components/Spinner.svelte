<script lang="ts">
	import type { Comment } from '$lib/types/comment';

	let ancestor: HTMLElement;
	//let pageNumber = $state(0);

	let options = {
		rootMargin: '0px',
		threshold: 1.0
	};

	$effect(() => {
		if (ancestor) {
			let observer = new IntersectionObserver(() => {
				(console.log('ciao'), options);
			});
			observer.observe(ancestor);
		}
	});
</script>

<div bind:this={ancestor}>
	<div>
		<img src="./spinner.svg" alt="spinner" width="56" height="56" />
	</div>
</div>
