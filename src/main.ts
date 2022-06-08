import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'
import { setupPlugins } from './plugins'
import 'vant/lib/index.less'
import '@/assets/theme/index.less'
import '@/style/min.less'

async function boot() {
  const app = createApp(App)
  app.use(router).mount('#app')
  // 引入需要的（vant-ui 组件)
  setupPlugins(app)

  // 挂载状态管理
  setupStore(app)
}

boot()
