import Link from 'next/link';
import { FaGraduationCap, FaAward, FaSearch, FaUserShield, FaHandshake, FaCheckCircle } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* 📑 HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            About Me
          </h1>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded"></div>
          <p className="text-slate-600 mt-4 text-base">
            Bridging the gap between academic pressure and premium university success.
          </p>
        </div>

        {/* 👩‍🏫 PERSONAL BRAND / STORY SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Side: Professional Bio (Taking 7 columns) */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-serif leading-snug">
              Dedicated to Helping Students <br/>
              <span className="text-blue-600">Achieve Excellence Honestly</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Welcome to my academic portfolio! As a postgraduate qualified academic writer and researcher, I have spent the last 5+ years mentoring and assisting undergraduate and master's level students through their toughest coursework challenges.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              I understand how overwhelming university life can get—balancing part-time work, exams, and massive research deadlines. My mission is to relieve that stress by providing thoroughly researched, impeccably structured, and 100% original academic templates, reports, and dissertations.
            </p>
            
            <div className="pt-4">
              <Link 
                href="https://wa.me/947XXXXXXXX" // 🚨 Girlfriend ගේ WhatsApp ලින්ක් එක මෙතනට
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all inline-block text-sm"
              >
                Let's Discuss Your Project
              </Link>
            </div>
          </div>

          {/* Right Side: Quick Highlights/Stats Box (Taking 5 columns) */}
          <div className="md:col-span-5 bg-gradient-to-br from-blue-950 to-indigo-950 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-white/5 pointer-events-none">
              <FaGraduationCap size={200} />
            </div>
            
            <h3 className="text-xl font-bold font-serif mb-6 text-amber-400">Quick Credentials</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-2.5 rounded-xl text-amber-400 mt-1"><FaGraduationCap size={20} /></div>
                <div>
                  <h4 className="font-semibold text-sm">Postgraduate Degree Holder</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Deep expertise in advanced research methodology and literature compilation.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-2.5 rounded-xl text-amber-400 mt-1"><FaAward size={20} /></div>
                <div>
                  <h4 className="font-semibold text-sm">5+ Years in Consultation</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Successfully guided 500+ assignments and final year dissertations.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-2.5 rounded-xl text-amber-400 mt-1"><FaSearch size={20} /></div>
                <div>
                  <h4 className="font-semibold text-sm">Turnitin Expert</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Flawless paraphrasing guarantees strict adherence to zero-plagiarism policies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🤝 CORE ACADEMIC PILLARS */}
        <div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center font-serif mb-2">My Code of Conduct</h3>
          <p className="text-slate-500 text-center text-sm mb-12">Every document delivered passes through a strict quality screening protocol.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-emerald-500 flex items-center gap-2 font-bold font-serif text-lg">
                <FaCheckCircle size={18} /> Absolute Privacy
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-6">
                Your personal identity, phone number, and university credentials will never be shared with any third party. Your trust is my highest asset.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-emerald-500 flex items-center gap-2 font-bold font-serif text-lg">
                <FaCheckCircle size={18} /> Zero AI Spams
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-6">
                Unlike generic writing services, every template is drafted through rigorous manual reading, scientific indexing, and academic journals.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-emerald-500 flex items-center gap-2 font-bold font-serif text-lg">
                <FaCheckCircle size={18} /> Strict Deadline Safety
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-6">
                I map out every task to finish at least 48 hours prior to your submission deadline, giving you enough time to read and request modifications if needed.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}