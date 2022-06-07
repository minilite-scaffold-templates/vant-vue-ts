import { defineStore } from 'pinia'
import { store } from '@/store'
import projectSetting from '@/settings/projectSetting'
import { NAV_THEME, TABBAR_MODE } from '@/enums/tabBar'
// import { ITabBarSetType } from '@/components/tabBar/type'

interface ProjectSettingState {
  tabBarPosition: TABBAR_MODE // 导航模式
  navTheme: NAV_THEME // 导航主题
  inActiveColor: string
  activeColor: string
  tabBarHeight: string
  showTemplate: any
  tabBarIcon: string
}

const { inActiveColor, activeColor, tabBarHeight, tabBarPosition, showTemplate, tabBarIcon, navTheme } = projectSetting

const useProjectSettingStore = defineStore({
  id: 'app-project-setting',
  state: (): ProjectSettingState => ({
    inActiveColor,
    activeColor,
    tabBarHeight,
    tabBarPosition,
    showTemplate,
    navTheme,
    tabBarIcon,
  }),
  getters: {
    getInActiveColor(): string {
      return this.inActiveColor
    },
    getActiveColor(): string {
      return this.activeColor
    },
    getTabBarHeight(): string {
      return this.tabBarHeight
    },
    getShowTemplate(): string {
      return this.showTemplate
    },
    getTabBarPosition(): string {
      return this.tabBarPosition
    },
    getNavTheme(): NAV_THEME {
      return this.navTheme
    },
    getTabBarIcon(): string {
      return this.tabBarIcon
    },
  },
  actions: {
    setTabBarPosition(value: TABBAR_MODE): void {
      this.tabBarPosition = value
    },

    setNavTheme(value: NAV_THEME): void {
      this.navTheme = value
    },

    setInActiveColor(value: string) {
      this.inActiveColor = value
    },

    setActiveColor(value: string) {
      this.activeColor = value
    },

    setShowTemplate(value: any) {
      this.showTemplate = value
    },

    setTabBarHeight(value: string) {
      this.tabBarHeight = value
    },
    setTabBarIcon(value: string) {
      this.tabBarIcon = value
    },
  },
})

export default useProjectSettingStore

// Need to be used outside the setup
export function useProjectSettingStoreWithOut() {
  return useProjectSettingStore(store)
}
