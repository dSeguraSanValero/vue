import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/public',
      name: 'PublicView',
      component: () => import('@/views/PublicView.vue')
    },
    {
      path: '/private',
      name: 'PrivateView',
      component: () => import('@/views/PrivateView.vue')
    }
  ]
})

export default router
