<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["delete-todo"]);
// function deleteTodo() {
//   emit("delete-todo", todo.id);
// }
</script>

<template>
  <li>
    <span>{{ todo.text }}</span>
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
</style>
