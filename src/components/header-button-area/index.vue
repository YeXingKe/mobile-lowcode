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
        <el-button :color="primaryColor" :icon="View" style="color: #fff;" title="预览"/>
        <span class="w-1"></span>
        <el-button type="danger" :icon="Delete" title="查看"/>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { Delete, View } from '@element-plus/icons-vue';
import IconReturn from '../icons/IconReturn.vue';
import IconNext from '../icons/IconNext.vue';
import { getCssVariable, watchThemeChange } from '@/utils/theme';
import IconExport from '../icons/IconExport.vue';

defineOptions({
    name: 'HeaderButtonArea',
})

const primaryColor = ref('#228be6')


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