import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/post/;id',
      name: 'postDetail',
      component: () => import('../views/PostDetailView.vue'),
    },
  ],
})

export default router
