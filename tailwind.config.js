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
        'action':'#c5925a',
      },
    },
    
  },
  plugins: [ require('flowbite/plugin')],
}

