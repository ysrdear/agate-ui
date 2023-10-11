import AgForm from './index.vue'

AgForm.install = function (app) {
    // 组件注册，按需引入
    app.component(AgForm.name, AgForm)
    return app
}

export default AgForm
