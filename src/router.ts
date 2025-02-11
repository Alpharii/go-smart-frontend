import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Home/index.vue'),
    },
    {
      path: '/login',
      component: () => import('@/pages/Login/index.vue'),
    },
    {
      path: '/register',
      component: () => import('@/pages/Register/index.vue'),
    },
  ],
})

export default router
