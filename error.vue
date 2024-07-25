<template>
    <NuxtLayout name="404">
        <div class="flex flex-col justify-center items-center gap-4">
            <h1 class="text-6xl text-accent">404</h1>
            <p class="text-white">Page you are looking for doesn't exist</p>
            <div class="w-[200px]">
                <UiButton variant="secondary" @click="goBack">Go back</UiButton>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>

const goBack = () => {
    clearError({ redirect: '/' })
}

</script>