<template>
    <h2>TODO List</h2>
    <form v-on:submit.prevent="addClicked">
        <input type="text" v-model="newTodo">
        <button v-bind:disabled="newTodoEmpty">Add</button>
    </form>
    <ul>
        <li v-for="(todo, index) in todos" v-bind:key="todo.task">
            <input type="checkbox">
            {{ todo.task }}
            <button v-on:click="deleteClicked(index)">Delete</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
class Todo {
    task: string
    done: boolean
    constructor(task: string) {
        this.task = task
        this.done = false
    }
}

const todos = useState<Todo[]>("todos", (): Todo[] => {
    return []
})

const newTodo: Ref<string> = ref("")

const newTodoEmpty: Ref<boolean> = computed((): boolean => {
    return newTodo.value === ""
})

const addClicked = () => {
    todos.value.push(new Todo(newTodo.value))
    newTodo.value = ""
}

const deleteClicked = (index: number) => {
    todos.value.splice(index, 1)
}
</script>