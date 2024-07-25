<template>
    <section class="">
        <div class="flex justify-center items-center ">
            <div
                class="flex md:items-center justify-between gap-5 2xl:gap-32 w-full px-5 py-10 2xl:py-20 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
                <div>
                    <div class="mb-4 2xl:mb-12">
                        <p class="text-white text-4xl 2xl:text-6xl">Hi, I'm <span
                                class="text-accent text-4xl sm:text-5xl 2xl:text-7xl font-semibold text-nowrap min-[505px]:text-wrap">Maksym
                                Budiukin</span></p>
                    </div>

                    <div class="min-[505px]:hidden min-w-[210px] flex justify-between gap-8 items-end mb-6">


                        <div class="flex flex-col gap-3 md:px-5">

                            <div class="col-span-1">
                                <NuxtLink to="https://t.me/bud_maks" target="_blank"
                                    aria-label="Contact Maks via Telegram"
                                    class="stroke-white hover:stroke-accent duration-300">
                                    <IconsTelegram :size="minLg ? '48' : '64'" />
                                </NuxtLink>
                            </div>

                            <div class="col-span-1">
                                <NuxtLink to="https://github.com/Maks-Budiukin" target="_blank"
                                    aria-label="View Maks' GitHub" class="fill-white hover:fill-accent duration-300">
                                    <IconsGithub :size="minLg ? '48' : '64'" />
                                </NuxtLink>
                            </div>

                            <div class="col-span-1">
                                <NuxtLink to="https://gitlab.com/maksym-budyukin" target="_blank"
                                    aria-label="View Maks' GitLab"
                                    class="stroke-white hover:stroke-accent duration-300">
                                    <IconsGitlab :size="minLg ? '48' : '64'" />
                                </NuxtLink>
                            </div>

                            <div class="col-span-1">
                                <NuxtLink to="https://www.linkedin.com/in/maksym-budiukin/" target="_blank"
                                    aria-label="Contact Maks via LinkedIn"
                                    class="fill-white hover:fill-accent duration-300">
                                    <IconsLinkedIn :size="minLg ? '48' : '64'" />
                                </NuxtLink>
                            </div>
                        </div>

                        <div class="">
                            <img src="/pic15.webp" alt="Max's photo" class="max-h-[400px]">
                        </div>
                    </div>

                    <div class="max-w-[600px] 2xl:max-w-[728px] mb-6">
                        <UiReadMore>
                            Experienced frontend developer proficient in a wide array
                            of technologies
                            including Vue3, React, Redux, Nuxt.js, Express, NestJS, and Pinia. Skilled in
                            developing responsive and feature-rich web applications, with a focus on
                            user experience and functionality. Committed to continuous learning and
                            growth, I am passionate about leveraging my diverse skill set to drive
                            innovation and deliver exceptional results in collaborative team
                            environments.
                        </UiReadMore>
                    </div>

                    <div class="flex flex-col md:flex-row gap-3">
                        <div class="md:w-[200px]">
                            <NuxtLink to="/MAKSYM-BUDIUKIN.pdf" external download="MAKSYM-BUDIUKIN.pdf"
                                class="flex items-center justify-center w-full text-xl font-medium border-[2px] border-transparent bg-semiAccent hover:bg-accent duration-300 rounded-lg px-4 sm:px-6 py-2">
                                Download CV
                            </NuxtLink>
                        </div>

                        <div class="md:w-[200px]">
                            <UiButton variant="secondary" @click="scrollToBottom">Contact
                                me</UiButton>
                        </div>
                    </div>
                </div>
                <div class="hidden min-[505px]:block lg:flex items-end min-w-[210px]">

                    <div class=" ">
                        <img src="/pic15.webp" alt="Max's photo" class="max-h-[500px]">
                    </div>

                    <div class="grid grid-cols-4 lg:grid-cols-1 gap-3 md:px-5 py-5 lg:py-0">

                        <div class="hidden lg:flex col-span-1 w-full justify-center">
                            <div class=" border-[2px] w-[1px] border-accent h-[192px]"></div>
                        </div>

                        <div class="col-span-1">
                            <NuxtLink to="https://t.me/bud_maks" target="_blank" aria-label="Contact Maks via Telegram"
                                class="stroke-white hover:stroke-accent duration-300">
                                <IconsTelegram :size="minLg ? '48' : '36'" />
                            </NuxtLink>
                        </div>

                        <div class="col-span-1">
                            <NuxtLink to="https://github.com/Maks-Budiukin" target="_blank"
                                aria-label="View Maks' GitHub" class="fill-white hover:fill-accent duration-300">
                                <IconsGithub :size="minLg ? '48' : '36'" />
                            </NuxtLink>
                        </div>

                        <div class="col-span-1">
                            <NuxtLink to="https://gitlab.com/maksym-budyukin" target="_blank"
                                aria-label="View Maks' GitLab" class="stroke-white hover:stroke-accent duration-300">
                                <IconsGitlab :size="minLg ? '48' : '36'" />
                            </NuxtLink>
                        </div>

                        <div class="col-span-1">
                            <NuxtLink to="https://www.linkedin.com/in/maksym-budiukin/" target="_blank"
                                aria-label="Contact Maks via LinkedIn"
                                class="fill-white hover:fill-accent duration-300">
                                <IconsLinkedIn :size="minLg ? '48' : '36'" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="border-[2px] w-[50%] border-accent h-[1px] ml-[35%]"></div>
    </section>
</template>

<script setup>
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