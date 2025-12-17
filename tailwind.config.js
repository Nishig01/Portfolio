module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        'uf-orange': '#FA4616',
        'uf-blue': '#0021A5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
