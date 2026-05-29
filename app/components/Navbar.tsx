'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../components/Logo';
import ThemeToggle from '../components/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/cases' },
    { name: 'About', href: '/about' },
  ];

  return (
    // 🔮 👈 මෙන්න මෙතනට Luxury Glass Effects ටික දැම්මා මචං:
    // 1. bg-white/70 සහ bg-slate-900/70 (70% Transparent බැක්ග්‍රවුන්ඩ් එකක්)
    // 2. backdrop-blur-md (යටින් යන දේවල් ඇපල් සයිට් එකේ වගේ බ්ලර් වෙනවා)
    // 3. border-slate-200/40 (හීනී ලස්සන ට්‍රාන්ස්පේරන්ට් බෝඩර් එකක්)
    <nav className="sticky top-0 z-50 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-800/40 transition-colors duration-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="h-9" />
        </Link>
        

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                // 🌗 Dark mode text colors ඇතුළත් කරා මචං
                className={`text-sm font-semibold transition-all ${
                  isActive 
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link
            href="https://wa.me/94757114126?text=Hello!%20I%20visited%20your%20website%20and%20I%20would%20like%20to%20get%20some%20academic%20consultation%20help."
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-blue-200 dark:shadow-none"
          >
            Get Help
          </Link>
          
          <div className="flex items-center">
            <ThemeToggle /> 
          </div>
        </div>

        {/* 📱 Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="block md:hidden p-2 text-slate-700 dark:text-slate-300 focus:outline-none"
          type="button"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            // Hamburger (☰) Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* 🗺 Mobile Dropdown Menu (මෙන්න මේකත් Glassmorphism කරා මචං) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 px-6 py-4 space-y-3 shadow-md absolute top-16 left-0 w-full z-50`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-semibold py-2.5 px-2 rounded-lg transition-all ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-950/40 font-bold' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        <Link
          href="https://wa.me/94757114126?text=Hello!%20I%20visited%20your%20website%20and%20I%20would%20like%20to%20get%20some%20academic%20consultation%20help."
          target="_blank"
          onClick={() => setIsOpen(false)}
          className="block bg-blue-600 text-white text-center text-sm font-bold py-3 rounded-xl mt-4 shadow-sm"
        >
          Contact on WhatsApp
        </Link>
      </div>
    </nav>
  );
}