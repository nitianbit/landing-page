const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      width: {
        '7/10': '70%',
        '3/10': '30%',
      },
      scrollBehavior: 'smooth',
      fontFamily: {
        rasputin: ['Rasputin', 'sans-serif'], 
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
