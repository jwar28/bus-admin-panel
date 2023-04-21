// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@nuxt/devtools'],
  srcDir: 'src',
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
});
