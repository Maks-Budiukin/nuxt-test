<template>
    <div class="cursor-pointer fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 flex justify-center items-center absolute h-full top-0 bottom-0 max-w-[10vw] z-[22]"
        :class="{ 'right-0': direction === 'right', 'left-0': direction === 'left' }">
        <div class="flex justify-start items-center bg-gradient-to-r h-full p-3" :class="{
            'from-[#00000080] to-transparent': shadowLeft,
            'from-transparent to-[#00000080]': shadowRight
        }">
            <ArrowRight :size="size" :class="{ 'rotate-180': direction === 'left' }" />
        </div>
    </div>
</template>

<script setup>
import ArrowRight from '../icons/ArrowRight.vue'
import { computed } from 'vue'

const props = defineProps({
    direction: {
        type: String,
        default: 'right'
    },
    size: {
        type: String,
        default: '40'
    },
    shadow: {
        type: Boolean,
        default: false
    }
})

const shadowRight = computed(() => {
    return props.shadow && props.direction === 'right'
})

const shadowLeft = computed(() => {
    return props.shadow && props.direction === 'left'
})
</script>

<style lang="scss" scoped></style>