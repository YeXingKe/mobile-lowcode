<template>
  <draggable
    v-model="list"
    class="dragArea"
    :class="[isDrag, listGroup?'listGroup':`listGroup${layoutTypeStore.layoutType}`]"
    :component-data="{
      tag: 'ul',
      type: 'transition-group',
      name: !isDrag ? 'flip-list' : null,
    }"
    :group="group"
    v-bind="{ ...dragOptions, ...attrs }"
    :item-key="itemKey"
    @start="isDrag = true"
    @end="isDrag = false"
  >
    <template #item="item">
      <div :class="{ 'item-drag': item.element.draggable }" :data-el="item.element.draggable">
        <slot name="item" v-bind="item"> </slot>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
import { useVModel } from '@vueuse/core' // 自定义 “双向绑定” hook
import { computed, useAttrs } from 'vue'
import { useLayoutTypeStore } from '@/stores/layoutType';

defineOptions({
  name: 'DraggableTransition',
})

const props = withDefaults(
  defineProps<{
    drag?: boolean
    itemKey?: string
    modelValue?: Array<any>
    group?: object
    fallbackClass?: string,
    listGroup?:boolean  // 不影响编辑页的布局
  }>(),
  { modelValue: () => [], itemKey: '_vid',listGroup:false, group: () => ({ name: 'components' }) },
)
const emit = defineEmits(['update:modelValue', 'update:drag'])
const list = useVModel(props, 'modelValue', emit)
const isDrag = useVModel(props, 'drag', emit)
const attrs = useAttrs() // 等同于$attr

const layoutTypeStore = useLayoutTypeStore()

const dragOptions = computed(() => ({
  animation: 200,
  disabled: false, // 定义是否此sortable对象是否可用
  scroll: true, // 当排序的容器是个可滚动的区域，拖放可以引起区域滚动
  ghostClass: 'ghost', // 来给这个影子单元添加一个class
}))
</script>

<style lang="scss" scoped>
@use '@/styles/mixins/func.scss' as *;
// 会默认给被引入的文件起一个模块名，你调用时必须加前缀，除非你显式写成 as *

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  background: #c8ebfb;
  opacity: 0.5;
}

.listGroup {
  height: 100%;
  min-height: 40px;

  &.isDrag:not(.no-child) :deep(.listGroupItem.has-slot) {
    @include showContainerBorder;
  }
}

.listGroupSingle {
  @extend .listGroup
}

.listGroupGrid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-right: 20px;
  box-sizing: border-box;
  
  @extend .listGroup
}
</style>
