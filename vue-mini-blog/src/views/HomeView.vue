<script setup>
import { onMounted } from 'vue'
import { useBlogStore } from '../stores/blogStore'
import { RouterLink } from 'vue-router'

const blogStore = useBlogStore()

onMounted(() => {
  blogStore.fetchPost()
})
</script>

<template>
  <main>
    <h1>Selamat Datang, {{ blogStore.user.name }}!</h1>
    <h2>Postingan</h2>
    <div v-for="post in blogStore.posts" :key="post.id" class="post-item">
      <RouterLink :to="`/post/${post.id}`">
        <h3>{{ post.title }}</h3>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.post-item {
  margin-bottom: 1rem;
}
a {
  text-decoration: none;
  color: #42b883;
}
</style>
