/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f49957',
        dark: '#100f0f',
        cream: '#f8f4f2',
        'light-orange': '#ffddaa',
        'warm-gray': '#e4ddd6',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
