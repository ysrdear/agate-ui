# agate-ui

## 安装

```
npm install agate-ui -S
```

## 使用

### 全局引入

在`main.js`中

```js
import { createApp } from 'vue'
import App from './App.vue'

import AgateUI from 'agate-ui'
import 'agate-ui/lib/style.css'

const app = createApp(App)

app.use(AgateUI).mount('#app')
```

### 按需引入

`main.js`中

```js
import { createApp } from 'vue'
import App from './App.vue'
import { AgHeader } from 'agate-ui'

const app = createApp(App)

app.use(AgHeader).mount('#app')
```

### API

### 分栏 title

#### attribute

| 属性名              | 类型    | 默认值   | 必填  | 可选项                 | 说明         |
| ------------------- | ------- | -------- | ----- | ---------------------- | ------------ |
| text                | String  | -        | √     | -                      | 分栏标题     |
| type                | String  | 'level1' | ×     | 'level1/level2/level3' | 样式类型     |
| toggle              | Boolean | false    | ×     | -                      | 是否可折叠   |
| defaultToggleStatus | Boolean | ×        | false | -                      | 默认是否折叠 |

#### methods

| 方法名 | 参数值               | 说明     |
| ------ | -------------------- | -------- |
| toggle | toggleStatus:boolean | 切换折叠 |

#### slots

| 属性名 | 说明                 |
| ------ | -------------------- |
| tip    | 正文标题旁的附加标题 |
| expand | 右侧扩展内容         |

### 头部 header

#### attribute

| 属性名 | 类型   | 默认值 | 必填 | 可选项 | 说明         |
| ------ | ------ | ------ | ---- | ------ | ------------ |
| logo   | String | -      | ×    | -      | 头部logo     |
| text   | String | -      | √    | -      | 头部标题文字 |

#### methods

| 方法名 | 参数值 | 说明     |
| ------ | ------ | -------- |
| home   | -      | 点击标题 |

#### slots

| 属性名 | 说明         |
| ------ | ------------ |
| center | 头部中间内容 |
| expand | 右侧扩展内容 |

### 色块单选 radio-button

#### attribute

| 属性名     | 类型          | 默认值  | 必填 | 可选项 | 说明                                             |
| ---------- | ------------- | ------- | ---- | ------ | ------------------------------------------------ |
| v-model    | String/Number | -       | √    | -      | 选中值                                           |
| label      | String        | -       | ×    | -      | 色块label值                                      |
| labelWidth | String        | '100px' | ×    | -      | label的宽度                                      |
| preData    | Array         | -       | ×    | -      | 前方固定的数据，通常为全部，不参与后面数据的折行 |
| data       | Array         | -       | ×    | -      | 可选数据                                         |
| labelKey   | String        | 'label' | ×    | -      | 数据中显示的文字key                              |
| valueKey   | String        | 'value' | ×    | -      | 数据中显示的唯一标识，同v-model值                |
