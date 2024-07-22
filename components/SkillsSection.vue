<template>
    <div ref="skills" class="flex justify-center items-center">
        <div class="w-full px-5 py-6 xl:py-10 2xl:py-20 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">

            <div class="mb-8">
                <h2 class="font-semibold text-5xl text-white">My skills</h2>
            </div>

            <div class="grid grid-rows-2 grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4 text-white text-xl">
                <div v-for="skill in skills" :key="skill.name"
                    class="col-span-1 w-full min-w-[100px] lg:min-w-[180px] flex flex-col items-center justify-center bg-[#3D3E42] hover:bg-[#F0BF6C99] duration-300 rounded-lg p-4">

                    <div class="w-[50px] lg:w-[100px] mb-4">
                        <img :src="skill.icon" alt="skill icon">
                    </div>
                    <div>
                        <p>{{ skill.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, watch, onMounted, onUnmounted } from 'vue'

const skills = [
    { name: "React", icon: "/images/skills/react.png" },
    { name: "Mongo DB", icon: "/images/skills/mongo.png" },
    { name: "Redux", icon: "/images/skills/redux.png" },
    { name: "Vue", icon: "/images/skills/vue.png" },
    { name: "Sequelize", icon: "/images/skills/sequelize.png" },
    { name: "Typescript", icon: "/images/skills/ts.png" },
    { name: "REST api", icon: "/images/skills/restapi.png" },
    { name: "Git", icon: "/images/skills/git.png" },
    { name: "HTML + CSS", icon: "/images/skills/htmlcss.png" },
    { name: "Node.js", icon: "/images/skills/nodejs.png" },
    { name: "Nest JS", icon: "/images/skills/nestjs.png" },
    { name: "Javascript", icon: "/images/skills/js.png" }
];

const minXl = ref(false)

const screenWidth = ref(1920)

const handleResize = () => {
    screenWidth.value = window.innerWidth
}

onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

watch(screenWidth, (val) => {
    if (val >= 1280) {
        minXl.value = true
    } else {
        minXl.value = false
    }
})

</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
    transition: max-height .5s;
}

.list-enter-from,
.list-leave-to {
    max-height: 0;
}
</style>