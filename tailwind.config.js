/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'white':'#ffffff',
      'primary': '#416D19',
      'secondary': '#E8EFCF',
      'darkgrey':'#2c2f33',
      'grey':'#B4B4B8'
      
    },
    extend: {
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1570316376196-461ab6c2c998?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

