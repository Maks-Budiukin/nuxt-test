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
  description: 'Welcome to my site',
  ogUrl: 'https://nuxt-test-sigma-dusky.vercel.app/',
  ogTitle: 'Creative web-development of any difficulty',
  ogType: 'website',
  ogDescription: 'Check my portfolio and order site for your business!',
  ogImage: {
    url: 'https://nuxt-test-sigma-dusky.vercel.app/og-image2.jpg',
    width: '500',
    height: '281'
  }
});
</script>