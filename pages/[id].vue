<template>
    <main class="bg-[#141414] bg-common">
  
      <section ref="description" class="scroll-mt-12">
        <DescriptionSection :data="data.data" />
      </section>
  
      <div class="flex justify-center items-center bg-common sticky top-0 left-0 right-0 z-[10] shadow-lg">
        <div class="w-full px-5 md:px-6 py-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
          <div class="flex gap-4 justify-center lg:justify-end">
  
            <UiNavButton @click="scrollTo(description)">Description</UiNavButton>
            <UiNavButton @click="scrollTo(myRole)">My Role</UiNavButton>
            <UiNavButton @click="scrollTo(contacts)">Contacts</UiNavButton>
            <NuxtLink class="text-[#F0BF6C] text-lg sm:text-xl" to="/">Back</NuxtLink>
  
          </div>
        </div>
      </div>
  
      <section ref="myRole" class="scroll-mt-12">
        <MyRoleSection :data="data.data" />
      </section>
  
      <section ref="contacts" class="scroll-mt-12">
        <ContactsSection />
      </section>
  
    </main>
  </template>
  
  
  <script setup>
  
  import { useRoute } from 'vue-router'

  const route = useRoute()
     
  // const pageData = ref({})
  

//   const {data} = await $fetch(`https://test-strapi-mrqj.onrender.com/api/portfolio-pages${route.fullPath}`, {
//     method: 'GET',
//     params: {populate: 'deep'},
//     headers: {
//         authorization: 'Bearer b705102d4bcbb581f4ba48e7a1fbee391eb7cf8ce1d9cbc0f69cc483f29763dd6af3545a85f5d2fbeff6bff67c01c9dd1537d8cb49c2a145b09f7b6137c130139934d79c6febab6db4518da4f8e95a101dd1116215fab50176d11a124de118e0b72d09e5664c8494e41c7306650ca450b236ec765d1811819b6bed79aecef21b'
//     }
// }
// )

// WORKS!!!

const { data, status, error, refresh, clear } = await useAsyncData('item', () => $fetch(`https://test-strapi-mrqj.onrender.com/api/portfolio-pages${route.fullPath}`, {
    method: 'GET',
    params: { populate: 'deep' },
    headers: {
        authorization: 'Bearer b705102d4bcbb581f4ba48e7a1fbee391eb7cf8ce1d9cbc0f69cc483f29763dd6af3545a85f5d2fbeff6bff67c01c9dd1537d8cb49c2a145b09f7b6137c130139934d79c6febab6db4518da4f8e95a101dd1116215fab50176d11a124de118e0b72d09e5664c8494e41c7306650ca450b236ec765d1811819b6bed79aecef21b'
    }
}
))

////////////////////////////////


console.log('data', data.value.data)
console.log('status', status)
console.log('error', error)
console.log('refresh', refresh)
  

  function scrollTo(view) {
    view.scrollIntoView({ behavior: 'smooth' });
  }

  </script>
  
  
  <style scoped></style>