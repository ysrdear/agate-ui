import AgHeader from './index.vue'

AgHeader.install = function (app) {
    // 组件注册，按需引入
    app.component(AgHeader.name, AgHeader)
    return app
}

export default AgHeader
