import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.PROD ? '/-/dl-tdesign' : ''),
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
