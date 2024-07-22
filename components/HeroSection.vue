<template>
    <div class="">
        <div class="flex justify-center items-center ">
            <div
                class="flex md:items-center justify-between gap-5 2xl:gap-32 w-full px-5 py-10 2xl:py-20 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
                <div>
                    <div class="mb-4 2xl:mb-12">
                        <p class="text-white text-4xl 2xl:text-6xl">Hi, I'm <span
                                class="text-[#F0BF6C] text-4xl sm:text-5xl 2xl:text-7xl font-semibold text-nowrap min-[505px]:text-wrap">Maksym
                                Budiukin</span></p>
                    </div>

                    <div class="min-[505px]:hidden min-w-[210px] flex justify-between gap-8 items-end mb-6">


                        <div class="flex flex-col gap-3 md:px-5">

                            <div class="col-span-1">
                                <a href="https://t.me/bud_maks" target="_blank"
                                    class="stroke-white hover:stroke-[#F0BF6C] duration-300">
                                    <Telegram :size="minLg ? '48' : '64'" />
                                </a>
                            </div>

                            <div class="col-span-1">
                                <a href="https://github.com/Maks-Budiukin" target="_blank"
                                    class="fill-white hover:fill-[#F0BF6C] duration-300">
                                    <Github :size="minLg ? '48' : '64'" />
                                </a>
                            </div>

                            <div class="col-span-1">
                                <a href="https://gitlab.com/maksym-budyukin" target="_blank"
                                    class="stroke-white hover:stroke-[#F0BF6C] duration-300">
                                    <Gitlab :size="minLg ? '48' : '64'" />
                                </a>
                            </div>

                            <div class="col-span-1">
                                <a href="https://www.linkedin.com/in/maksym-budiukin/" target="_blank"
                                    class="fill-white hover:fill-[#F0BF6C] duration-300">
                                    <LinkedIn :size="minLg ? '48' : '64'" />
                                </a>
                            </div>
                        </div>

                        <div class="">
                            <img src="/pic15.webp" alt="Max's photo" class="max-h-[400px]">
                        </div>
                    </div>

                    <div class="max-w-[600px] 2xl:max-w-[728px] mb-6">
                        <ReadMore>
                            Experienced frontend developer proficient in a wide array
                            of technologies
                            including Vue3, React, Redux, Nuxt.js, Express, NestJS, and Pinia. Skilled in
                            developing responsive and feature-rich web applications, with a focus on
                            user experience and functionality. Committed to continuous learning and
                            growth, I am passionate about leveraging my diverse skill set to drive
                            innovation and deliver exceptional results in collaborative team
                            environments.
                        </ReadMore>
                    </div>

                    <div class="flex flex-col md:flex-row gap-3">
                        <div class="md:w-[200px]">
                            <a href="/MAKSYM-BUDIUKIN.pdf" download="MAKSYM-BUDIUKIN.pdf"
                                class="flex items-center justify-center w-full text-xl font-medium border-[2px] border-transparent bg-[#F0BF6CCC] hover:bg-[#F0BF6C] duration-300 rounded-lg px-4 sm:px-6 py-2">
                                Download CV
                            </a>
                        </div>

                        <div class="md:w-[200px]">
                            <Button variant="secondary" @click="scrollToBottom">Contact
                                me</Button>
                        </div>
                    </div>
                </div>
                <div class="hidden min-[505px]:block lg:flex items-end min-w-[210px]">

                    <div class=" ">
                        <img src="/pic15.webp" alt="Max's photo" class="max-h-[500px]">
                    </div>

                    <div class="grid grid-cols-4 lg:grid-cols-1 gap-3 md:px-5 py-5 lg:py-0">

                        <div class="hidden lg:flex col-span-1 w-full justify-center">
                            <div class=" border-[2px] w-[1px] border-[#F0BF6C] h-[192px]"></div>
                        </div>

                        <div class="col-span-1">
                            <a href="https://t.me/bud_maks" target="_blank"
                                class="stroke-white hover:stroke-[#F0BF6C] duration-300">
                                <Telegram :size="minLg ? '48' : '36'" />
                            </a>
                        </div>

                        <div class="col-span-1">
                            <a href="https://github.com/Maks-Budiukin" target="_blank"
                                class="fill-white hover:fill-[#F0BF6C] duration-300">
                                <Github :size="minLg ? '48' : '36'" />
                            </a>
                        </div>

                        <div class="col-span-1">
                            <a href="https://gitlab.com/maksym-budyukin" target="_blank"
                                class="stroke-white hover:stroke-[#F0BF6C] duration-300">
                                <Gitlab :size="minLg ? '48' : '36'" />
                            </a>
                        </div>

                        <div class="col-span-1">
                            <a href="https://www.linkedin.com/in/maksym-budiukin/" target="_blank"
                                class="fill-white hover:fill-[#F0BF6C] duration-300">
                                <LinkedIn :size="minLg ? '48' : '36'" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="border-[2px] w-[50%] border-[#F0BF6C] h-[1px] ml-[35%]"></div>
    </div>
</template>

<script setup>
import Button from './ui/Button.vue'
import Telegram from './icons/Telegram.vue'
import Github from './icons/Github.vue'
import Gitlab from './icons/Gitlab.vue'
import LinkedIn from './icons/LinkedIn.vue'
import ReadMore from './ui/ReadMore.vue'
import { ref, watch, onMounted, onUnmounted } from 'vue'

const minLg = ref(false)

const screenWidth = ref(1920)

const handleResize = () => {
    screenWidth.value = window.innerWidth
}

const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight)
}

onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    document.documentElement.style.overflow = 'auto'
})

watch(screenWidth, (val) => {
    if (val >= 768) {
        minLg.value = true
    } else {
        minLg.value = false
    }
}, { immediate: true })
</script>

<style lang="scss" scoped></style>