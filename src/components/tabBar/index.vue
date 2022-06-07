<template>
  <van-nav-bar v-if="customTabBar" :title="$route.meta?.title">
    <template #left>
      <van-icon name="wap-nav" size="18" @click="showTabBar" />
    </template>
    <template #right>
      <!-- <van-icon name="search" size="18" /> -->
    </template>
  </van-nav-bar>

  <div class="container">
    <router-view />
  </div>

  <van-tabbar
    v-if="!customTabBar"
    route
    :active-color="tabBarSet?.activeColor"
    :inactive-color="tabBarSet?.inActiveColor"
    class="tabrList"
    :style="{
      height: heightList.find((item) => item.name === tabBarSet?.tabBarHeight)?.value || tabBarSet?.tabBarHeight,
      top: showPosition === 'top' && 0,
      bottom: showPosition === 'top' && 'unset',
    }"
  >
    <template v-for="item in tabBarList" :key="item.name">
      <van-tabbar-item :to="item.path" replace :icon="item.meta?.icon">
        <span>{{ item.meta?.title }} </span>
        <template v-if="defaultIcon" #icon="">
          <img :src="defaultIcon" />
        </template>
      </van-tabbar-item>
    </template>
  </van-tabbar>

  <!-- 自定义tabBar模板 -->
  <div v-else>
    <van-popup
      v-if="customTabBar?.position === 'left' || customTabBar?.position === 'right'"
      v-model:show="visible"
      :position="customTabBar?.position"
      :style="{ height: '100%', width: customTabBar?.width }"
      class="flexCenter"
    >
      <div>自定义模板</div>
    </van-popup>
    <div v-else class="customTab">
      <slot name="showTemplate"> 我的自定义模板 </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, defineProps, unref } from 'vue'
  import { Tabbar, TabbarItem } from 'vant'
  import App from '@/App.vue'
  import { ITabBarType, ITabBarSetType, heightList, ITemplate } from './type/index'

  // 自定义图标、颜色、高度、模板、tabbar位置
  const props = defineProps<{
    tabBarSet?: ITabBarSetType
    tabBarArray?: ITabBarType
    heightList?: Array
  }>()
  const tabBarList = ref<any[]>([])
  const defaultIcon = ref()
  const customTabBar = ref()
  const showPosition = ref()
  const visible = ref(false)

  onMounted(async () => {
    const { tabBarArray = [], tabBarSet = {} } = JSON.parse(JSON.stringify(props))
    const { tabBarPosition = 'bottom', tabBarIcon = '', showTemplate = '' } = tabBarSet
    defaultIcon.value = tabBarIcon
    customTabBar.value = showTemplate
    showPosition.value = tabBarPosition
    // 最多显示4个tabbar
    tabBarList.value = await (tabBarArray?.length > 4 ? tabBarArray.slice(0, 4) : tabBarArray)
  })
  const showTabBar = () => {
    visible.value = true
  }
</script>

<style scoped lang="less">
  .customTab {
    position: fixed;
    // bottom: v-bind(positionBottom);
    left: 0px;
    right: 0px;
  }
</style>
