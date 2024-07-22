<template>
    <main class="bg-[#141414] bg-common">
  
      <section ref="description" class="scroll-mt-12">
        <DescriptionSection :data="pageData" :loading="loading" />
      </section>
  
      <div class="flex justify-center items-center bg-common sticky top-0 left-0 right-0 z-[10] shadow-lg">
        <div class="w-full px-5 md:px-6 py-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
          <div class="flex gap-4 justify-center lg:justify-end">
  
            <UiNavButton @click="scrollTo(description)">Description</UiNavButton>
            <UiNavButton @click="scrollTo(myRole)">My Role</UiNavButton>
            <UiNavButton @click="scrollTo(contacts)">Contacts</UiNavButton>
            <RouterLink class="text-[#F0BF6C] text-lg sm:text-xl" to="/">Back</RouterLink>
  
          </div>
        </div>
      </div>
  
      <section ref="myRole" class="scroll-mt-12">
        <MyRoleSection :data="pageData" />
      </section>
  
      <section ref="contacts" class="scroll-mt-12">
        <ContactsSection />
      </section>
  
    </main>
  </template>
  
  
  <script setup>
//   import DescriptionSection from '../components/DescriptionSection.vue'
//   import MyRoleSection from '../components/MyRoleSection.vue'
//   import ContactsSection from '../components/ContactsSection.vue'
//   import NavButton from '../components/ui/NavButton.vue'
  
  import { ref, onBeforeMount } from 'vue';
  import { useFetch } from '@/composables/useFetch';
  
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  const description = ref(null);
  const myRole = ref(null);
  const contacts = ref(null);
  
  function scrollTo(view) {
    view.scrollIntoView({ behavior: 'smooth' });
  }
  
  const pageData = ref({})
  
  const loading = ref(false)
  
  const getData = async () => {
  
    loading.value = true
  
    const { data } = await useFetch(route.fullPath)
  
    pageData.value = data.data
    loading.value = false
    loading
  }
  
  onBeforeMount(() => {
    getData()
  })
  
  </script>
  
  
  <style scoped></style>