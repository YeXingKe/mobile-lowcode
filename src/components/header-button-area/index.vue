<template>
    <div class="flex justify-between items-end h-1/1 mb-2">
        <div class="flex items-end h-1/1">
            <el-radio-group v-model="compLayoutType" @change="changeCompLayoutType($event)">
                <el-radio-button label="Single" title="单行布局"></el-radio-button>
                <el-radio-button label="Grid" title="栅格布局"></el-radio-button>
            </el-radio-group>
            <span class="w-1"></span>
            <el-radio-group v-model="screenType" style="display: flex;align-items: end;height: var(--header-height);">
                <el-radio-button label="mobile">mobile</el-radio-button>
                <el-radio-button label="ipad" disabled>ipad</el-radio-button>
                <el-radio-button label="pc">pc</el-radio-button>
            </el-radio-group>
        </div>
        <div class="flex items-end h-1/1 ">
            <TextTip content="撤销">
                <el-button :color="primaryColor" title="撤销">
                    <template #icon>
                        <IconReturn class="cursor-pointer" />
                    </template>
                </el-button>
            </TextTip>
            <span class="w-1"></span>
            <TextTip content="恢复">
                <el-button :color="primaryColor" title="恢复">
                    <template #icon>
                        <IconNext class="cursor-pointer" />
                    </template>
                </el-button>
            </TextTip>
            <span class="w-1"></span>
            <TextTip content="导入JSON">
                <el-button :color="primaryColor" title="导入">
                    <template #icon>
                        <IconImport class="cursor-pointer" />
                    </template>
                </el-button>
            </TextTip>
            <span class="w-1"></span>
            <el-dropdown trigger="hover" @command="handleCommand">
                <el-button :color="primaryColor">
                    <template #icon>
                        <IconExport class="cursor-pointer" />
                    </template>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="code">导出代码</el-dropdown-item>
                        <el-dropdown-item command="json">导出JSON</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span class="w-1"></span>
            <TextTip content="H5预览">
                <el-button :color="primaryColor" :icon="View" style="color: #fff;" title="预览" @click="clickH5Preview" />
            </TextTip>
            <span class="w-1"></span>
            <el-popconfirm width="220" confirm-button-text="确定" cancel-button-text="取消" title="清空的操作不可恢复，确认清空当前编辑页面?"
                @confirm="clearPageElement">
                <template #reference>
                    <TextTip content="清空页面元素">
                        <el-button type="danger" :icon="Delete" title="清空页面元素" />
                    </TextTip>
                </template>
            </el-popconfirm>
        </div>
    </div>
    <H5Preview v-model:visible="isShowH5Preview" />
</template>

<script lang="tsx" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { Delete, View } from '@element-plus/icons-vue';
import H5Preview from '@/components/preview/h5Preview.vue'
import { getCssVariable, setTheme, watchThemeChange } from '@/utils/theme';
import IconExport from '../icons/IconExport.vue';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import { localKey, useVisualData } from '@/hooks/useVisualData';
import { useLayoutTypeStore } from '@/stores/layoutType';
import { LayoutTypeEnum } from '@/enums';
import { useModal } from '@/hooks/useModal';
import CodeEditor from '@/components/code-editor/index.vue'

defineOptions({
    name: 'HeaderButtonArea',
})

const compLayoutType = ref(LayoutTypeEnum.Single)
const { updatePageBlock, jsonData } = useVisualData()
const primaryColor = ref(getCssVariable('--primary-color'))
const { globalProperties } = useGlobalProperties()
// const router = useRouter();

const clearPageElement = () => {
    // 方法一：路由重刷
    // 给组件重新赋值key  
    try {
        console.log(globalProperties.$$refs, 'globalProperties.$$refs')
        globalProperties.$$refs = {}
        sessionStorage.setItem(localKey, '')
        updatePageBlock('/', [])
        // router.replace('/') // 替换当前路由，没历史行迹
    } catch (err) {
        console.error('清空失败:', err);
    }
}

const isShowH5Preview = ref(false);
const clickH5Preview = () => {
    sessionStorage.setItem(localKey, JSON.stringify(jsonData));
    localStorage.setItem(localKey, JSON.stringify(jsonData));
    isShowH5Preview.value = true;
};

const layoutTypeStore = useLayoutTypeStore()
const changeCompLayoutType = (value) => {
    layoutTypeStore.changeLayoutType(value)
}

const handleCommand = (command: string) => {
    let title = command === 'code'?'导出代码':'导出JSON';

    useModal({
        title: title,
        props: {
         width: 750,
        },
        footer: null,
        content: () => (
        <div class= { 'flex justify-center'} >
            <CodeEditor />
        </div>
        ),
   });
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
    padding: 10px;
    font-size: 16px;
}
:deep(.el-button:focus-visible) {
    outline: none;
    // outline-offset: 1px;
    // transition: outline-offset 0s,outline 0s;
}
</style>