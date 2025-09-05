import { defineComponent, ref, watchEffect } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import DraggableTransition from '@/components/common/draggable-transition/index.vue'
import styles from '../index.module.scss'
import { visualConfig } from '@/utils/visual.config'
import { useLayoutTypeStore } from '@/stores/layoutType'
import { useCloneDog } from '@/hooks/useCloneDog'

export default defineComponent({
  name: 'BaseWidgets',
  label: '基本组件',
  icon: Edit,
  setup() {
    const baseWidgets = ref(visualConfig.componentModules.baseWidgets)

    // 没拖拽一次就创建一个blocks，用于放置区渲染
    const { cloneDog } = useCloneDog()

    const layoutTypeStore = useLayoutTypeStore() // 直接解构会丢失响应性

    const log = (evt) => {
      // 浏览器提供的调试输出方法
      window.console.log('onChange:', evt)
    }
    return () => (
      <>
        <DraggableTransition
          class={styles.listGroup}
          v-model={baseWidgets.value}
          group={{ name: 'components', pull: 'clone', put: false }}
          // clone={cloneDog as any}
          // onChange={log as any}
          {...{
            clone: cloneDog, // 克隆函数
            onChange:log
          } as Partial<{ clone: Function,onChange: Function }>}
          itemKey={'key'}
        >
          {/* item 是一个插槽。这是 vue.draggable.next 提供的具名插槽，用于自定义每个拖拽项的渲染 */}
          {{
            item: ({ element }) => (
              <div class={[styles.listGroupItem,styles[`listGroupItem${layoutTypeStore.layoutType}`]]} data-label={element.label}>
                {/* 执行每个组件里的preview方法 */}
                {element.preview()}
              </div>
            ),
          }}
        </DraggableTransition>
      </>
    )
  },
})
