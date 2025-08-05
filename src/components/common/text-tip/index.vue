<template>
    <el-tooltip :effect="props.effect" :content="props.content" :placement="props.placement" v-bind="$attrs">
       <slot></slot>
    </el-tooltip>
</template>

<script lang="ts" setup>
defineOptions({
    name:'TextTip'
})
const props = withDefaults(defineProps<{
    content:string
    placement?:string
    effect?:string
}>(),{content:'',placement:'bottom',effect:'dark'})
</script>
