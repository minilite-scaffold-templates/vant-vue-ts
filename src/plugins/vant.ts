import { App } from 'vue'
import {
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  NavBar,
  Icon,
  Sticky,
  Card,
  Sidebar,
  SidebarItem,
  Popup,
  ConfigProvider,
  Image as VanImage,
  Lazyload,
} from 'vant'

const plugins = [
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  NavBar,
  Icon,
  Sticky,
  Card,
  Sidebar,
  SidebarItem,
  Popup,
  ConfigProvider,
  Lazyload,
  VanImage,
]

export const vantPlugins = {
  install(app: App) {
    plugins.forEach((item) => {
      app.use(item)
    })
  },
}
