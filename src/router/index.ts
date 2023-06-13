import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Introduce',
    path: '/qrcode/wine/Introduce',
    component: () => import('@/views/wine/Introduce.vue'),
    meta: { title: '产品介绍', icon: "" }
  },
  {
    name: 'Introduce01',
    path: '/qrcode/wine/Introduce01',
    component: () => import('@/views/wine/Introduce01.vue'),
    meta: { title: '产品介绍', icon: "" }
  },
  {
    name: 'IntroduceDetail',
    path: '/qrcode/wineDetail/IntroduceDetail',
    component: () => import('@/views/wineDetail/IntroduceDetail.vue'),
    meta: { title: '产品详情', icon: "" }
  },
  {
    name: 'IntroduceDetail01',
    path: '/qrcode/wineDetail/IntroduceDetail01',
    component: () => import('@/views/wineDetail/IntroduceDetail01.vue'),
    meta: { title: '产品详情', icon: "" }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
