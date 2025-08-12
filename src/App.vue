<script setup lang="ts">
// import { reactive } from 'vue';
import VisualEditor from '@/views/visual-editor/index.vue'
import { provide } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { initVisualData, injectKey, localKey } from './hooks/useVisualData'
// import { useHistoryDataStore } from './stores/historyData'

const visualData = initVisualData()
/**
 *  父组件里用 provide(key, value) 把数据/方法“放到全局池”，
 *  然后任何后代组件（无论隔多少层）都能用 inject(key) 拿到它，
 *  无需逐层 props 传递
 */
// 注入可视化编辑器所有配置
provide(injectKey, visualData)

const { jsonData } = visualData
// const historyData = useHistoryDataStore()

// 当前页面即将被卸载（关闭、刷新、跳转）时触发。
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem(localKey, JSON.stringify(jsonData))
  // historyData.clear() // 清空快照
})
</script>

<template>
  <el-config-provider :size="'small'" :z-index="3000" :locale="zhCn">
    <VisualEditor />
  </el-config-provider>
</template>

<style scoped></style>
