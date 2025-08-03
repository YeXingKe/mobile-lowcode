<template>
    <div>
        <svg t="1754222667509" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="1250" :width="props.width" :height="props.height">
            <path
                d="M400 710.624a32 32 0 0 1-51.68 25.232l-2.08-1.792L89.232 495.456a32 32 0 0 1-1.936-44.944l1.936-1.968L346.24 209.936a32 32 0 0 1 53.696 21.056l0.08 2.4V336c373.328-50.192 560 120.48 560 512l-4.256-7.408-4.64-7.536-2.96-4.608-3.408-5.12-3.824-5.6-6.56-9.216-4.912-6.64-5.36-6.976-5.808-7.296-6.24-7.568-6.688-7.808-7.136-8.016-7.584-8.192C807.36 668 647.168 557.664 400 624v86.624z"
                :fill="props.fill" p-id="1251"></path>
        </svg>
    </div>
</template>

<script lang="ts" setup>

defineOptions({
    name: 'IconReturn',
})
const props = withDefaults(
    defineProps<{
        width?: number
        height?: number
        fill?: string
    }>(),
    { width: 24, height: 24,fill:'#fff'},
)
</script>

<style lang="scss" scoped></style>