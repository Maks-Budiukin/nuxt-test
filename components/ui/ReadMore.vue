<template>
    <div class=" duration-500 overflow-hidden"
        :class="{ 'max-h-[1000px] min-h-fit': readMore, 'max-h-[140px] lg:max-h-[200px] xl:max-h-[1000px]': !readMore }">

        <p class="text-white text-lg indent-8 italic "
            :class="{ 'line-clamp-none': readMore, 'line-clamp-4 lg:line-clamp-6 xl:line-clamp-none': !readMore }">
            <slot />
        </p>
        <div class="flex justify-end text-white fill-[#FFFFFF] hover:text-[#F0BF6C] hover:fill-[#F0BF6C] duration-300 items-center cursor-pointer xl:hidden mt-2"
            @click="readMore = !readMore">
            <ArrowRight size="12" class="mt-1" :class="readMore ? '-rotate-90 mr-2' : 'order-1 ml-2 rotate-90'" />

            <p v-if="!readMore" class=" text-base font-medium">More</p>
            <p v-else class=" text-base font-medium ">Less</p>

        </div>
    </div>
</template>

<script setup>
import ArrowRight from '../icons/ArrowRight.vue'
import { ref } from 'vue'

const readMore = ref(false)


</script>

<style lang="scss" scoped></style>