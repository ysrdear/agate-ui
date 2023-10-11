import { App } from 'vue'
// 所有组件
export * from './component/index'
import components from './component/index'
import './component/theme-default/index.scss'

// 完整引入组件
const install = function (app: App) {
    components.forEach(component => {
        app.use(component as unknown as { install: () => any })
    })
}

export default {
    install
}
