<template>
    <button type="button"
        class="flex items-center justify-center w-full text-xl font-medium border-[2px] hover:bg-accent duration-300 rounded-lg px-4 sm:px-6 py-2 "
        :class="{
            'border-transparent bg-semiAccent fill-black stroke-black': variant === 'primary',
            'text-accent border-accent hover:text-black fill-accent hover:fill-black stroke-accent hover:stroke-black': variant === 'secondary'
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
});
</script>
