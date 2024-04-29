/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'aj-background': '#171012',
        'dracula-pink': '#FF79C6',
        'dracula-hover': '#E56CB2',
        'off-white': '#c7c1c1',
        'overlay': 'rgba(0, 0, 0, 0.2);',
        'form': 'rgba(255, 255, 255, 0.1);',
        'aj-border': 'rgba(255, 255, 255, 0.1);',
      },
      boxShadow: {
        'bxs': "0 0 10px #FF79C6",
      },
    },
  },
  plugins: [],
};
