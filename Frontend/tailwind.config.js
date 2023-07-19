/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      texts: ["bold"]
    },
    extend: { colors : {
      'custom-gray': '#9B9999',
      'custom-body': '#2E2B2B'
    }},
  },
  plugins: [],
}

