<template>
    <div class="flex justify-end items-end h-1/1 mb-2">
        <el-radio-group v-model="screenType" style="display: flex;align-items: end;height: var(--header-height);">
            <el-radio-button label="mobile">mobile</el-radio-button>
            <el-radio-button label="ipad" disabled>ipad</el-radio-button>
            <el-radio-button label="pc">pc</el-radio-button>
        </el-radio-group>
        <span class="w-1"></span>
        <el-button :color="primaryColor" title="撤销">
            <template #icon>
                <IconReturn class="cursor-pointer" />
            </template>
        </el-button>
        <span class="w-1"></span>
        <el-button :color="primaryColor" title="恢复">
            <template #icon>
                <IconNext class="cursor-pointer" />
            </template>
        </el-button>
        <span class="w-1"></span>
        <el-button :color="primaryColor" title="导出">
            <template #icon>
                <IconExport class="cursor-pointer" />
            </template>
        </el-button>
        <span class="w-1"></span>
        <el-button :color="primaryColor" :icon="View" style="color: #fff;" title="预览" />
        <span class="w-1"></span>
        <el-popconfirm width="220" confirm-button-text="确定" cancel-button-text="取消"
            title="清空的操作不可恢复，确认清空当前编辑页面?">
            <template #reference>
                <!-- 阻止冒泡 -->
                <el-button type="danger" :icon="Delete" title="清空" @click.stop="clearPageElement" />
            </template>
        </el-popconfirm>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { Delete, View } from '@element-plus/icons-vue';
import IconReturn from '../icons/IconReturn.vue';
import IconNext from '../icons/IconNext.vue';
import { getCssVariable, watchThemeChange } from '@/utils/theme';
import IconExport from '../icons/IconExport.vue';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import { localKey, useVisualData } from '@/hooks/useVisualData';
import { useRouter } from 'vue-router';

defineOptions({
    name: 'HeaderButtonArea',
})

const { updatePageBlock } = useVisualData()
const primaryColor = ref('#228be6')
const { globalProperties } = useGlobalProperties()
// const router = useRouter();

const clearPageElement = () => {
  // 方法一：路由重刷
  // 给组件重新赋值key  
  try {
    console.log(globalProperties.$$refs, 'globalProperties.$$refs')
    globalProperties.$$refs = {}
    sessionStorage.setItem(localKey,'')
    updatePageBlock('/',[])
    // router.replace('/') // 替换当前路由，没历史行迹
  } catch (err) {
    console.error('清空失败:', err);
  }
}
// 初始化主题
onMounted(() => {
    // 启动监听
    const observer = watchThemeChange((theme) => {
        primaryColor.value = getCssVariable('--primary-color');
    });

    // 组件卸载时断开监听（避免内存泄漏）
    onUnmounted(() => observer.disconnect());
});
const screenType = ref('mobile')
</script>

<style lang="scss" scoped>
:deep(.el-button) {
    padding: 5px;
}
</style>