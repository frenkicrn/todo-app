<script lang="ts">
    import { todoStore } from "$lib/stores/todos.svelte";

    let title = $state("");

    const handleSubmit = (e:SubmitEvent) => {
        e.preventDefault();
        if (title.trim()) {
            todoStore.addTodo(title);
            title = ""
        }
    }
</script>

<form onsubmit ={handleSubmit}>
	<label for ="todo">Aggiungi il todo</label><br>
	<input type="text" id="todo" bind:value={title}>
    <button type="submit">Aggiungi</button>
</form>
