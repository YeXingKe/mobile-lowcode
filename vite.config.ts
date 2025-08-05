import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

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
  build:{
    cssCodeSplit:true,// 如果设置false，整个项目中的所有css将被提取到一个css文件
    sourcemap:false, // 构建后是否生成source map文件。如果为true，将会创建一个独立的source map文件
    target: 'modules', // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
    chunkSizeWarningLimit: 550, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
    assetsInlineLimit: 4096, // 单位字节（1024等于1kb） 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    minify: 'terser', // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
    terserOptions: {
      
      // compress: {
      //   drop_console: true, // 生产环境去除console
      //   drop_debugger: true, // 生产环境去除debugger
      // },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        preview: resolve(__dirname, 'preview/index.html'),
      },
    },
  },
  optimizeDeps: {
    include: ['@vueuse/core', 'element-plus', 'vant', 'lodash-es', 'vuedraggable'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
