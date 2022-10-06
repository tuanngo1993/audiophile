// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    // CSS file in the project
    "@/assets/css/_fonts.css",
  ],
  modules: ["@unocss/nuxt"],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    preflight: true,
    theme: {
      colors: {
        dark: "#131313",
        primary: "#D87D4A",
        secondary: "#101010",
        grey: "#F1F1F1",
        light: {
          grey: "#FAFAFA",
          primary: "#fbaf85",
        },
      },
      letterSpacing: {
        wide: "2px",
        widest: "10px",
      },
    },
  },
});
