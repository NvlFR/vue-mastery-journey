import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [],
    user: { name: 'Murid Hebat', id: 1 },
  }),
  getters: {
    getPostById: (state) => {
      return (postId) => state.posts.find((post) => post.id === postId)
    },
  },
  actions: {
    fetchPost() {
      this.posts = [
        { id: 1, title: 'Apa itu Vue Router?', content: 'Vue Router adalah...' },
        { id: 2, title: 'Mengenal Pini State Management', content: 'Pinis adalah...' },
        { id: 3, title: 'Kekuatan Composables', content: 'Composables Memungkinkan...' },
      ]
    },
  },
})
