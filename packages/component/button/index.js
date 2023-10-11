import AgButton from './index.vue'

AgButton.install = function (app) {
    // 组件注册，按需引入
    app.component(AgButton.name, AgButton)
    return app
}

export default AgButton
