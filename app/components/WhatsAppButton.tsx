'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = "94757114126"; // 🚨 මෙතනට Girlfriend ගේ WhatsApp අංකය දාන්න (උදා: 94771234567)
  const message = encodeURIComponent("Hi! I visited your website and I need some help with an academic assignment/project. Can we discuss?");
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group animate-bounce"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="absolute right-16 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}