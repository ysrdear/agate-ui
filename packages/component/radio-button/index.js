import AgRadioButton from './index.vue'

AgRadioButton.install = function (app) {
    // 组件注册，按需引入
    app.component(AgRadioButton.name, AgRadioButton)
    return app
}

export default AgRadioButton
