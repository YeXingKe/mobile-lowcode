<template>
  <el-row type="flex" class="header">
    <el-col :span="4" class="flex">
      <div class="flex items-center h-1/1">
        <IconMason />
        <p class="ml-2 flex items-center">Mobile LowCode</p>
      </div>
    </el-col>
    <el-col :span="16" class="h-1/1">
      <header-button-area />
    </el-col>
    <el-col :span="4">
      <div class="flex justify-end items-center h-1/1">
        <el-popover placement="bottom" :width="165" trigger="hover">
          <el-button v-for="item in themeList" :key="item.className" :color="item.color"
            @click="changeTheme(item.className)" :title="item.label" style="margin: 0;margin: 5px;"></el-button>
          <template #reference>
            <IconTheme class="cursor-pointer" title="主题切换" />
          </template>
        </el-popover>
        <TextTip content="真机预览">
          <!-- <IconRun class="cursor-pointer ml-2" @click="clickRun" /> -->
          <IconMobile class="cursor-pointer ml-2" @click="clickRun" />
        </TextTip>
        <TextTip content="github仓库">
          <IconGithub class="cursor-pointer ml-2" @click="clickGithub" />
        </TextTip>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="tsx" setup>
import HeaderButtonArea from '@/components/header-button-area/index.vue'
// import IconRun from '@/components/icons/IconRun.vue'
import { useQRCode } from '@vueuse/integrations/useQRCode.mjs';
import pkg from '../../../../package.json'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconTheme from '@/components/icons/IconTheme.vue'
import { reactive, ref } from 'vue'
import IconMason from '@/components/icons/IconMason.vue'
import { setTheme } from '@/utils/theme'
import { useModal } from '@/hooks/useModal';

defineOptions({
  name: 'PageHeader',
})

const themeList = reactive([
  { className: 'default', label: '默认', color: '#228be6' },
  // { className: 'dark', label: '暗黑', color: '#212529' },
  // { className: 'light', label: '明亮', color: '#228be6' },
  { className: 'orange', label: '橙意', color: '#ff922b' },
  { className: 'green', label: '清新', color: '#2b8a3e' },
  { className: 'pink', label: '鲜艳', color: '#d6336c' },
  { className: 'violet', label: '淡雅', color: '#5f3dc4' },
  { className: 'blue', label: '清幽', color: '#4c6ef5' },
])

const currentTheme = ref('default');

// 设置主题
const changeTheme = (theme) => {
  setTheme(theme)
  currentTheme.value = theme;
};

changeTheme(localStorage.getItem('theme') || 'default');

const clickRun = () => {
  const qrcode = useQRCode(`${location.origin}/preview`);
  
  useModal({
    title: '预览二维码',
    props: {
      width: 300,
    },
    footer: null,
    content: () => (
      <div class= { 'flex justify-center'} >
      <img width={ 220} height = { 220} src = { qrcode.value } />
      </div>
     ),
  });
}

const clickGithub = () => {
  window.open(pkg.repository.url, '_blank')
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;

  :deep(.el-button+.el-button) {
    margin: 0 !important;
  }

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

  .right-tools>* {
    margin-left: 8px;
  }
}
</style>
