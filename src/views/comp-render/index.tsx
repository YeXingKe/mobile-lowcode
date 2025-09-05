import type { VisualEditorBlockData } from '@/utils/visual-editor'
import { visualConfig } from '@/utils/visual.config'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'CompRender',
  props: {
    element: {
      type: Object as PropType<VisualEditorBlockData>,
      default: () => ({}),
    },
  },
  setup(props) {
    // 渲染拖拽组件，执行的是每一个拖拽组件里的render函数
    return visualConfig.componentMap[props.element.componentKey].render({
      styles: props.element.styles || {},
      props: props.element.props || {},
      model: {},
      block: props.element,
      custom: {},
    })
  },
})
