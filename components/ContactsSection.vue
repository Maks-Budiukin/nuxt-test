<template>

    <div class="mx-auto w-full lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]  px-5 py-6 xl:py-10 2xl:py-20 md:px-6">

        <div class="mb-8">
            <h2 class="font-semibold text-5xl text-white">Get in touch</h2>
        </div>

        <div
            class="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full xl:w-[80%] p-8 sm:p-12 mx-auto gap-8 xl:gap-12 border border-[#F0BF6C] rounded-3xl bg-[#272829]">

            <div class="flex flex-col items-center">
                <div class="mb-6">
                    <h3 class="text-white text-4xl sm:text-7xl lg:text-5xl xl:text-5xl 2xl:text-7xl">Like my <span
                            class="text-[#F0BF6C]">works</span>?
                    </h3>
                </div>

                <div>
                    <div class="mb-10">
                        <p class="text-white text-xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                            &#8213;
                            <span class="text-[#F0BF6C]">Contact</span> me via:
                        </p>
                    </div>

                    <div class="flex flex-col gap-3">
                        <div>
                            <NuxtLink to="https://t.me/bud_maks" target="_blank"
                                class="flex gap-3 items-center text-white text-lg hover:text-[#F0BF6C] stroke-[#FFFFFF] hover:stroke-[#F0BF6C] duration-300">
                                <div>
                                    <IconsTelegram size="32" />
                                </div>
                                <div>
                                    <p class="">Telegram</p>
                                </div>
                            </NuxtLink>
                        </div>
                        
                        <div>
                            <NuxtLink to="mailto:maks.budyukin@gmail.com" target="_blank"
                                class="flex gap-3 items-center text-white text-lg hover:text-[#F0BF6C] fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300">
                                <div>
                                    <IconsEmail size="32" />
                                </div>
                                <div>
                                    <p class="">Mail</p>
                                </div>
                            </NuxtLink>
                        </div>

                        <div>
                            <NuxtLink to="https://www.linkedin.com/in/maksym-budiukin/" target="_blank"
                                class="flex gap-3 items-center text-white text-lg hover:text-[#F0BF6C] fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300">
                                <div>
                                    <IconsLinkedIn size="32" />
                                </div>
                                <div>
                                    <p class="">LinkedIn</p>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-[50%]">
                <div class="mb-6">
                    <p
                        class="text-white text-xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl text-center lg:text-left">
                        &#8213; Leave me
                        a <span class="text-[#F0BF6C]">message</span>:</p>
                </div>
                <form id="messageForm" @submit.prevent="handleFormSubmit" class="flex flex-col gap-3">
                    <div class="flex flex-col gap-2 text-white focus-within:text-[#F0BF6C] duration-300">
                        <label :for="nameId">Your name</label>
                        <input v-model="name" :id="nameId" type="text" autocomplete="on" required
                            class=" text-white text-xl bg-[#3D3E42] rounded outline-none hover:outline-[#F0BF6C] duration-300 p-3 focus:ring focus:ring-[#F0BF6C]">
                    </div>

                    <div class="flex flex-col gap-2 text-white focus-within:text-[#F0BF6C] duration-300">
                        <label :for="emailId">Your email</label>
                        <input v-model="email" :id="emailId" type="email" autocomplete="on" required
                            class=" text-white text-xl bg-[#3D3E42] rounded outline-none hover:outline-[#F0BF6C] duration-300 p-3 focus:ring focus:ring-[#F0BF6C]">
                    </div>

                    <div class="flex flex-col gap-2 text-white focus-within:text-[#F0BF6C] duration-300">
                        <label :for="preferredContactId">Preferred contact</label>
                        <input v-model="preferredContact" :id="preferredContactId" type="text" autocomplete="on"
                            class=" text-white text-xl bg-[#3D3E42] rounded outline-none hover:outline-[#F0BF6C] duration-300 p-3 focus:ring focus:ring-[#F0BF6C]">
                    </div>

                    <div class="flex flex-col gap-2 text-white focus-within:text-[#F0BF6C] duration-300">
                        <label :for="messageId">What would you like to discuss?</label>
                        <textarea v-model="message" :id="messageId" rows="3" autocomplete="on"
                            class=" text-white text-xl bg-[#3D3E42] rounded outline-none hover:outline-[#F0BF6C] duration-300 p-3 focus:ring focus:ring-[#F0BF6C] resize-none"></textarea>
                    </div>

                    <div class="mt-4 flex justify-center items-center lg:justify-end">
                        <div class="w-[60%] lg:w-[200px]">

                            <UiButton type="submit">Submit</UiButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue'

import { sendMessage } from '@/utils/sendMessage'

const name = ref('')
const email = ref('')
const preferredContact = ref('')
const message = ref('')

const nameId = useId()
const emailId = useId()
const preferredContactId = useId()
const messageId = useId()

const theMessage = computed(() => {
    return `New message from CV-site!\n<b>Sender:</b> ${name.value} \n<b>Email:</b> ${email.value}\n<b>Contact:</b> ${preferredContact.value}\n<b>Message:</b> ${message.value}`
})

const handleFormSubmit = () => {
    sendMessage(theMessage.value)
    name.value = ''
    email.value = ''
    preferredContact.value = ''
    message.value = ''
}

</script>

<style lang="scss" scoped></style>