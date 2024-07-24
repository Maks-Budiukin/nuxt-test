<template>
    <section id="my-role" class="flex justify-center items-center pt-20">
        <div class="w-full px-5 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">

            <div class="mb-8">
                <h2 class="font-semibold text-5xl text-white">My role</h2>
            </div>

            <div class="flex flex-col gap-4 text-white">
                <div v-for="item in data" :key="item.id" class="flex items-start gap-4">
                    <div>
                        <div class="flex items-center gap-3 mb-4 ml-2">
                            <div class="flex items-center justify-center">
                                <IconsPoint size="20" />
                            </div>
                            <div>
                                <h3 class="text-[32px] ">{{ item.roleHeader }}</h3>
                            </div>

                        </div>

                        <div class="pl-8 ml-4 border-l-[3px]">
                            <div v-for="role in item.role" :key="role.id" class="mb-4">
                                <div>
                                    <p class="text-[#F0BF6C] font-semibold">{{ role.roleTitle }}</p>
                                </div>
                                <div>
                                    <p>{{ role.roleDescription }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

</script>

<style lang="scss" scoped></style>