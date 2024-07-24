<template>
  
      <DescriptionSection :data="data.data" />

      <NavBar :page="'project'" />
  
      <MyRoleSection :data="rolesData" />
  
  </template>
  
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";

  const route = useRoute()
     
  const { data, error } = await useAsyncData('item', () => $fetch(`https://test-strapi-mrqj.onrender.com/api/portfolio-pages${route.fullPath}`, {
    method: 'GET',
    params: { populate: 'deep' },
    headers: {
        authorization: 'Bearer b705102d4bcbb581f4ba48e7a1fbee391eb7cf8ce1d9cbc0f69cc483f29763dd6af3545a85f5d2fbeff6bff67c01c9dd1537d8cb49c2a145b09f7b6137c130139934d79c6febab6db4518da4f8e95a101dd1116215fab50176d11a124de118e0b72d09e5664c8494e41c7306650ca450b236ec765d1811819b6bed79aecef21b'
    }
  }));

if(error.value) {
  toast(`Something went wrong :( 
      \nPlease, try again or contact me directly!`, {
      "theme": "colored",
      "type": "error",
      "position": "top-center",
      "hideProgressBar": true,
      "transition": "slide",
      "icon": false,
      "autoClose": 3000,
      closeButton: false,
      toastStyle: {
        fontSize: '20',
        lineHeight: '1',
        textAlign: 'center',
      },
    })
}

  const rolesData = computed(() => {
    return data.value.data?.attributes?.myRoles
  });

  </script>
  
  <style scoped></style>