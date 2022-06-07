<template>
  <van-nav-bar v-if="customTabBar" :title="$route.meta?.title">
    <template v-if="customTabBar?.position === 'left'" #left>
      <van-icon name="wap-nav" size="18" @click="showTabBar" />
    </template>
    <template v-else #right>
      <van-icon name="wap-nav" size="18" @click="showTabBar" />
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
      <van-tabbar
        route
        :border="false"
        :active-color="tabBarSet?.activeColor"
        :inactive-color="tabBarSet?.inActiveColor"
        class="tabBarContent"
        :style="{
          height: customTabBar?.height,
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
  import { onMounted, ref, ComputedRef, defineProps } from 'vue'
  import { Tabbar, TabbarItem } from 'vant'

  import { useProjectSetting } from '@/hooks/setting/useProjectSetting'
  import { ITabBarType, ITabBarSetType, ITemplate } from './type/index'
  import { heightList } from './type/heightList'

  const { getTabBarHeight } = useProjectSetting()
  // const { getInActiveColor, getActiveColor, getTabBarHeight, getShowTemplate, getTabBarPosition } = useProjectSetting()
  // const inActiveColor = ref<ComputedRef<string>>(getTabBarHeight)
  console.log('99999', getTabBarHeight)

  // 自定义图标、颜色、高度、模板
  const props = defineProps<{
    tabBarSet?: ITabBarSetType
    tabBarArray?: ITabBarType
    heightList?: Array<any>
  }>()
  // const tabBarHeight = ref(getTabBarHeight)
  // console.log(9999, inActiveColor, activeColor, tabBarHeight)

  const tabBarList = ref<any[]>([])
  const defaultIcon = ref()
  const customTabBar = ref() // 自定义模板
  const showPosition = ref() // tabbar显示位置
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
  .tabBarContent {
    height: 300px;
    flex-direction: column;
    top: 36px;
  }
</style>
