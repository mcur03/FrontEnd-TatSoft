module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffff', 
        secondary: '#9333ea',
      },
      fontFamily: {
        literata: ['"Literata"', 'serif'], 
      },
    },
  },
  plugins: [],
};
