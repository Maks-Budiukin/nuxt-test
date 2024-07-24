// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/robots"],
  css: ['~/assets/css/main.css'],
  image: {
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    },
  },
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }]
    }
},
})