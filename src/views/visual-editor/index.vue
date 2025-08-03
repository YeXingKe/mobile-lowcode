<template>
  <el-container class="lowcode-container">
    <el-header height="80px" class="flex items-center shadow-md">
      <PageHeader />
    </el-header>
    <el-container class="layout-container">
      <el-aside class="shadow-sm" width="380px">
        <LeftAside />
      </el-aside>
      <el-main>
        <SimulatorEditor :key="componentKey"/>
        <RightAside />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import LeftAside from '@/views/container/left-aside/index.vue'
import PageHeader from '@/views/container/page-header/index.vue'
import SimulatorEditor from '@/views/container/simulator-editor/index.vue'
import RightAside from '@/views/container/right-aside'
import { ref, watch } from 'vue'
import { generateNanoid } from '@/utils'
import { useVisualData } from '@/hooks/useVisualData'

defineOptions({
  name: 'VisualEditor', // Vue 3.3+ 支持
})
const componentKey = ref(generateNanoid());
const { currentPage } = useVisualData()
watch(()=>currentPage.value,(val)=>{
  // 重新赋值key，重刷组件
  if(!Object.keys(val.blocks).length){
    componentKey.value = generateNanoid()
  }
},{ deep: true } )
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
