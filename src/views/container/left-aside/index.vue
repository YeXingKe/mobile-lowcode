<template>
  <el-tabs v-model="activeName" tab-position="left" class="left-aside">
    <template v-for="tab in tabs" :key="tab.name">
      <el-tab-pane :name="tab.name" lazy>
        <template #label>
          <div class="tab-item">
            <el-icon :size="26"><component :is="tab.icon" /></el-icon>
            {{ tab.label }}
          </div>
        </template>
        <component :is="tab.comp" v-bind="$attrs" />
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script lang="ts" setup>
import LeftComponents from '@/components/left-comp'
import { ref } from 'vue'

defineOptions({
  name: 'LeftAside', // Vue 3.3+ 支持
})
const tabs = Object.entries(LeftComponents)
  .map(([name, component]) => {
    const { label, icon, order } = component
    return { label, icon, name, order, comp: component }
  })
  .sort((a, b) => a.order - b.order)

const activeName = ref(tabs[0].name)
</script>

<style lang="scss" scoped>
.left-aside {
  height: 100%;
  contain: layout;

  > :deep(.el-tabs__header) {
    margin-right: 0;

    .el-tabs__item {
      height: 80px;
      padding: 20px 16px;

      .tab-item {
        @apply flex flex-col items-center justify-center;

        [class^='el-icon-'] {
          font-size: 20px;
        }
      }
    }
  }

  > :deep(.el-tabs__content) {
    height: 100%;
    overflow-y: auto;
  }
}
</style>
