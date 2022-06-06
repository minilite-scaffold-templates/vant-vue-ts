<template>
  <div :style="{ height: '800px' }">
    <van-button plain @click="changeColor(2)">切换主题2颜色</van-button>
  </div>
</template>

<script lang="ts" setup>
  import { Button } from 'vant'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const checkMore = () => {
    router.push({
      path: '/detail',
    })
  }
  const changeColor = (type) => {
    document.getElementById('app').setAttribute('class', `theme_${type}`)
  }
</script>
