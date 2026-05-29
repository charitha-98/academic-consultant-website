/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🎯 👈 මෙන්න මේ පේළිය ඇතුළත් කරන්න මචං. 
  // මේකෙන් තමයි බ්‍රවුසර් එකේ 'dark' ක්ලාස් එක වැටුණාම සයිට් එක ඩාර්ක් කරන්නේ.
  darkMode: 'class', 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};