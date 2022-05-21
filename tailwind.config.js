module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('/src/img/fondo.jpg')",
      },
      boxShadow: {
        'sombra': '0px 0px 10px 5px rgba(0,0,0,0.1)',
      }
    }
  },
  plugins: [],
}