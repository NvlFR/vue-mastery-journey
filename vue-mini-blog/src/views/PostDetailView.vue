<script setup>
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/blogStore'

const route = useRoute()
const blogStore = useBlogStore()

const postId = parseInt(route.params.id)

const post = blogStore.getPostById(postId)
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <RouterLink to="/">Kembali ke Home</RouterLink>
  </div>
  <div v-else>
    <p>Postingan tidak ditemukan</p>
  </div>
</template>
