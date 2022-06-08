import { NAV_THEME, TABBAR_MODE } from '@/enums/tabBar'
import theme from '@/style/theme.module.less'

const tabrBarTheme = { ...theme }
const { inActiveColor = '', activeColor = '' } = tabrBarTheme

const templateParams = {
  position: 'right',
  width: '30%',
  height: '300px',
}
const setting = {
  /** 未选中tabBar标签的颜色 */
  inActiveColor,
  /** 选中tabBar标签的颜色 */
  activeColor,
  /** tabBar高度 */
  tabBarHeight: 'middle',
  /** 自定义图标 */
  tabBarIcon: '',
  /** 悬浮设置按钮 */
  suspendBtn: false,
  /** 自定义模板 */
  showTemplate: '',
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
