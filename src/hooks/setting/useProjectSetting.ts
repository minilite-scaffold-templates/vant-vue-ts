import { computed } from 'vue'
import useProjectSettingStore from '@/store/modules/projectSetting'

export function useProjectSetting() {
  const projectStore = useProjectSettingStore()

  const getTabBarPosition = computed(() => projectStore.tabBarPosition)

  const getNavTheme = computed(() => projectStore.navTheme)

  const getInActiveColor = computed(() => projectStore.inActiveColor)

  const getActiveColor = computed(() => projectStore.activeColor)

  const getShowTemplate = computed(() => projectStore.showTemplate)

  const getTabBarHeight = computed(() => projectStore.tabBarHeight)

  const getTabBarIcon = computed(() => projectStore.tabBarIcon)

  return {
    getTabBarPosition,
    getNavTheme,
    getInActiveColor,
    getShowTemplate,
    getTabBarHeight,
    getActiveColor,
    getTabBarIcon,
  }
}
