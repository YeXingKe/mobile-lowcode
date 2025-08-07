import { defineComponent, ref, watchEffect } from 'vue'
import { cloneDeep } from 'lodash-es'
import DraggableTransition from '@/components/common/draggable-transition/index.vue'
import styles from '../index.module.scss'
import { createNewBlock } from '@/utils/visual-editor'
import { visualConfig } from '@/utils/visual.config'
import { useLayoutTypeStore } from '@/stores/layoutType'
import { Mug } from '@element-plus/icons-vue'
  
  export default defineComponent({
    name: 'ContainerComponent',
    label: '容器组件',
    icon: Mug,
    setup() {
    const containerWidgets = ref(visualConfig.componentModules.containerWidgets)
    const cloneDog = (comp) => {
      console.log('当前拖拽的组件：', comp)
      const newComp = cloneDeep(comp)
      return createNewBlock(newComp)
    }

    const layoutTypeStore = useLayoutTypeStore() // 直接解构会丢失响应性

    const log = (evt) => {
      // 浏览器提供的调试输出方法
      window.console.log('onChange:', evt)
    }
    return () => (
      <>
        <DraggableTransition
          class={styles.listGroup}
          v-model={containerWidgets.value}
          group={{ name: 'components', pull: 'clone', put: false }}
          // clone={cloneDog as any}
          // onChange={log as any}
          {...{
            clone: cloneDog,
            onChange:log
          } as Partial<{ clone: Function,onChange: Function }>}
          itemKey={'key'}
        >
          {{
            item: ({ element }) => (
              <div class={[styles.listGroupItem,styles[`listGroupItem${layoutTypeStore.layoutType}`]]} data-label={element.label} >
                {element.preview()}
              </div>
            ),
          }}
        </DraggableTransition>
      </>
    )
  },
  })
  