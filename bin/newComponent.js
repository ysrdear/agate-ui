const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)[0]
const cwd = process.cwd()

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const folderPath = path.resolve(cwd, 'packages/component', args)
const themePath = path.resolve(cwd, 'packages/component/theme-default')
const jsIndexPath = path.resolve(cwd, 'packages/component/index.js')
const cssIndexPath = path.resolve(cwd, 'packages/component/theme-default/index.scss')

const jsContent = `
import Ag${capitalizeFirstLetter(args)} from './index.vue'


Ag${capitalizeFirstLetter(args)}.install = function (app) {
    // 组件注册，按需引入
    app.component( Ag${capitalizeFirstLetter(args)}.name,  Ag${capitalizeFirstLetter(args)})
    return app
}

export default Ag${capitalizeFirstLetter(args)};`

const vueContent = `
<template>
    <div></div>
</template>
<script lang="ts">
</script>
`

//生成文件夹
fs.mkdir(folderPath, err => {
    if (err) {
        console.error(err)
    } else {
        //生成js / vue / scss文件
        fs.writeFile(path.resolve(folderPath, 'index.js'), jsContent, err => {
            if (err) {
                console.error(err)
            } else {
                fs.writeFile(path.resolve(folderPath, 'index.vue'), vueContent, err => {
                    if (err) {
                        console.error(err)
                    } else {
                        fs.writeFile(path.resolve(themePath, `${args}.scss`), ``, err => {
                            if (err) {
                                console.error(err)
                            } else {
                                console.log('组件生成成功！')

                                //更新index.js，index.scss

                                // fs.readFile(jsIndexPath, 'utf-8', (err, data) => {
                                //     if (err) {
                                //         console.error('Error reading the file:', err);
                                //         return;
                                //     }

                                //     data+= `\n import "./${args}/index.js" `

                                //     fs.writeFile(jsIndexPath, data ,()=>{

                                //
                                fs.readFile(cssIndexPath, 'utf-8', (err, data) => {
                                    if (err) {
                                        console.error('Error reading the file:', err)
                                        return
                                    }

                                    data += `\n @import "./${args}.scss";`

                                    fs.writeFile(cssIndexPath, data, () => {
                                        //

                                        console.log('组件写入成功！')
                                    })
                                })

                                //     })

                                // })
                            }
                        })
                    }
                })
            }
        })
    }
})
