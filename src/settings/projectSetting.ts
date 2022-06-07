import { NAV_THEME, TABBAR_MODE } from '@/enums/tabBar'
// import { ITabBarSetType } from '@/components/tabBar/type'

const setting = {
  /** 未选中tabBar标签的颜色 */
  inActiveColor: '#000000',
  /** 选中tabBar标签的颜色 */
  activeColor: 'red',
  /** tabBar高度 */
  tabBarHeight: 'middle',
  /** 自定义图标 */
  tabBarIcon: '',
  /** 悬浮设置按钮 */
  suspendBtn: false,
  /** 自定义模板 */
  showTemplate: undefined,
  /** tabBar位置(上/下) */
  tabBarPosition: TABBAR_MODE.TOP,
  // 导航主题
  navTheme: NAV_THEME.LIGHT,
}
export default setting

// const tabBarParam = ref<ITabBarSetType>({
//   inActiveColor: '#000000',
//   activeColor: 'red',
//   tabBarHeight: 'middle',
//   tabBarPosition: 'bottom',
//   // showTemplate: {
//   //   position: 'right',
//   //   width: '30%',
//   //   height: '300px',
//   // },

// })
