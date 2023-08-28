/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
  
    extend: {
      
      colors: {
        'main': '#ffffff',
        'action': {
          50: '#f9f5f2',
          100: '#f3ebe5',
          200: '#e3d0c9',
          300: '#d3b4ad',
          400: '#b78b7a',
          500: '#9b6250',
          600: '#8b5849',
          700: '#744b3e',
          800: '#5d3d33',
          900: '#c5925a',
        }
      },
      // applying a global font
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Raleway Dots',
          },
        },
      },
    },
    
  },
  plugins: [ require('flowbite/plugin'),  require('@tailwindcss/typography'),],
}

