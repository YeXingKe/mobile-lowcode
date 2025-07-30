import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    WindiCSS(),
    vueDevTools(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 配置自动引入的组件
      resolvers: [
        // Element Plus 解析器
        ElementPlusResolver({ importStyle: 'sass' }),
        // Vant 解析器
        VantResolver(),
      ],
      // // 自定义组件位置 (可选)
      // dirs: ['src/components'],
      // // 组件名称包含目录 (可选)
      // directoryAsNamespace: false,
      // // 生成类型声明文件 (可选)
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
