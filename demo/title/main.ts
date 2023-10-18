import { createApp } from 'vue'
import App from './App.vue'
// 完整引入组件库
import Agate from '../../packages/index'

const app = createApp(App)

app.use(Agate).mount('#app')
