// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      spinURL: process.env.SPIN_URL,
      scholarMode: process.env.SCHOLAR_MODE === 'true'
    }
  },

})
