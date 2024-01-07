/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements-react/dist/js/**/*.js",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
      extend: {},
      
        colors: {
          'sfprimary': '#2d2926',
          'sfsecondary': '#c8102e',
          // --fontColor: #35373a;
          // --primaryColor2: #97999b;
          'sfsecondary2': '#eca154',
          'sfprimary3': '#bbbcbc',
          'sfsecondary3': '#c6aa76',
        },
      
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
  }