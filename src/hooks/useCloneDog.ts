import { createNewBlock } from '@/utils/visual-editor'
import { cloneDeep } from 'lodash-es'
// import { useVisualData } from './useVisualData'
// import { useHistoryDataStore } from '@/stores/historyData'

/**
 * 撤销撤回useHistoryDataStore出现了bug
 * @returns
 */
export const useCloneDog = () => {
  // const { currentPage,rawPage } = useVisualData()
  // const historyData = useHistoryDataStore()

  const cloneDog = (comp) => {
    console.log('当前拖拽的组件：', comp)
    const newComp = cloneDeep(comp)
    const newBlock = createNewBlock(newComp)
    // /* 核心：把新 block 追加到当前页面，再整体压栈 */
    // // rawPage.value.blocks.push(newBlock)
    // // historyData.push(rawPage.value.blocks)
    // const blocks = currentPage?.value?.blocks ?? []
    // const nextBlocks = [...blocks, newBlock]

    // // // 把包含 newBlock 的完整 blocks 作为一次快照
    // historyData.push(JSON.parse(JSON.stringify(nextBlocks)))

    return newBlock
  }

  return {
    cloneDog
  }
}
