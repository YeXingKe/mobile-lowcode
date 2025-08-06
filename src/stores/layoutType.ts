import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type LayoutType } from '@/utils/constant'
import { LayoutTypeEnum } from '@/enums'

export const useLayoutTypeStore = defineStore('layoutTypeStore', () => {

  const layoutType = ref<LayoutType>(LayoutTypeEnum.Single)
  

  function changeLayoutType(value:LayoutType){
    layoutType.value = value
  }
  return { layoutType, changeLayoutType }
})
