import { NAV_THEME, TABBAR_MODE } from '@/enums/tabBar'

export interface IMentaType {
  title: string
  icon: string
}

export interface ITabBarType {
  path: string
  name: string
  component: any
  menta: IMentaType
}
export interface ITemplate {
  width: string
  // left: string
  // bottom: string,
  // right: string,
  height: string
  position: string
}
export interface ITabBarSetType {
  /** 未选中tabBar标签的颜色 */
  inActiveColor?: string
  /** 选中tabBar标签的颜色 */
  activeColor?: string
  /** tabBar高度 */
  tabBarHeight?: string
  /** 自定义图标 */
  tabBarIcon?: string
  /** 悬浮设置按钮 */
  suspendBtn?: boolean
  /** 自定义模板 */
  showTemplate?: ITemplate
  /** tabBar位置(上/下) */
  tabBarPosition?: TABBAR_MODE
  /** 主题色 */
  navTheme?: NAV_THEME
  /** tabBar间距 */
}
