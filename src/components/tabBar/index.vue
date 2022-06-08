<template>
  <van-nav-bar v-if="customTabBar" :title="$route.meta?.title">
    <template v-if="position === 'left'" #left>
      <van-icon name="wap-nav" size="18" @click="showTabBar" />
    </template>
    <template v-else #right>
      <van-icon name="wap-nav" size="18" @click="showTabBar" />
    </template>
  </van-nav-bar>
  <div class="container"><router-view /> </div>
  <van-tabbar
    v-if="!customTabBar"
    route
    :active-color="activeColor"
    :inactive-color="inActiveColor"
    class="tabrList"
    :style="{
      height: heightList.find((item) => item.name === tabBarHeight)?.value || tabBarHeight,
      bottom: tabBarBottom,
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

  <!-- 自定义tabBar左右显示 -->
  <div v-else>
    <van-popup
      v-if="position === 'left' || position === 'right'"
      v-model:show="visible"
      :position="position"
      :style="{ height: '100%', width }"
      class="flexCenter"
    >
      <van-tabbar
        route
        :border="false"
        :active-color="activeColor"
        :inactive-color="inActiveColor"
        class="tabBarContent"
        :style="{
          height,
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
    </van-popup>
    <!-- 自定义tabBar上下显示 -->
    <div v-else class="customTab">
      <slot name="showTemplate"> </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, ComputedRef, toRaw } from 'vue'
  import { Tabbar, TabbarItem } from 'vant'
  import { useProjectSetting } from '@/hooks/setting/useProjectSetting'
  import { main } from '@/router/main'
  import { ITabBarType, ITabBarSetType, ITemplate } from './type/index'
  import { heightList } from './type/heightList'

  const {
    getInActiveColor,
    getActiveColor,
    getTabBarHeight,
    getShowTemplate,
    getTabBarPosition,
    getTabBarIcon,
    getTabMargin,
  } = useProjectSetting()
  const tabBarHeight = ref<ComputedRef<string>>(getTabBarHeight)
  const activeColor = ref<ComputedRef<string>>(getActiveColor)
  const inActiveColor = ref<ComputedRef<string>>(getInActiveColor)
  const customTabBar = ref<ComputedRef<string>>(getShowTemplate)
  const showPosition = ref<ComputedRef<string>>(getTabBarPosition)
  const defaultIcon = ref<ComputedRef<string>>(getTabBarIcon)
  const tabBarBottom = ref<ComputedRef<string>>(getTabMargin) || '0px'
  console.log('tabBarBottom', getTabMargin, tabBarBottom)
  const { height = '', position = '', width = '' } = toRaw(customTabBar?.value)
  const tabBarList = ref<any[]>([])
  const visible = ref(false)

  onMounted(async () => {
    const tabBarArray = { ...main }
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
    left: 0px;
    right: 0px;
  }
  .tabBarContent {
    height: 300px;
    flex-direction: column;
    top: 36px;
  }
</style>
