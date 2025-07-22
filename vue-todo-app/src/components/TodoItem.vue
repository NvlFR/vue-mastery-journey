<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["delete-todo", "toggle-done"]);
// function deleteTodo() {
//   emit("delete-todo", todo.id);
// }
</script>

<template>
  <li>
    <span @click="$emit('toggle-done', todo.id)" :class="{ done: todo.done }">{{
      todo.text
    }}</span>
    <button @click="$emit('delete-todo', todo.id)">Hapus</button>
  </li>
</template>

<style scoped>
li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
button {
  margin-left: 1rem;
}
.done {
  text-decoration: line-through;
  color: #888;
}
span {
  cursor: pointer;
}
</style>
