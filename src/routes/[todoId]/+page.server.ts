import type { Comment } from '$lib/types/comment.js';

export const load = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10&_page=1');
	console.dir({response})
	const comments = await response.json()

	return {
		comments
	} as { comments: Comment[] };
};
