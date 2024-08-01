/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./presets/**/*.{js,vue,ts}",
    'node_modules/tailwindcss-primeui/**/*.{js,ts,jsx,tsx,vue}'
  ],
  theme: {
    extend: {

    },
  },
  plugins: [ require('tailwindcss-primeui')],
}