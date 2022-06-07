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
  Field,
  CellGroup,
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
  Field,
  CellGroup,
]

export const vantPlugins = {
  install(app: App) {
    plugins.forEach((item) => {
      app.use(item)
    })
  },
}
