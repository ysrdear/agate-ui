import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

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
        plugins: [vue({ include: [/\.vue$/, /\.md$/] }), vueJsx()]
    })
}
