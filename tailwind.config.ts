import type { Config } from "tailwindcss";

const config: Config = {
  // 🎯 👈 මෙන්න මේ පේළිය ඇතුළත් කරන්න. එතකොට html ටැග් එකට 'dark' ක්ලාස් එක ආවම Tailwind ඔටෝමැටිකලි ඩාර්ක් වෙනවා.
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
export default config;