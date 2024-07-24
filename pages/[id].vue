<template>

  <DescriptionSection :data="data" />

  <NavBar :page="'project'" />

  <MyRoleSection :data="rolesData" />

</template>


<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const { data } = await useApi(route.fullPath)

const rolesData = computed(() => {
  return data?.attributes?.myRoles
});

const seoTitle = computed(() => {
  return `${data.attributes?.pageHeader} - Maksym Budiukin`
})

const seoDescription = computed(() => {
  return data.attributes?.pageDescription
})

const seoImage = computed(() => {
  return `https://test-strapi-mrqj.onrender.com${data.attributes?.gallery.data[2].attributes.formats.large.url}`
})

useHead({
  title: seoTitle.value,
})

useSeoMeta({
  description: seoDescription.value,
  ogUrl: `https://nuxt-test-sigma-dusky.vercel.app${route.fullPath}`,
  ogTitle: seoTitle.value,
  ogType: 'website',
  ogDescription: seoDescription.value,
  ogImage: {
    url: seoImage.value,
    width: '1200',
    height: '630'
  },
  ogSiteName: 'MAKS-BUDIUKIN.COM'
});

</script>

<style scoped></style>