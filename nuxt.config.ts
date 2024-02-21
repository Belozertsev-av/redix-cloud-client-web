// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/_variables.scss" as *;`
        }
      }
    }
  },
  app: {
    head: {
      title: "Редикс.Диск интуитивное облачное хранилище",
      meta: [
        {
          name: 'description', content: 'Test page'
        }
      ],
      link: [
        { rel: 'icon', href: '/redix_logo.png', type: 'image/png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap' }
      ]
    }
  },
  css: ["~/assets/scss/main.scss"],
})

