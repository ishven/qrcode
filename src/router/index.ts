import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    title: '首页',
    redirect: '/vue-qrcode'
  },
  {
    name: 'Introduce',
    path: '/vue-qrcode',
    component: () => import('@/views/wine/Introduce.vue'),
    meta: { title: '登录', icon: "" }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
