/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      paradiso: '#107E86',
      charlotte: '#BEEAF2',
      'sherpa-blue': '#0C484C',
      botticelli: '#CDE3E8',
      'fountain-blue': '#5CBCC4',
      viking: '#7ACBDA',
      'eagle-green': '#0C555E',
      'eerie-black': '#242424',
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio'),
  ],
};
