import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/base'
    },
    {
      path: '/base',
      component: () => import('./pages/base.vue')
    },
    {
      path: '/grid',
      component: () => import('./pages/grid.vue')
    }
  ]
})

export default router
