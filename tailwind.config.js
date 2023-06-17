/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        pm: '#ED8E26',
        sn: '#8A5C28',
        lightGrey: '#E4E4E4',
        darkGrey: '#8F8F8F',
        white: '#ffffff',
        black: '#000000',
        text: '#434343',
        btbg: '#D26E00'
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/Home/Hero/hero-pic.png')",
        'footer': "url('/src/assets/images/Home/footer/Rectangle 20.png')",
        

      }
    },
  },
  plugins: [],
}

