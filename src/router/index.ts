import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Introduce',
    path: '/qrcode/wine/Introduce',
    component: () => import('@/views/wine/Introduce.vue'),
    meta: { title: '1988', icon: "" }
  },
  {
    name: 'Introduce01',
    path: '/qrcode/wine/Introduce01',
    component: () => import('@/views/wine/Introduce01.vue'),
    meta: { title: '988', icon: "" }
  },
  {
    name: 'Introduce02',
    path: '/qrcode/wine/Introduce02',
    component: () => import('@/views/wine/Introduce02.vue'),
    meta: { title: '3988', icon: "" }
  },
  {
    name: 'Introduce03',
    path: '/qrcode/wine/Introduce03',
    component: () => import('@/views/wine/Introduce03.vue'),
    meta: { title: '88', icon: "" }
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
  {
    name: 'IntroduceDetail02',
    path: '/qrcode/wineDetail/IntroduceDetail02',
    component: () => import('@/views/wineDetail/IntroduceDetail02.vue'),
    meta: { title: '产品详情', icon: "" }
  },
  {
    name: 'IntroduceDetail03',
    path: '/qrcode/wineDetail/IntroduceDetail03',
    component: () => import('@/views/wineDetail/IntroduceDetail03.vue'),
    meta: { title: '产品详情', icon: "" }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
