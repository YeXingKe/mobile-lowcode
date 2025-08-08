import {  NoticeBar } from 'vant';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import {  createEditorColorProp, createEditorInputProp,  createEditorSwitchProp } from '@/utils/visual-editor-props';
import type { VisualEditorComponent } from '@/utils';


export default {
  key: 'notice-bar',
  moduleName: 'baseWidgets',
  label: '通知栏',
  preview: () => (
    <NoticeBar   
        style={{ width: '180px' }}
        leftIcon={'volume-o'}
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
    />
  ),
  render: ({ styles, block, props }) => {
    const { registerRef } = useGlobalProperties();

    return () => (
      <div style={styles}>
        <NoticeBar   
            ref={(el) => registerRef(el, block._vid)}
            style={{ width: '100%' }}
            {...props}
        />
      </div>
    );
  },
  props: {
    mode:createEditorInputProp({label: '通知栏模式',defaultValue: '',}),
    text:createEditorInputProp({label: '通知栏文本内容',defaultValue: '无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。',}),
    color:createEditorInputProp({label: '通知文本颜色',defaultValue: '#ed6a0c',}),
    background:createEditorColorProp({label: '滚动条背景',defaultValue: '#fffbe8',}),
    leftIcon:createEditorInputProp({label: '左侧图标',defaultValue: 'volume-o',}),
    delay:createEditorInputProp({label: '动画延迟时间 (s)',defaultValue: 1,}),
    speed:createEditorInputProp({label: '滚动速率 (px/s) ',defaultValue: 60,}),
    scrollable:createEditorSwitchProp({label: '是否开启滚动播放，内容长度溢出时默认开启',defaultValue: false,}),
    wrapable:createEditorSwitchProp({label: '是否开启文本换行，只在禁用滚动时生效',defaultValue: false,}),
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
