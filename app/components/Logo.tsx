import React from 'react';

export default function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* 🏛️ Professional Academic Crest & AI Shield Icon */}
      <svg className="h-full w-auto aspect-square overflow-visible" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left Side Shield - Oxford Navy (Authority) */}
        <path d="M100 25L40 50V110C40 145 100 175 100 175V25Z" fill="#0F172A" />
        
        {/* Right Side Shield - Academic Blue (Trust) */}
        <path d="M100 25L160 50V110C160 145 100 175 100 175V25Z" fill="#1D4ED8" />
        
        {/* Left Dynamic Wing - Cyan (Innovation) */}
        <path d="M40 75L80 90L100 25L40 75Z" fill="#06B6D4" />
        
        {/* Right Dynamic Wing - Light Cyan (AI Future) */}
        <path d="M160 75L120 90L100 25L160 75Z" fill="#22D3EE" />
        
        {/* Top Success Node - Emerald (Top Grades) */}
        <circle cx="100" cy="20" r="10" fill="#10B981" />
        
        {/* Elegant Bottom Growth Arc */}
        <path d="M45 185C75 195 125 195 155 185" stroke="#06B6D4" strokeWidth="5" strokeLinecap="round" />
      </svg>

      {/* ✍️ Executive Level Typography */}
      <div className="flex flex-col justify-center font-sans">
        <div className="text-xl font-extrabold tracking-tight text-slate-900 leading-none flex items-center">
          Academic<span className="text-blue-600 font-black ml-0.5">AI</span>
        </div>
        <div className="text-[8.5px] font-black tracking-[0.25em] text-slate-400 uppercase mt-1">
          CONSULTING GROUP
        </div>
      </div>
    </div>
  );
}