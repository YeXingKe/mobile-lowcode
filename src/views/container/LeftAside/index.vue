<template>
    <el-tabs tab-position="left" class="left-aside">
      <template></template>
    </el-tabs>
</template>

<script lang="ts" setup>
import LeftComponents from '@/components/leftComponent'

defineOptions({
  name: 'LeftAside' // Vue 3.3+ 支持
})
const tabs = Object.entries(LeftComponents)
console.log(tabs,'--------tabs')
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