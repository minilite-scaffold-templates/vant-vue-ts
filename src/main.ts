import { createApp } from 'vue'
import { Tabbar, TabbarItem, Toast, Dialog } from 'vant'
import App from './App.vue'
import router from './router'

// import store from './store'

createApp(App).use(router).use(Tabbar).use(TabbarItem).use(Toast).use(Dialog).mount('#app')
