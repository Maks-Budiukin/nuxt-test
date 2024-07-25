<template>
    <NuxtLink :to="link" type="button" class="text-lg sm:text-xl text-nowrap text-white hover:text-accent duration-300">
        <slot />
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    link: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped></style>