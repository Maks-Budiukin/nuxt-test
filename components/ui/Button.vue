<template>
    <button type="button"
        class="flex items-center justify-center w-full text-xl font-medium border-[2px] hover:bg-[#F0BF6C] duration-300 rounded-lg px-4 sm:px-6 py-2 "
        :class="{
            'border-transparent bg-[#F0BF6CCC] fill-[#000000] stroke-[#000000]': variant === 'primary',
            'text-[#F0BF6C] border-[#F0BF6C] hover:text-[#000000] fill-[#F0BF6C] hover:fill-[#000000] stroke-[#F0BF6C] hover:stroke-[#000000]': variant === 'secondary'
        }">
        <slot />
    </button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    variant: {
        type: String,
        default: 'primary'
    }
})
</script>
