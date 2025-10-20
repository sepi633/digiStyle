import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["@nuxt/image", "@nuxt/ui"],

  ui: {
    icons: {
      collections: ['heroicons']
    }
  }
})
