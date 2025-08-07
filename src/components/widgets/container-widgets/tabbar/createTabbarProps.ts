import { createEditorCrossSortableProp, createEditorInputProp, createEditorSwitchProp } from "@/utils/visual-editor-props"

const tabbarInternalProps = {
    modelValue: createEditorInputProp({label: '默认值',defaultValue: ''}),
    baseUrl: createEditorInputProp({ label: '路由路径前缀', defaultValue: '/preview/#/' }),
    fixed: createEditorSwitchProp({label: '是否固定在底部',defaultValue: true}),
    border: createEditorSwitchProp({label: '是否显示外边框',defaultValue: true}),
    zIndex:createEditorInputProp({label: '元素 z-index',defaultValue: 1}),
    activeColor:createEditorInputProp({label: '选中标签的颜色',defaultValue: '#1989fa'}),
    inactiveColor:createEditorInputProp({label: '未选中标签的颜色',defaultValue: '#7d7e80'}),
    route: createEditorSwitchProp({label: '是否开启路由模式',defaultValue: false}),
    placeholder:createEditorSwitchProp({label: '是否在标签位置生成一个等高的占位元素',defaultValue: false}),
    safeAreaInsetBottom:createEditorSwitchProp({label: '是否开启底部安全区适配',defaultValue: false}),
}

export const createTabbarProps = () => ({
  ...tabbarInternalProps,
})