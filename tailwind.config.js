module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      Mulish: ['Mulish', 'sans-serif'],
    },
    colors: {
      black: '#010505',
      orange: '#EC642A',
      purple: '#270B79',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
};
