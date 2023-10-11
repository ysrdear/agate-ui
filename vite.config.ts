import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// import Markdown from "vite-plugin-md"; // vue中使用md
// // 提取ts文件
// import dts from "vite-plugin-dts";
//
// import VitePluginMetaEnv from "vite-plugin-meta-env";

const fileName = 'agate'

export default () => {
    return defineConfig({
        server: {
            //open: true,
            port: 3003,
            host: true
        },
        build: {
            outDir: 'dist',
            lib: {
                entry: resolve(__dirname, './packages/index.ts'),
                name: 'Agate',
                fileName: fileName
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    globals: {
                        vue: 'Vue'
                    }
                }
            }
        },
        plugins: [
            vue({ include: [/\.vue$/, /\.md$/] }),
            vueJsx()

            // Markdown(),
            // dts(),
            // // 环境变量
            // VitePluginMetaEnv(metaEnv, "import.meta.env"),
            // VitePluginMetaEnv(metaEnv, "process.env"),
        ]
    })
}
