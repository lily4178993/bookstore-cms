/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#307bbe',
        secondary: '#0290ff',
        ternary: '#fafafa',
        errorColor: '#1e1e1e',
        halo: '#cde2f4a6',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
