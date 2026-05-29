import Link from 'next/link';
import { FaGraduationCap, FaLock, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import Logo from '../components/Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-400 border-t border-slate-800 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 text-white font-serif font-bold text-xl">
               <Logo className="h-12" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium university assignment assistance, research modeling, and dissertation mentorship with absolute deadline protection.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/" className="hover:text-white transition-all">Home</Link>
              <Link href="/services" className="hover:text-white transition-all">Services</Link>
              <Link href="/about" className="hover:text-white transition-all">About Me</Link>
              <Link href="/caces" className="hover:text-white transition-all">CaseStudies</Link>
              <Link href="https://wa.me/94757114126" target="_blank" className="hover:text-white transition-all text-emerald-400 font-medium">WhatsApp</Link>
              <Link href="/blog" className="hover:text-white transition-all">Blog</Link>
              <Link href="/policy" className="hover:text-white transition-all">
  Privacy Policy & Terms
</Link>
            </div>
          </div>

          {/* Column 3: Trust Badges */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Guaranteed Security</h4>
            <div className="space-y-2.5 text-xs md:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <FaLock className="text-amber-400 shrink-0" size={14} />
                <span>100% Confidential Layouts</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <FaCheckCircle className="text-emerald-400 shrink-0" size={14} />
                <span>Plagiarism-Free Turnitin Check</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Academic Portfolio. All Rights Reserved.</p>
          <p className="text-slate-500">
            Crafted with ❤️ for Higher Education Success.
          </p>
        </div>
      </div>
    </footer>
  );
}