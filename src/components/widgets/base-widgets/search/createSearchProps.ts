import { createEditorColorProp, createEditorInputNumberProp, createEditorInputProp, createEditorSelectProp, createEditorSwitchProp } from "@/utils/visual-editor-props";


const searchInternalProps = {
    modelValue: createEditorInputProp({ label: '当前值', defaultValue: '' }),
    label:createEditorInputProp({ label: '搜索框左侧文本', defaultValue: '' }),
    name:createEditorInputProp({ label: '名称，作为提交表单时的标识符', defaultValue: '' }),
    shape: createEditorSelectProp({
        label: '搜索框形状',
        options: [
            {
                label: 'round',
                value: 'round',
            },
            {
                label: 'square',
                value: 'square',
            },
        ],
        defaultValue: 'square',
    }),
    id: createEditorInputProp({ label: '搜索框 id', defaultValue: 'van-search-n-input' }),
    background: createEditorColorProp({ label: '搜索框外部背景色', defaultValue: '#f2f2f2' }),
    maxlength:createEditorInputNumberProp({ label: '输入的最大字符数', defaultValue: '' }),
    placeholder: createEditorInputProp({ label: '占位提示文字', defaultValue: '请输入搜索关键词' }),
    clearable: createEditorSwitchProp({ label: '是否启用清除图标', defaultValue: true }),
    clearIcon: createEditorInputProp({ label: '清除图标名称或图片链接', defaultValue: 'clear' }),
    clearTrigger: createEditorInputProp({ label: '显示清除图标的时机', defaultValue: 'focus' }),
    autofocus: createEditorSwitchProp({ label: '是否自动聚焦', defaultValue: false }),
    showAction: createEditorSwitchProp({ label: '是否在搜索框右侧显示取消按钮', defaultValue: false }),
    actionText: createEditorInputProp({ label: '取消按钮文字', defaultValue: '取消' }),
    disabled: createEditorSwitchProp({ label: '是否禁用输入框', defaultValue: false }),
    readonly: createEditorSwitchProp({ label: '是否将输入框设为只读状态', defaultValue: false }),
    error:createEditorSwitchProp({ label: '是否将输入内容标红', defaultValue: false }),
    errorMessage:createEditorInputProp({ label: 'nput 标签原生的自动完成属性', defaultValue: '' }),
    // formatter:输入内容格式化函数
    // format-trigger 格式化函数触发的时机，可选值为
    inputAlign:createEditorSelectProp({
        label: '搜索框形状',
        options: [
            {
                label: 'left',
                value: 'left',
            },
            {
                label: 'center',
                value: 'center',
            },
            {
                label: 'right',
                value: 'right',
            },
        ],
        defaultValue: 'left',
    }),
    leftIcon:createEditorInputProp({ label: '输入框左侧图标名称或图片链接', defaultValue: 'search' }),
    rightIcon:createEditorInputProp({ label: '输入框右侧图标名称或图片链接', defaultValue: '' }),
    autocomplete:createEditorInputProp({ label: '输入框右侧图标名称或图片链接', defaultValue: '' }),
}

export const createSearchProps = () => ({
    ...searchInternalProps,
})