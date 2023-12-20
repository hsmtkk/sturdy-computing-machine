// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://fonts.xz.style/serve/inter.css' }, { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css' }]
    }
  },
})
