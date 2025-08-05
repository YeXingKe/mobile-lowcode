import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type LayoutType } from '@/utils/constant'
import { LayoutTypeEnum } from '@/enums'

export const useLayoutTypeStore = defineStore('layoutTypeStore', () => {

  const layoutType = ref<LayoutType>(LayoutTypeEnum.Single)
  

  function changeLayoutType(value:LayoutType){
    console.log('改了吗123',value)
    layoutType.value = value
  }
  return { layoutType, changeLayoutType }
})
