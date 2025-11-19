<script lang="ts">
    import { todoStore } from "$lib/stores/todos.svelte";
    import { page } from "$app/state";
    import CommentComponent from "$lib/components/CommentComponent.svelte";
	import Spinner from "$lib/components/Spinner.svelte";
	import { browser } from "$app/environment";
    let { data } = $props();
	let comments = $state(data.comments);

    let todo:any;
    if (browser) todo = todoStore.todos.find(todo => todo.id == page.params.todoId);
</script>
<h1>{todo?.title}</h1>
<div class={todo?.completed ? "done" : "dont"}>
</div>
<ul>
    {#each comments as comment (comment.id)}
        <CommentComponent {...comment}/>
    {/each}
    <Spinner bind:comments/>
</ul>
<style>
    .done {
        background-color: green;
        padding: 20px;
        min-height: 100px;
    }
    .dont {
        background-color: red;
        padding: 20px;
        min-height: 100px;
    }
</style>