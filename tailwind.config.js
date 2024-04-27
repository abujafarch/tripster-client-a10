/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'raleway':['Raleway', 'sans-serif'],
      'inter':['Inter', 'sans-serif'],
      'poppins':['Poppins', 'sans-serif'],
      'kaushan': ['Kaushan Script', 'cursive'],
      'macondo': ['Macondo', 'cursive'],
      'platypi': ['Platypi', 'serif'],
      'bebas':['Bebas Neue', 'sans-serif']
    },
    screens: {
      'md-lg': '930px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        'dark-blue': '#1D4E89',
        'light-blue':'#00B2CA',
        'green' : '#7DCFB6',
        'orange': '#F79256',
        'yellow' : '#FBD1A2'
      },
      boxShadow: {
        'my-shadow': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      }
    },
  },
  plugins: [require("daisyui")],
}

