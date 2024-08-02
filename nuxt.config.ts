// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/style/normalization.scss',
    '@/style/global.scss',
  ],
  modules: ['nuxt-bootstrap-icons', '@nuxtjs/i18n', '@vueuse/nuxt', ['@pinia/nuxt', {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  }], "@nuxt/eslint"],
  imports: {
    dirs: ['stores']
  },
  i18n: {
    pages: {
      tools: false
    },
    lazy: true,
    langDir: 'locales',
    strategy: "prefix",
    defaultLocale: 'en',
    locales: [
      { code: 'nl', iso: 'nl-NL', name: 'Nederlands', file: 'nl-NL.json' },
      { code: 'en', iso: 'en-US', name: 'English(US)', file: 'en-US.json' },
    ],
  },
  nitro: {
    firebase: {
      nodeVersion: "20",
      gen: 2,
    },
    preset: "firebase"
  }
})