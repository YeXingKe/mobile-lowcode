import { defineComponent, ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import { cloneDeep } from 'lodash-es'
import DraggableTransition from '@/components/common/DraggableTransition/index.vue'
import styles from './index.module.scss'
import { createNewBlock } from '@/utils/visual-editor'
import { visualConfig } from '@/utils/visual.config'

export default defineComponent({
  name: 'BaseWidgets',
  label: '基本组件',
  icon: Edit,
  setup() {
    const baseWidgets = ref(visualConfig.componentModules.baseWidgets)
    const cloneDog = (comp) => {
      console.log('当前拖拽的组件：', comp)
      const newComp = cloneDeep(comp)
      return createNewBlock(newComp)
    }

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
          // clone={cloneDog}
          // onChange={log}
          itemKey={'key'}
        >
          {{
            item: ({ element }) => (
              <div class={styles.listGroupItem} data-label={element.label}>
                {element.preview()}
              </div>
            ),
          }}
        </DraggableTransition>
      </>
    )
  },
})
