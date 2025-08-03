<template>
    <div>
        <svg t="1754222334840" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="1108" :width="props.width" :height="props.height">
            <path
                d="M639.04 710.624a32 32 0 0 0 51.664 25.232l2.096-1.792 256.96-238.608a32 32 0 0 0 1.952-44.944l-1.936-1.968L692.8 209.936a32 32 0 0 0-53.696 21.056l-0.096 2.4V336c-373.328-50.192-560 120.48-560 512l1.312-2.368 2.944-5.04 4.64-7.536 2.976-4.608 3.392-5.12 5.904-8.576 4.48-6.24 4.928-6.64 5.344-6.976 5.808-7.296 6.24-7.568 3.296-3.888 6.912-7.904C216.864 678.72 380.272 554.56 639.024 624v86.624z"
                :fill="fill" p-id="1109"></path>
        </svg>
    </div>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'IconNext',
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