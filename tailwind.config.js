module.exports = {
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f0a202",
          secondary: "#f18805",
          accent: "#181830",
          neutral: "#181830",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
};
