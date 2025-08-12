import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import { setupElementPlus } from './plugins/element-plus'
// import { setupVant } from './plugins/vant'

import '@/styles/index.scss'
import 'normalize.css'
import 'virtual:windi.css'
import 'animate.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

// // 使用element-plus插件
// setupElementPlus(app);
// // 使用vant插件
// setupVant(app);

app.config.globalProperties.$$refs = {}

// if (import.meta.env.DEV) {
window.$$refs = app.config.globalProperties.$$refs

app.mount('#app')
