import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import routerData from '@/utils/routerData'
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
// routerData.forEach((item) => {
//   return routes.push({
//     path: item.path,
//     name: item.name,
//     component: () => import(`../views/${item.component}.vue`),
//   })

// })
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
