<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Maks Budiukin - Portfolio',
  bodyAttrs: {
    class: 'bg-[#141414] bg-common bg-contain bg-repeat'
  },
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogTitle: 'Maks Budiukin portfolio site',
  description: 'Welcome to my site',
  ogDescription: 'Welcome to my site at social media',
  ogImage: '/og-image.webp'
});
</script>