import type { Comment } from "./types/comment";

export const fetchNewData = async (pageNumber: number) => {
	console.log("ciao")
	const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10&_page=${pageNumber}e`);

	try{
		const comments = await response.json();
		return {
			comments
		} as { comments: Comment[] };
	} catch(e){
		console.log(e)
	}
};
