<template>
  <Teleport to="body">

    <transition name="fade">
      <div v-if="open" class="fixed inset-0 z-[19] opacity-60 bg-[#000]/[0.9] cursor-pointer" @click="$emit('close')">
      </div>
    </transition>

    <transition :name="'fade'">
      <div v-if="open"
        class="fixed z-[20] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-h-screen rounded-lg"
        role="dialog">


        <div class="max-h-screen">
          <slot name="modal-content" />
        </div>
      </div>


    </transition>

  </Teleport>
</template>

<script setup>

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['close'])
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.5, 0, 0.5, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
}

.scroll::-webkit-scrollbar {
  display: none;
}
</style>