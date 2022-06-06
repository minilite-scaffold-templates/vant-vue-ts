import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { main } from './main'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页',
    },
    children: [...main],
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
