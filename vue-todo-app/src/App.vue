<script setup>
import { ref } from "vue";
import TodoItem from "./components/TodoItem.vue";

const todos = ref([
  { id: 1, text: "Belajar Konsep Komponen", done: false },
  { id: 2, text: "Menguasai Props & Emits", done: false },
  { id: 3, text: "Commit Proyek ke GitHub", done: true },
]);

const red = "green";

function handleDeleteTodo(idTodoDelete) {
  todos.value = todos.value.filter((todo) => todo.id !== idTodoDelete);
}
</script>

<template>
  <main>
    <h1>Aplikasi To-Do</h1>
    <ul>
      <TodoItem
        v-for="item in todos"
        :key="item.id"
        :todo="item"
        @delete-todo="handleDeleteTodo"
      />
    </ul>
  </main>
</template>

<style scoped>
main {
  max-width: 500px;
  margin: 2rem auto;
  font-family: sans-serif;
}
</style>
