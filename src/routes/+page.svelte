<script>
	import { todoStore } from '$lib/stores/todos.svelte';
	import TodoForm from '$lib/components/TodoForm.svelte';
</script>

<TodoForm />

{#each todoStore.todos as todo (todo.id)}
	<div>
		<input
			type="checkbox"
			id={todo.id}
			checked={todo.completed}
			onchange={() => todoStore.toggleTodo(todo.id)}
		/>
		<a href="/{todo.id}">{todo.title}</a>
		<button style="background-color: red; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick={() => todoStore.deleteTodo(todo.id)}>Delete </button>
	</div>
{/each}
