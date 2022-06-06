import { createApp } from 'vue'
import { Tabbar, TabbarItem, Toast, Dialog, Button } from 'vant'
import App from './App.vue'
import router from './router'
// import '@/assets/less/vant.less'
import 'vant/lib/index.less'
// import store from './store'

createApp(App).use(router).use(Tabbar).use(TabbarItem).use(Toast).use(Dialog).use(Button).mount('#app')
