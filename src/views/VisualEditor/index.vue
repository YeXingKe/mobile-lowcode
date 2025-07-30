<template>
  <el-container>
    <el-header height="80px" class="flex items-center shadow-md">
      <PageHeader />
    </el-header>
    <el-container class="layout-container">
      <el-aside class="shadow-sm" width="380px">
        <LeftAside />
      </el-aside>
      <el-main>
        <SimulatorEditor />
        <RightAside />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import LeftAside from '@/views/container/LeftAside/index.vue'
import PageHeader from '@/views/container/PageHeader/index.vue'
import SimulatorEditor from '@/views/container/SimulatorEditor/index.vue'
import RightAside from '@/views/container/RightAside'
defineOptions({
  name: 'VisualEditor', // Vue 3.3+ 支持
})
</script>

<style lang="scss" scoped>
.el-header {
  height: var(--header-height);
}
.el-header,
.el-footer {
  position: relative;
  z-index: 99;
  background-color: white;
}

.el-aside {
  background-color: white;
}

.layout-container {
  height: calc(100vh - var(--header-height));
}

.el-main {
  position: relative;
  padding: 12px;
  background-color: #f5f5f5;
  @media (min-width: 1111px) {
    overflow-x: hidden;
  }
}
</style>
