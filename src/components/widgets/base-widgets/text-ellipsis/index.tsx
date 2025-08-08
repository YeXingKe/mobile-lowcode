import {  TextEllipsis } from 'vant';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import {  createEditorInputProp,  createEditorSelectProp } from '@/utils/visual-editor-props';
import type { VisualEditorComponent } from '@/utils';
import { computed } from 'vue';

const showText = "我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。"

export default {
  key: 'text-ellipsis',
  moduleName: 'baseWidgets',
  label: '文本省略',
  preview: () => (
    <TextEllipsis   
        rows="3"
        content={'还想在一瞬间变成天上半'}
        expand-text="展开"
        collapse-text="收起"
    />
  ),
  render: ({ styles, block, props }) => {
    const { registerRef } = useGlobalProperties();

      return () => (
        <div style={styles}>
          <TextEllipsis ref={(el) => registerRef(el, block._vid)} {...props} />
        </div>
      );
  },
  props: {
    rows:createEditorInputProp({label: '展示的行数',defaultValue: 1,}),
    content:createEditorInputProp({label: '需要展示的文本',defaultValue: showText,}),
    expandText:createEditorInputProp({label: '展开操作的文案',defaultValue: '展开',}),
    collapseText:createEditorInputProp({label: '收起操作的文案',defaultValue: '收起',}),
    dots:createEditorInputProp({label: '省略号的文本内容',defaultValue: '...',}),
    position:createEditorSelectProp({
        label: '省略位置',
        options: [
            {
                label: '开头',
                value: 'start',
            },
            {
                label: '中间',
                value: 'middle',
            },
            {
                label: '结尾',
                value: 'end',
            },
        ],
        defaultValue: 'end',
    }),
  },
  events: [],
  resize: {
    width: true,
  },
  model: {
    default: '绑定字段',
  },
} as VisualEditorComponent;
