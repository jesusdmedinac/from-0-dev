/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      indigo: colors.indigo,
      'via-sky': colors['via-sky'],
      emerald: colors.emerald,
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
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
