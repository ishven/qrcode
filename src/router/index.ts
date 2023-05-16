import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'Introduce',
    path: '/',
    component: () => import('@/views/wine/Introduce.vue'),
    meta: { title: '登录', icon: "" }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
