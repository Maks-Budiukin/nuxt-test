<template>
    <DialogModal v-if="open" :open="open" @close="$emit('close')">
        <template #modal-content>

            <div class="relative w-full max-h-screen">
                <ArrowButton :direction="'left'" shadow @click="onLeft" />

                <div class="flex justify-center ">
                    <Transition :name="transitionName" mode="out-in">
                        <img v-if="currentImage" :key="currentImage" :src="currentImage" alt="screenshot"
                            class="max-h-screen ">
                    </Transition>
                </div>

                <ArrowButton shadow @click="onRight" />
                <button class="color-[#FFFFFF] absolute right-3 top-3 z-[32]">X</button>
            </div>
        </template>
    </DialogModal>
</template>

<script setup>
import DialogModal from './DialogModal.vue'
import ArrowButton from './ArrowButton.vue'
import { ref } from 'vue'

const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    currentImage: {
        type: String,
        required: true,
    },
    modelValue: {
        type: Number,
    },
})

const transitionName = ref('right')

const emit = defineEmits([
    'close', 'update:modelValue',
])

const onRight = () => {
    transitionName.value = 'right'

    if (props.modelValue + 1 > props.images.length - 1) {
        emit('update:modelValue', 0)

    } else {
        emit('update:modelValue', props.modelValue + 1)
    }
}

const onLeft = () => {
    transitionName.value = 'left'

    if (props.modelValue - 1 < 0) {
        emit('update:modelValue', props.images.length - 1)

    } else {
        emit('update:modelValue', props.modelValue - 1)
    }
}

</script>

<style lang="scss" scoped>
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