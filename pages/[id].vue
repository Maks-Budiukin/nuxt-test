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

</script>

<style scoped></style>