<script setup>
import { ref } from "vue";

const count = ref(0); // membuat variabel 'count' yang reaktif dengan nilai awal 0

function increment() {
  count.value++; // naikan nilai count
}

function decrement() {
  if (count.value > 0) {
    count.value--; // turunkan nilai count hanya jika > 0
  }
}
</script>

<template>
  <h1 :class="{ 'red-text': count === 0 }">{{ count }}</h1>
  <button @click="increment">Tambah</button>
  <button @click="decrement">Kurang</button>
</template>

<style scoped>
.red-text {
  color: red;
}
</style>
