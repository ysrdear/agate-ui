const fs = require('fs')
const path = require('path')

var component = process.argv.slice(2)
const cwd = process.cwd()
const templatePath = path.resolve(cwd, 'index.html')

if (!component[0]) {
    console.error('未输入组件名')
    return
} else {
    //对Index.html做处理
    var htmlStr = `<!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>测试页面</title>
        </head>
        <body>
            <div id="app"></div>
            <script type="module" src="./demo/${component[0]}/main.ts"></script>
        </body>
    </html>
    `

    fs.writeFile(templatePath, htmlStr, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('模板替换成功')

            // const vitePath = path.resolve(__dirname, 'node_modules', '.bin', 'vite')
            // const viteProcess = spawn(vitePath)

            // // const viteProcess = spawn('npm run serve')

            // viteProcess.stdout.on('data', data => {
            //     console.log(data.toString())
            // })

            // viteProcess.stderr.on('data', data => {
            //     console.error(data.toString())
            // })

            // viteProcess.on('error', error => {
            //     console.error(`启动 Vite 失败：${error.message}`)
            // })

            // viteProcess.on('close', code => {
            //     console.log(`Vite 进程退出，退出码：${code}`)
            // })
        }
    })
}
