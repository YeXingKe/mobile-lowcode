// import './assets/main.css'
import 'element-plus/theme-chalk/index.css'
import 'vant/lib/index.css'
import '@/styles/index.scss'
import 'normalize.css'
import 'virtual:windi.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.globalProperties.$$refs = {}

// if (import.meta.env.DEV) {
window.$$refs = app.config.globalProperties.$$refs

app.mount('#app')
