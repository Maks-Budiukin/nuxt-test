<template>
    <div class="flex justify-center items-center">
        <div class="w-full px-5 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
            <div class="flex justify-center items-center">
                <div
                    class="w-full px-5 py-6 xl:py-10 2xl:pt-20 2xl:pb-10 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
                    <div class="mb-12 lg:hidden">
                        <h1 class="font-semibold text-6xl sm:text-7xl text-white text-center lg:text-left">
                            {{ pageHeader }}</h1>
                    </div>

                    <div class="flex flex-col lg:flex-row items-center lg:items-start xl:items-center gap-12">

                        <div
                            class="flex-1 flex justify-center items-center max-w-full md:max-w-[75%] lg:max-w-[50%] lg:order-1">
                            <CarouselSection :data="pageGallery" />
                        </div>

                        <div class="flex-1 flex flex-col gap-8 sm:items-center lg:items-start">
                            <div class="hidden lg:block mb-6">
                                <h1 class="font-semibold text-6xl sm:text-7xl text-white text-center lg:text-left">
                                    {{ pageHeader }}</h1>
                            </div>
                            <ReadMore>
                                {{ pageDescription }}
                            </ReadMore>
                            <div class="sm:flex flex-col items-center lg:items-start sm:w-[412px]">
                                <div v-if="linkLive" class="w-full mb-3">
                                    <Button @click="navigate(linkLive)">
                                        <span class="mr-2">
                                            <Web size="22" />
                                        </span>
                                        Visit Live</Button>
                                </div>
                                <div
                                    class="w-full flex flex-col sm:flex-row gap-3 justify-center md:items-center lg:justify-start ">
                                    <div v-if="linkFE" class="flex-1">
                                        <Button variant="secondary" @click="navigate(linkFE)">
                                            <span class="mr-2">
                                                <Github size="22" />
                                            </span>
                                            Frontend</Button>
                                    </div>

                                    <div v-if="linkBE" class="flex-1">
                                        <Button variant="secondary" @click="navigate(linkBE)">
                                            <span class="mr-2">
                                                <Github size="22" />
                                            </span>
                                            Backend
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import CarouselSection from './ui/Carousel.vue'
import Button from '../components/ui/Button.vue'
import ReadMore from '../components/ui/ReadMore.vue'
import Github from './icons/Github.vue';
import Web from './icons/Web.vue';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    loading: {
        type: Boolean,
        default: false
    }
})

const navigate = (url) => {
    window.open(url, '_blank');
}

const pageHeader = computed(() => {
    return props.data.attributes?.pageHeader
})

const pageDescription = computed(() => {
    return props.data.attributes?.pageDescription
})

const pageGallery = computed(() => {
    return props.data.attributes?.gallery.data || []
})

const linkLive = computed(() => {
    return props.data.attributes?.linkLive
})

const linkFE = computed(() => {
    return props.data.attributes?.linkFE
})

const linkBE = computed(() => {
    return props.data.attributes?.linkBE
})

</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(100%);
}
</style>