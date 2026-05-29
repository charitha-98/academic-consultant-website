'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // සයිට් එක ලෝඩ් වෙද්දීම කලින් යූසර් සිලෙක්ට් කරපු තීම් එක කියවීම
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // තීම් එක මාරු කරන Function එක
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-105 active:scale-95 transition-all shadow-sm border border-slate-200 dark:border-slate-700"
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        // ☀️ Sun Icon (පෙන්වන්නේ ඩාර්ක් මෝඩ් එකේදී)
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-amber-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.69 1.69m12.18 12.18l1.69 1.69m0-16.38l-1.69 1.69m-12.18 12.18l-1.69 1.69M5.25 12H3m18 0h-2.25m-14.25 0a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" />
        </svg>
      ) : (
        // 🌙 Moon Icon (පෙන්වන්නේ ලයිට් මෝඩ් එකේදී)
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12.83A9.54 9.54 0 0 1 12.17 3.63 9.54 9.54 0 0 0 3.81 12.2a9.54 9.54 0 0 0 9.14 9.34 9.54 9.54 0 0 0 8.8-8.71Z" />
        </svg>
      )}
    </button>
  );
}