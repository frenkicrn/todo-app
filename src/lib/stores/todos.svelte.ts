import type { Todo } from "$lib/types/todo";
import { browser } from "$app/environment";

class TodoStore {
	todos = $state<Todo[]>(this.laodTodos());

    private laodTodos(): Todo[] {
        if (browser){
            const saved = localStorage.getItem('todos');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    }

    private saveTodos() {
        if (browser){
            localStorage.setItem('todos', JSON.stringify(this.todos))
        }
    }

	addTodo(title: string) {
		this.todos.push({
			id: Date.now().toString(),
			title,
			completed: false
		});
        this.saveTodos()
	}

	toggleTodo(id: string) {
		const todo = this.todos.find((t) => t.id == id);
		if (todo) todo.completed = !todo.completed;
        this.saveTodos()
	}

	deleteTodo(id: string) {
		this.todos = this.todos.filter((t) => t.id != id);
        this.saveTodos()
	}
}

export const todoStore = new TodoStore();
