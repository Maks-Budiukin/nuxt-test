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
  meta: [
    { name: 'description', content: 'Maks Budiukin portfolio site.' }
  ],
  bodyAttrs: {
    class: 'bg-[#141414] bg-common bg-contain bg-repeat'
  },
  htmlAttrs: {
    lang: 'en'
  }
})
</script>