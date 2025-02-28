<template>
  <div class="h-full w-full">
    <div v-show="!open" class="h-full w-full">
      <div class="flex items-center">
        <div
          class="mb-4 mx-auto relative sm:min-h-[370px] min-[700px]:min-h-[410px] md:min-h-[365px] min-[900px]:min-h-[420px] lg:min-h-[300px] xl:min-h-[370px] 2xl:min-h-[450px] flex items-center">
          <UiArrowButton :direction="'left'" size="32" shadow @click="onLeft" class="sm:hidden" />

          <div class="py-4 border-y-[2px] border-accent sm:border-none">
            <div class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <VueSpinnerIos v-show="!isImageLoaded" color="#F0BF6C" size="40" />
            </div>

            <Transition :name="transitionName" mode="out-in">
              <KeepAlive>
                <NuxtImg ref="mainImage" :key="currentImage" @load="imageLoading"
                  :src="`https://test-strapi-mrqj.onrender.com${currentImage}`" alt="Project picture"
                  class="w-full sm:rounded-lg cursor-pointer big-image" @click="handleOpenModal" />
              </KeepAlive>
            </Transition>
          </div>

          <UiArrowButton size="32" shadow @click="onRight" class="sm:hidden" />
        </div>
      </div>

      <div ref="carouselContainer" class="hidden sm:flex items-center min-h-[148px] relative px-12">
        <UiArrowButton :direction="'left'" size="24" @click="onLeft" />

        <div ref="carousel" class="flex gap-2 overflow-x-scroll no-scrollbar">
          <div class="flex gap-[2px] items-center">
            <div v-for="(image, idx) in images" :key="image"
              class="min-w-[200px] duration-300 border-[3px] rounded p-1 cursor-pointer" :class="idx === currentImageIndex
                  ? 'border-accent min-w-[220px]'
                  : 'border-transparent'
                ">
              <NuxtImg :src="`https://test-strapi-mrqj.onrender.com${image}`" sizes="sm:120px" alt=""
                @click="changeImage(idx)" class="rounded-sm" />
            </div>
          </div>
        </div>

        <UiArrowButton size="24" @click="onRight" />
      </div>
    </div>
    <LazyUiCarouselModal :open="open" @close="open = false" :images="images"
      :currentImage="`https://test-strapi-mrqj.onrender.com${currentFullImage}`" v-model="currentImageIndex" />
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted, nextTick } from "vue";
import { useWindowSize } from "@vueuse/core";
import { VueSpinnerIos } from "vue3-spinners";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const { width } = useWindowSize();

const isImageLoaded = ref(false);

const imageLoading = () => {
  isImageLoaded.value = true;
  nextTick(() => {
    activeImagePosition();
  });
};

const mainImage = ref(null);

onMounted(() => {
  if (mainImage.value.complete) {
    imageLoading();
  }
});

const currentImageIndex = ref(2);

const images = computed(() => {
  return props.data?.map((image) => image.attributes.formats.large.url);
});

const currentImage = computed(() => {
  return images?.value[currentImageIndex.value] || "";
});

const currentFullImage = computed(() => {
  return props.data[currentImageIndex.value]?.attributes.url;
});

const open = ref(false);

const handleOpenModal = () => {
  if (width.value >= 640) {
    open.value = true;
  }
};

const changeImage = (idx) => {
  if (idx === currentImageIndex.value) {
    return;
  } else {
    if (idx > images.value.length - 1) {
      currentImageIndex.value = 0;
    } else if (idx < 0) {
      currentImageIndex.value = images.value.length - 1;
    } else {
      currentImageIndex.value = idx;
    }
  }
};

const transitionName = ref("fade");

const onRight = () => {
  if (width.value < 640) {
    transitionName.value = "right";
  } else {
    transitionName.value = "fade";
  }

  if (currentImageIndex.value + 1 > images.value.length - 1) {
    currentImageIndex.value = 0;
  } else {
    currentImageIndex.value += 1;
  }
};

const onLeft = () => {
  if (width.value < 640) {
    transitionName.value = "left";
  } else {
    transitionName.value = "fade";
  }

  if (currentImageIndex.value - 1 < 0) {
    currentImageIndex.value = images.value.length - 1;
  } else {
    currentImageIndex.value -= 1;
  }
};

const carouselContainer = ref(null);
const carousel = ref(null);

const activeImagePositionVal = computed(() => {
  return currentImageIndex.value * 200;
});

const activeImagePosition = () => {
  carousel.value?.scrollTo(
    activeImagePositionVal.value -
    (carouselContainer.value?.offsetWidth - 300) / 2,
    0
  );
};

onUnmounted(() => {
  document.documentElement.style.overflow = "auto";
});

watch(width, (val) => {
  if (val && carouselContainer.value && carousel.value) {
    activeImagePosition();
  }
});

watch(open, (val) => {
  if (val) {
    document.documentElement.style.overflow = "hidden";
    return;
  }
  document.documentElement.style.overflow = "auto";
  nextTick(() => {
    activeImagePosition();
  });
});

watch(currentImageIndex, () => {
  activeImagePosition();
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.right-enter-active,
.right-leave-active,
.left-enter-active,
.left-leave-active {
  transition: transform 0.2s ease, opacity 0.3s ease-in-out;
}

.right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.left-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.left-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
