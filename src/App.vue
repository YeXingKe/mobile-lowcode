<script setup lang="ts">
// import { reactive } from 'vue';
import VisualEditor from '@/views/VisualEditor/index.vue'

// const appData = reactive({
//   zIndex: 3000,
//   size: 'small',
// })
</script>

<template>
  <el-config-provider :size="'small'" :z-index="3000">
    <VisualEditor />
  </el-config-provider>
</template>

<style scoped></style>
