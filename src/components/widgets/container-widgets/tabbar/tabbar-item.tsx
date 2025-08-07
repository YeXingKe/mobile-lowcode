import type { VisualEditorComponent } from "@/utils/visual-editor";
import { createEditorInputProp, createEditorSwitchProp } from "@/utils/visual-editor-props";

export const getTabbarItem = (): VisualEditorComponent => ({
  key: 'tabbar-item',
  moduleName: 'containerWidgets',
  label: '底部标签栏',
  preview: () => <></>,
  render: () => () => <></>,
  props: {
    icon: createEditorInputProp({ label: '图标名称或图片链接', defaultValue: 'home-o' }),
    iconPrefix: createEditorInputProp({
      label: '图标类名前缀',
      tips: '图标类名前缀，同 Icon 组件的 class-prefix 属性',
      defaultValue: 'van-icon',
    }),
    dot: createEditorSwitchProp({ label: '是否显示图标右上角小红点', defaultValue: false }),
    badge: createEditorInputProp({ label: '图标右上角徽标的内容', defaultValue: '' }),
    url: createEditorInputProp({ label: '点击后跳转的链接地址', defaultValue: '' }),
    replace: createEditorSwitchProp({ label: '是否在跳转时替换当前页面历史', defaultValue: false }),
  },
  events: [
    { label: '点击左侧按钮时触发', value: 'click-left' },
    { label: '点击右侧按钮时触发', value: 'click-right' },
  ],
  draggable: false,
});
