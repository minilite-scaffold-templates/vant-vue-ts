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
  position: string
}
export interface ITabBarSetType {
  /** 未选中tabBar标签的颜色 */
  inActiveColor: string
  /** 选中tabBar标签的颜色 */
  activeColor: string
  /** tabBar高度 */
  tabBarHeight: string
  /** 自定义图标 */
  tabBarIcon: string
  /** 悬浮设置按钮 */
  suspendBtn: boolean
  /** 自定义模板 */
  showTemplate?: ITemplate
  /** tabBar位置(上/下) */
  tabBarPosition: string
  /** tabBar间距 */
}
export const heightList = [
  {
    name: 'small',
    value: '60px',
  },
  {
    name: 'middle',
    value: '70px',
  },
  {
    name: 'large',
    value: '80px',
  },
]
