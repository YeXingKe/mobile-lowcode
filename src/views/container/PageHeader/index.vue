<template>
  <el-row type="flex" class="header">
    <el-col :span="6"></el-col>
    <el-col :span="12"></el-col>
    <el-col :span="6" class="flex justify-end w-1/1" style="display: flex">
      <IconGithub class="cursor-pointer" @click="clickGithub" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import pkg from '../../../../package.json'
import IconGithub from '@/components/icons/IconGithub.vue'

defineOptions({
  name: 'PageHeader',
})

const clickGithub = () => {
  window.open(pkg.repository.url, '_blank')
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;

  .logo {
    width: 60px;
    height: 60px;
    // background-image: url('@/assets/logo.png');
    background-repeat: no-repeat;
    background-size: contain;
  }

  .tool-item {
    .title {
      margin-top: 4px;
      font-size: 12px;
    }
  }

  .el-button {
    font-size: 22px;
  }

  .right-tools > * {
    margin-left: 8px;
  }
}
</style>
