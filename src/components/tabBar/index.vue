<template>
  <div class="container"> <router-view /> </div>
  <van-tabbar
    route
    :active-color="tabBarSet?.activeColor"
    :inactive-color="tabBarSet?.inActiveColor"
    class="tabrList"
    :style="{ height: tabBarSet?.tabBarHeight }"
  >
    <template v-for="item in tabBarList" :key="item.name">
      <van-tabbar-item :to="item.path" :icon="item.meta?.icon" replace>
        <span>{{ item.meta?.title }} </span>
        <!-- <template>
          <img :src="item.meta?.icon || ''" />
        </template> -->
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  // //自定义图标、颜色、高度、是否有悬浮按钮
  const props = defineProps({
    tabBarArray: { type: Array, require: true },
    tabBarSet: {
      inActiveColor: { type: String },
      activeColor: { type: String },
      tabBarHeight: { type: String },
      // tabBarSpace:{ type: String,},
      suspendBtn: { type: Boolean, default: 'fasle' },
    },
  })
  // 最多显示4个tabbar
  const tabBarList = ref<any[]>([])
  onMounted(async () => {
    const { tabBarArray = [], tabBarSet = {} } = JSON.parse(JSON.stringify(props))
    const { tabBarHeight = '', inActiveColor = '', activeColor = '', suspendBtn = '' } = ref(tabBarSet)
    tabBarList.value = await (tabBarArray?.length > 4 ? tabBarArray.slice(0, 4) : tabBarArray)
  })
</script>

<style></style>
