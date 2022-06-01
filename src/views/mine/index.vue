<template>
  <div> 我的个人中心 </div>
  <!-- <TabBar :tabBarSet="{ ...tabBarSet }" :tabBarArray="tabBarArray" /> -->
</template>

<script lang="ts" setup>
  import { defineComponent, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import TabBar from '@/components/tabBar'
  // const tabBarSet = ref<any>({
  //   // Icon: 'home-o',
  //   inActiveColor: '#red',
  //   activeColor: '#6c6464',
  //   tabBarHeight: '100px',
  //   suspendBtn: true,
  // })
  // const tabBarArray = ref<any>([
  //   {
  //     name: 'mine',
  //     path: '/mine',
  //     component: () => import('@/views/mine/index.vue'),
  //     meta: {
  //       showTab: true,
  //       title: '我的',
  //       icon: 'friends-o',
  //     },
  //   },
  // ])

  // export default defineComponent({
  //   name: 'Mine',
  //   setup() {
  //     // const route = useRoute();
  //     // const router = useRouter();
  //     // const active = ref('bottomTab');
  //     // const icon = {
  //     //   active: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-active.png',
  //     //   inactive: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-inactive.png',
  //     // }
  //     // // 监听切换事件
  //     // const onChange = (index) => {
  //     //   console.log('标签', index)
  //     // }
  //     // return { active, icon }
  //   },
  // })
</script>
