import { RouteRecordRaw } from 'vue-router'

export const main: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'home-o',
      showTab: true,
    },
  },
  {
    name: 'mine',
    path: '/mine',
    component: () => import('@/views/mine/index.vue'),
    meta: {
      showTab: true,
      title: '我的',
      icon: 'friends-o',
    },
  },
  {
    name: 'personal',
    path: '/personal',
    component: () => import('@/views/personal/index.vue'),
    meta: {
      showTab: true,
      title: '个人中心',
      icon: 'friends-o',
    },
  },
]
