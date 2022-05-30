<template>
  <div> 我的个人中心 </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  export default defineComponent({
    name: 'Mine',
    setup() {
      // const route = useRoute();
      // const router = useRouter();
      // const active = ref('bottomTab');
      // const icon = {
      //   active: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-active.png',
      //   inactive: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-inactive.png',
      // }
      // // 监听切换事件
      // const onChange = (index) => {
      //   console.log('标签', index)
      // }
      // return { active, icon }
    },
  })
</script>
