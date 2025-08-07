
import { onBeforeUnmount, onMounted } from 'vue';
import { NavBar } from 'vant';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import { createEditorInputProp, createEditorSwitchProp } from '@/utils/visual-editor-props';
import type { VisualEditorComponent } from '@/utils';

export default {
  key: 'nav-bar',
  moduleName: 'containerWidgets',
  label: '顶部导航栏',
  preview: () => (
    <NavBar title="标题" left-text="返回" right-text="按钮" left-arrow style={{ width: '100%' }} />
  ),
  render: ({ props, block }) => {
    const { registerRef } = useGlobalProperties();

    onMounted(() => {
      const compEl = window.$$refs[block._vid]?.$el;
      const draggableEl = compEl?.closest('div[data-draggable]');// 从 compEl 元素开始，向上查找最近的带有 data-draggable 属性的 <div> 元素
      const navbarEl = draggableEl?.querySelector('.van-nav-bar--fixed') as HTMLDivElement;// 在 draggableEl 内部查找一个类名为 van-nav-bar--fixed 的导航栏元素
      const dragArea = document.querySelector(
        '.simulator-editor-content > .dragArea ',
      ) as HTMLDivElement;// 查找页面中类名为 simulator-editor-content 的子元素 .dragArea
      if (draggableEl && navbarEl && dragArea) {
        navbarEl.style.position = 'unset';// 移除导航栏的 fixed 定位
        draggableEl.style.position = 'fixed';
        draggableEl.style.top = '0';
        draggableEl.style.left = '0';
        draggableEl.style.width = '100%';
        dragArea.style.paddingTop = '50px';
      } else {
        document.body.style.paddingTop = '46px';
        const slotEl = compEl?.closest('__slot-item');
        if (slotEl) {
          slotEl.style.position = 'fixed';
          slotEl.style.bottom = '0';
        }
      }
    });

    onBeforeUnmount(() => {
      const dragArea = document.querySelector(
        '.simulator-editor-content > .dragArea ',
      ) as HTMLDivElement;
      if (dragArea) {
        dragArea.style.paddingTop = '';
      }
    });

    return () => <NavBar ref={(el) => registerRef(el, block._vid)} {...props} />;
  },
  props: {
    title: createEditorInputProp({ label: '标题', defaultValue: '标题' }),
    fixed: createEditorSwitchProp({ label: '是否固定', defaultValue: true }),
    zIndex: createEditorInputProp({ label: 'z-index' }),
    border: createEditorSwitchProp({ label: '是否显示下边框', defaultValue: false }),
    leftText: createEditorInputProp({ label: '左侧文案', defaultValue: '返回' }),
    rightText: createEditorInputProp({ label: '右侧文案', defaultValue: '按钮' }),
    leftArrow: createEditorSwitchProp({ label: '是否显示左侧箭头', defaultValue: true }),
  },
  events: [
    { label: '点击左侧按钮时触发', value: 'click-left' },
    { label: '点击右侧按钮时触发', value: 'click-right' },
  ],
  showStyleConfig: false,
  draggable: false,
  resize: {
    width: true,
  },
} as VisualEditorComponent;
