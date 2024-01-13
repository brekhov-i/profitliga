// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Профит Лига: Вы приглашены на онлайн-собеседование"
    },
    baseURL: "/profitliga/"
  },
  components: [
    {
      path: '~/components',
      prefix: 'pt',
      pathPrefix: false,
    },
  ],
  router: {
    options: {
      scrollBehaviorType: "smooth"
    }
  },
  css: [
    '@/assets/styles/fonts.scss',
    '@/assets/styles/vars.scss',
    '@/assets/styles/main.scss',
  ],
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  webpack: {
    optimizeCSS: true,
    extractCSS: true,
  },
})
