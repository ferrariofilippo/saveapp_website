// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/webp',
          href: '/favicon.webp',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  ssr: true,

  typescript: {
    strict: true,
  },

  modules: [
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts", 
      {
        families: {
          Quicksand: true,
          download: true,
          inject: true,
        },
      },
    ],
  ],

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  compatibilityDate: '2024-08-22'
})