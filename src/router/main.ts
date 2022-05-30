import { RouteRecordRaw } from 'vue-router'

export const main: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'home-o',
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
    name: 'mine',
    path: '/mine',
    component: () => import('@/views/mine/index.vue'),
    meta: {
      showTab: true,
      title: '你的',
      icon: 'friends-o',
    },
  },
  {
    name: 'mine',
    path: '/mine',
    component: () => import('@/views/mine/index.vue'),
    meta: {
      showTab: true,
      title: '的',
      icon: 'friends-o',
    },
  },
]
