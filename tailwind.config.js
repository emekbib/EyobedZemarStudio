/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b8d8a',
        dark: '#064f4c',
        cream: '#fffaf0',
        'light-orange': '#f9e5a5',
        'warm-gray': '#e6ddd0',
        coral: '#ff642d',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
