<script setup>
import { ref, computed, onMounted, watch } from "vue";
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
function handleToggleDone(idToToggle) {
  const todo = todos.value.find((t) => t.id === idToToggle);

  if (todo) {
    todo.done = !todo.done;
  }
}

const summary = computed(() => {
  const total = todos.value.length;
  const doneCount = todos.value.filter((t) => t.done).length;
  return `${total} tugas, ${doneCount} selesai`;
});

watch(
  todos,
  (newValue) => {
    localStorage.setItem("todos-vue", JSON.stringify(newValue));
  },
  { deep: true }
);

onMounted(() => {
  const savedTodos = localStorage.getItem("todos-vue");
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos);
  }
});
</script>

<template>
  <main>
    <h1>Aplikasi To-Do</h1>
    <p>{{ summary }}</p>
    <ul>
      <TodoItem
        v-for="item in todos"
        :key="item.id"
        :todo="item"
        @delete-todo="handleDeleteTodo"
        @toggle-done="handleToggleDone"
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
