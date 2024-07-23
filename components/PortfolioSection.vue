<template>
    <div class="flex justify-center items-center">
        <div class="w-full px-5 py-6 xl:py-10 2xl:py-20 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">

            <div class="mb-8">
                <h2 class="font-semibold text-5xl text-white">Portfolio</h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="site in data" :key="site.id" class="mx-auto">
                    <div class="col-span-1 portfolio-thumb relative cursor-pointer">
                        <NuxtImg :src="`https://test-strapi-mrqj.onrender.com${site.attributes.preview.data.attributes.url}`"
                            alt="My work-1" class="rounded-lg portfolio-picture h-full" />
                        <div
                            class="button-container absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hidden">
                            <NuxtLink
                                class="block text-nowrap text-white hover:text-[#F0BF6C] duration-300 text-2xl font-medium py-4 px-6  border-transparent border-[2px] hover:border-y-[#F0BF6C] "
                                :to="`/${site.id}`">
                                About
                                project
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>

<script setup>

const { data } = await $fetch('https://test-strapi-mrqj.onrender.com/api/portfolio-pages', {
    method: 'GET',
    params: {populate: 'deep'},
    headers: {
        authorization: 'Bearer b705102d4bcbb581f4ba48e7a1fbee391eb7cf8ce1d9cbc0f69cc483f29763dd6af3545a85f5d2fbeff6bff67c01c9dd1537d8cb49c2a145b09f7b6137c130139934d79c6febab6db4518da4f8e95a101dd1116215fab50176d11a124de118e0b72d09e5664c8494e41c7306650ca450b236ec765d1811819b6bed79aecef21b'
    }
}
);

console.log(data)

</script>

<style lang="scss" scoped>
.portfolio-picture {
    transition-duration: 250ms;
}

.portfolio-thumb:hover {
    .portfolio-picture {
        @apply blur-sm opacity-50;
    }

    .button-container {
        @apply flex flex-col;
    }
}
</style>