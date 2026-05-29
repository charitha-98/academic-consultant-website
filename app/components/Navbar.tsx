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
    { name: 'CaseStudies', href: '/cases' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm w-full bg-transparent transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="flex items-center gap-2.5 text-blue-900 font-serif font-bold text-lg md:text-xl">
          <Logo className="h-12" />
          
        </Link>
        

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-all ${
                  isActive 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
  href="https://wa.me/94757114126?text=Hello!%20I%20visited%20your%20website%20and%20I%20would%20like%20to%20get%20some%20academic%20consultation%20help."
  target="_blank"
  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-blue-200"
>
  Get Help
</Link>
<div className="flex items-center gap-4">
        {/* 🎯 👈 මෙන්න මෙතනින් තීම් බටන් එක වැටෙනවා */}
        <ThemeToggle /> 
      </div>
        </div>

        {/* 📱 Mobile Hamburger Button */}
        <button 
          onClick={() => {
            console.log("Hamburger Clicked! Current state:", !isOpen); // 👈 ටර්මිනල් එකේ නෙවෙයි, Browser Console එකේ බලන්න මචං
            setIsOpen(!isOpen);
          }} 
          className="block md:hidden p-2 text-slate-700 focus:outline-none"
          type="button"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* 🗺 Mobile Dropdown Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 shadow-md absolute top-16 left-0 w-full z-50`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-semibold py-2.5 px-2 rounded-lg ${
                isActive ? 'text-blue-600 bg-blue-50 font-bold' : 'text-slate-600'
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
  className="block bg-blue-600 text-white text-center text-sm font-bold py-3 rounded-xl mt-4"
>
  Contact on WhatsApp
</Link>
      </div>
    </nav>
  );
}