import type { VisualEditorBlockData } from "@/utils"
import { defineStore } from "pinia"
import { computed, reactive, ref } from "vue"

export const useHistoryDataStore = defineStore('historyDataStore', () => {
  const undoStack = ref<Array<VisualEditorBlockData[]>>([])   // 撤销栈
  const redoStack = ref<Array<VisualEditorBlockData[]>>([])   // 重做栈
  let lock = false                 // 避免 push 时触发监听
  // 1️⃣ 用 computed 实时计算
  const canUndo = computed(() => undoStack.value.length > 0)
  const canRedo = computed(() => redoStack.value.length > 0)
  /* 1️⃣ 用 computed 直接指向栈顶，省掉手动同步 */  // es2022语法
  const current = computed(() => undoStack.value.length ? undoStack.value.at(-1)! : [])
  // 记录快照
  const push = (snapshot: VisualEditorBlockData[]) => {
    if (lock) return
    undoStack.value.push(snapshot)
    redoStack.value = []           // 一旦产生新操作，清空重做栈
  }

  const clear = ()=>{
    undoStack.value = []
    redoStack.value = []
  }

  // 撤销
  const undo = () => {
    if (!canUndo.value) return
    lock = true
    redoStack.value.push(undoStack.value.pop()!)
    lock = false
  }

  // 重做
  const redo = () => {
    if (!canRedo.value) return
    lock = true
    undoStack.value.push(redoStack.value.pop()!)
    lock = false
  }


  return {
    push,
    undo,
    redo,
    clear,
    undoStack,
    redoStack,
    current,
    canUndo,
    canRedo,
  }
})
