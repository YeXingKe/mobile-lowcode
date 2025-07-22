import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver,VantResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 配置自动引入的组件
      resolvers: [
        // Element Plus 解析器
        ElementPlusResolver({importStyle: 'sass'}),
        // Vant 解析器
        VantResolver()
      ],
      // // 自定义组件位置 (可选)
      // dirs: ['src/components'],
      // // 组件名称包含目录 (可选)
      // directoryAsNamespace: false,
      // // 生成类型声明文件 (可选)
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
