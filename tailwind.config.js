module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/login.jpg')",
        'carousel-pattern': "url('assets/01.png')",
        'footer-texture': "url('assets/zab.jpg')",
      }
    },
  },
  plugins: [],
}
