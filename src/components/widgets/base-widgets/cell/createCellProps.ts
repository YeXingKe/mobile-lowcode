import {  createEditorInputProp, createEditorSelectProp, createEditorSwitchProp } from "@/utils/visual-editor-props"

const cellInternalProps = {
    title: createEditorInputProp({label: '左侧标题',defaultValue: '单元格'}),
    value: createEditorInputProp({label: '右侧内容',defaultValue: ''}),
    label: createEditorInputProp({label: '标题下方的描述信息',defaultValue: ''}),
    size:createEditorInputProp({label: '单元格大小',defaultValue: ''}),
    icon:createEditorInputProp({label: '左侧图标名称或图片链接',defaultValue: ''}),// 等同于 Icon 组件的 name 属性
    iconPrefix:createEditorInputProp({label: '左侧图标名称或图片链接',defaultValue: 'van-icon'}),// 等同于 Icon 组件的 class-prefix 属性
    tag: createEditorInputProp({ label: '根节点对应的 HTML 标签名', defaultValue: 'div' }),
    url: createEditorInputProp({ label: '点击后跳转的链接地址', defaultValue: '' }),
    to: createEditorInputProp({ label: '点击后跳转的目标路由对象', defaultValue: '' }),
    border:createEditorSwitchProp({ label: '是否显示内边框', defaultValue: true }),
    replace:createEditorSwitchProp({ label: '是否在跳转时替换当前页面历史', defaultValue: false }),
    clickable:createEditorSwitchProp({ label: '是否开启点击反馈', defaultValue: false }),
    isLink:createEditorSwitchProp({ label: '是否展示右侧箭头并开启点击反馈', defaultValue: false }),
    required:createEditorSwitchProp({ label: '是否显示表单必填星号', defaultValue: false }),
    center:createEditorSwitchProp({ label: '是否使内容垂直居中', defaultValue: false }),
    arrowDirection:createEditorSelectProp({
        label: '箭头方向',
        options: [
            {
                label: '左',
                value: 'left',
            },
            {
                label: '上',
                value: 'up',
            },
            {
                label: '下',
                value: 'down',
            },
            {
                label: '中',
                value: 'string',
            },
            {
                label: '右',
                value: 'right',
            },
        ],
        defaultValue: 'right',
    }),
    titleStyle:createEditorInputProp({label: '左侧标题额外样式',defaultValue: ''}),
    titleClass:createEditorInputProp({label: '左侧标题额外类名',defaultValue: ''}),
    valueClass:createEditorInputProp({label: '右侧内容额外类名',defaultValue: ''}),
    labelClass:createEditorInputProp({label: '描述信息额外类名',defaultValue: ''}),
}

export const createCellProps = () => ({
  ...cellInternalProps,
})