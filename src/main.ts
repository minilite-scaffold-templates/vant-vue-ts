import { createApp } from 'vue'
import { Tabbar, TabbarItem, Button } from 'vant'
import App from './App.vue'
import router from './router'
// import '@/assets/less/vant.less'
import 'vant/lib/index.less'
// import store from './store'

createApp(App).use(router).use(Tabbar).use(TabbarItem).use(Button).mount('#app')
