<script setup lang="ts">
// import { reactive } from 'vue';
import VisualEditor from '@/views/visual-editor/index.vue'
import { provide } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { initVisualData, injectKey, localKey } from './hooks/useVisualData'

const visualData = initVisualData()
// 注入可视化编辑器所有配置
provide(injectKey, visualData)

const { jsonData } = visualData

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem(localKey, JSON.stringify(jsonData))
})
</script>

<template>
  <el-config-provider :size="'small'" :z-index="3000" :locale="zhCn">
    <VisualEditor />
  </el-config-provider>
</template>

<style scoped></style>
