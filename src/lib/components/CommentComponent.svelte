<script lang="ts">
	import type { Comment } from '$lib/types/comment.js';

	let { id, postId, name, body, email }: Comment = $props();
</script>

<div>
	<img src="https://ca.slack-edge.com/TB3ACNU1G-U02JWHGPC5Q-5ad8b6527031-192" alt={name} />
	<div>
		<div>
			<h2>
				<b>NOME: </b>{name}
			</h2>
			<div>
				<p>
					<b>COMMENTO: </b>{body}
				</p>
			</div>
		</div>
	</div>
</div>
