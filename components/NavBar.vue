<template>
    <div class="flex justify-center items-center bg-common sticky top-0 left-0 right-0 z-[10] shadow-lg">
        <div class="w-full px-5 md:px-6 py-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
          <div class="flex gap-4 text-lg sm:text-xl justify-center"
          :class="{'sm:justify-start' : page === 'home', 'sm:justify-end' : page === 'project'}"
          >
  
            <template v-if="page === 'home'">
              <UiNavLink :link="'#experience'">Experience</UiNavLink>
              <UiNavLink :link="'#portfolio'">Portfolio</UiNavLink>
              <UiNavLink :link="'#skills'">Skills</UiNavLink>
            </template>
            
            <template v-if="page === 'project'">
              <UiNavLink :link="'#description'">Description</UiNavLink>
              <UiNavLink :link="'#my-role'">My Role</UiNavLink>
            </template>

            <UiNavLink :link="'#contacts'">Contacts</UiNavLink>

            <template v-if="page === 'project'">
              <UiNavLink :link="'/#portfolio'" class="flex gap-2 fill-[#FFFFFF] hover:text-[#F0BF6C] hover:fill-[#F0BF6C] duration-300">Back <IconsArrowBack /></UiNavLink>
            </template>

          </div>
        </div>
      </div>
</template>

<script setup>

const props = defineProps({
  page: {
    type: String,
    required: true
  }
});

</script>

<style lang="scss" scoped>
</style>