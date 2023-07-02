// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets"
  },
  css: ["~/assets/scss/main.scss"],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
})
