/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      zIndex: {
        "5": "5",
        "15": "15",
        "25": "25",
        "35": "35",
        "45": "45",
      },
    },
  },
  plugins: [],
}

