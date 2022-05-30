import { createApp } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import App from './App.vue'
import router from './router'

// import store from './store'

createApp(App).use(router).use(Tabbar).use(TabbarItem).mount('#app')
