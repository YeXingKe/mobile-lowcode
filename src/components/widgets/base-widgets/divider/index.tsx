import {  Divider, NoticeBar } from 'vant';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import {  createEditorColorProp, createEditorInputProp,  createEditorSelectProp,  createEditorSwitchProp } from '@/utils/visual-editor-props';
import type { VisualEditorComponent } from '@/utils';
import { computed } from 'vue';


export default {
  key: 'divider',
  moduleName: 'baseWidgets',
  label: '通知栏',
  preview: () => (
    <Divider style="width:190px">文本</Divider>
  ),
  render: ({ styles, block, props }) => {
    const { registerRef } = useGlobalProperties();

    const style = computed(() => ({
        width: '100%',
        color: props['text-color'],
        borderColor: props['divider-color'],
      }));
  
      return () => (
        <div style={styles}>
          <Divider ref={(el) => registerRef(el, block._vid)} {...props} style={style.value}>
            {{
              default: () => props.text,
            }}
          </Divider>
        </div>
      );
  },
  props: {
    text:createEditorInputProp({label: '内容',defaultValue: '文本',}),
    'content-position': createEditorSelectProp({
        label: '文本位置',
        options: [
          { label: '左边', value: 'left' },
          { label: '中间', value: 'center' },
          { label: '右边', value: 'right' },
        ],
        defaultValue: 'center',
      }),
    'text-color': createEditorColorProp({ label: '文本颜色' }),
    'divider-color': createEditorColorProp({ label: '分割线颜色' }),
    dashed:createEditorSwitchProp({label: '是否使用虚线',defaultValue: false,}),
    hairline:createEditorSwitchProp({label: '是否使用 0.5px 线',defaultValue: true,}),
    vertical:createEditorSwitchProp({label: '是否使用垂直',defaultValue: false,}), 
  },
  events: [
    { label: '关闭通知栏时触发', value: 'close' },
    { label: '点击通知栏时触发', value: 'click' },
    { label: '每当滚动栏重新开始滚动时触发', value: 'replay' },
  ],
  resize: {
    width: true,
  },
  model: {
    default: '绑定字段',
  },
} as VisualEditorComponent;
