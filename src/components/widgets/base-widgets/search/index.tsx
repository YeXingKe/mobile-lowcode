import { useGlobalProperties } from "@/hooks/useGlobalProperties";
import { Search } from "vant";
import { createSearchProps } from "./createSearchProps";

export default {
    key: 'search',
    moduleName: 'baseWidgets',
    label: '搜索框',
    preview: () => (
     <Search placeholder="请输入搜索关键词"/>
    ),
    render: ({ styles, block, props }) => {
        const { registerRef } = useGlobalProperties()
        return () => (
            <div style={styles}>
                <Search                         
                    ref={(el) => registerRef(el, block._vid)}
                    {...props}
                    v-model={props.modelValue}
                    style="width:100%;"
                />
            </div>
        )
    },
    props: {
        ...createSearchProps()
    },
    events: [
        { label: '确定搜索时触发', value: 'search' },
        { label: '输入框内容变化时触发', value: 'update:model-value' },
        { label: '输入框获得焦点时触发', value: 'focus' },
        { label: '输入框失去焦点时触发', value: 'blur' },
        { label: '点击输入区域时触发', value: 'clickInput' },
        { label: '点击左侧图标时触发', value: 'clickLeftIcon' },
        { label: '点击右侧图标时触发', value: 'clickRightIcon' },
        { label: '点击清除按钮后触发', value: 'clear' },
        { label: '点击取消按钮时触发', value: 'cancel' },
    ],
    resize: {
        width: true,
    },
    model: {
        default: '绑定字段',
    },
}