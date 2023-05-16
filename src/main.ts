import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
import router from './router/index.js'

const app = createApp(App)
for (const [key, component] of Object.entries(ElIcons)) {
  app.component(key, component)
}
app.use(element).use(router).mount('#app')
