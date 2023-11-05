// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }    ]
    }
  },
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets"
  },
  css: ["~/assets/scss/main.scss","plyr/dist/plyr.css"],
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "~/assets/scss/_variables.scss";',
              },
          },
      },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/image',
    '@formkit/nuxt',
    ['nuxt-mail', {
      message: {
        to: 'sgassama.autobiz@gmail.com',
      },
      smtp: {
        service: 'gmail',
        auth: {
          user: 'sgassama.autobiz@gmail.com',
          pass: 'ornk bnrh pbkt otrp',
        },
      },
    }],
  ],
  formkit: {
    autoImport: true
  }
})
