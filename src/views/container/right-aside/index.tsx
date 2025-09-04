import { defineComponent, reactive } from 'vue'
import styles from './index.module.scss'
import clsx from 'clsx'
import { ElTabPane, ElTabs } from 'element-plus'
import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons-vue'
import { AttrEditor } from '@/components/right-comp/attr-editor'
import { AnimateEditor } from '@/components/right-comp/animate-editor'

export default defineComponent({
  name: 'RightAside',
  setup() {
    const state = reactive({
      activeName: 'attr',
      isOpen: true,
    })

    return () => (
      <>
        <div class={clsx(styles.drawer, { [styles.isOpen]: state.isOpen })}>
          <div class={styles.floatingActionBtn} onClick={() => (state.isOpen = !state.isOpen)}>
            {state.isOpen ? <ArrowRightBold /> : <ArrowLeftBold />}
          </div>
          <div class={styles.attrs}>
            <ElTabs
              v-model={state.activeName}
              type="border-card"
              stretch={true}
              class={styles.tabs}
            >
              <ElTabPane label="属性" name="attr">
                <AttrEditor />
              </ElTabPane>
              <ElTabPane label="动画" name="animate">
                <AnimateEditor />
              </ElTabPane>
              <ElTabPane label="事件" name="events"></ElTabPane>
              <ElTabPane label="页面设置" name="page-setting"></ElTabPane>
            </ElTabs>
          </div>
        </div>
      </>
    )
  },
})
