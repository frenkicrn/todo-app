<script>
    import { todoStore } from "$lib/stores/todos.svelte";
    import { page } from "$app/state";
    import { error } from "@sveltejs/kit";
    import CommentComponent from "$lib/components/CommentComponent.svelte";
	import Spinner from "$lib/components/Spinner.svelte";
    let { data } = $props();

    const todo = todoStore.todos.find(todo => todo.id == page.params.todoId);

    if (!todo) {
        error(404, 'Todo not found');
    }
</script>
<h1>{todo.title}</h1>
<div class={todo.completed ? "done" : "dont"}>
</div>
<ul>
    {#each data.comments as comment (comment.id)}
        <CommentComponent {...comment}/>
    {/each}
    <Spinner/>
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