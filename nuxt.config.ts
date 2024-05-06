// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/style/normalization.scss',
    '@/style/global.scss',
  ],
  modules: ["nuxt-bootstrap-icons"],
})
