import { Progress } from 'vant';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import {  createEditorColorProp, createEditorInputProp,  createEditorSelectProp,  createEditorSwitchProp } from '@/utils/visual-editor-props';
import type { VisualEditorComponent } from '@/utils';
import { computed } from 'vue';


export default {
  key: 'process',
  moduleName: 'baseWidgets',
  label: '进度条',
  preview: () => (
    <Progress percentage={50} style="width:100%"/>
  ),
  render: ({ styles, block, props }) => {
    const { registerRef } = useGlobalProperties();

    const style = computed(() => ({
        width: props.width,
    }));

      return () => (
        <div style={styles}>
          <Progress ref={(el) => registerRef(el, block._vid)} {...props} style={style.value}></Progress>
        </div>
      );
  },
  props: {
    percentage:createEditorInputProp({label: '进度百分比',defaultValue: 0,}),
    width:createEditorInputProp({label: '进度宽度',defaultValue: '100%',}),
    strokeWidth:createEditorInputProp({label: '进度条粗细',defaultValue: '4px',}),
    color: createEditorColorProp({label: '进度条颜色',defaultValue:'#1989fa'}),
    trackColor: createEditorColorProp({label: '轨道颜色',defaultValue:'#e5e5e5'}),
    pivotText:createEditorInputProp({label: '进度文字内容',defaultValue: '百分比',}),
    pivotColor: createEditorColorProp({label: '进度文字背景色',defaultValue:'#1989fa'}),
    textColor: createEditorColorProp({label: '进度文字颜色',defaultValue:'white'}),
    inactive:createEditorSwitchProp({label: '是否置灰',defaultValue:false}),
    showPivot:createEditorSwitchProp({label: '是否显示进度文字',defaultValue:true}),
  },
  events: [],
  resize: {
    width: true,
  },
  model: {
    default: '绑定字段',
  },
} as VisualEditorComponent;
