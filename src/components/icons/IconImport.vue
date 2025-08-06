<template>
    <div>
        <svg t="1754452763701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="1198" :width="props.width" :height="props.height">
            <path d="M693.96 135.71h235.26v62.04H693.96v-62.04z" p-id="1199" :fill="props.fill"></path>
            <path
                d="M870.86 192.26h58.36v700.36h-58.36V192.26z m-758.73 642h758.72v58.36H112.13v-58.36z m0-291.82h58.36v291.82h-58.36V542.44z"
                p-id="1200" :fill="props.fill"></path>
            <path d="M463.53 701.41l256.05-291.99h-512.1z" p-id="1201" :fill="props.fill"></path>
            <path
                d="M365.58 410.85h234.03c-45.29-158.39-200.75-275.14-385.65-275.14-40.7 0-79.96 5.69-116.96 16.2 131.04 37.24 233.25 135.44 268.58 258.94z"
                p-id="1202" :fill="props.fill"></path>
        </svg>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'IconImport',
})
const props = withDefaults(
    defineProps<{
        width?: number
        height?: number
        fill?: string
    }>(),
    { width: 32, height: 32,fill:'#fff'},
)

</script>

<style lang="scss" scoped></style>