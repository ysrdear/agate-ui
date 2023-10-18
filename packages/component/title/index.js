import AgTitle from './index.vue'

AgTitle.install = function (app) {
    // 组件注册，按需引入
    app.component(AgTitle.name, AgTitle)
    return app
}

export default AgTitle
