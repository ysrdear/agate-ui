
import AgTag from './index.vue'


AgTag.install = function (app) {
    // 组件注册，按需引入
    app.component( AgTag.name,  AgTag)
    return app
}

export default AgTag;