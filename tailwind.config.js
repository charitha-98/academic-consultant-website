/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 මේක සුපිරියටම තියෙනවා
  content: [
    // 🎯 👈 මෙන්න මෙතනින් "./src" කෑල්ල මම අයින් කරා මචං. දැන් Tailwind එකට ඔයාගේ ෆෝල්ඩර්ස් කෙලින්ම අහුවෙනවා!
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};