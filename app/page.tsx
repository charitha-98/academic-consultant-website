import Link from 'next/link';
import { 
  FaGraduationCap, FaBookOpen, FaFileAlt, FaAward, 
  FaUserShield, FaClock, FaCheckCircle, FaStar, FaQuoteLeft 
} from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* 🌟 1. HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className=" text-emerald-300 text-xs md:text-sm font-semibold rounded-full uppercase tracking-wider ">
            100% Confidential & Plagiarism-Free Guarantee
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 tracking-tight leading-tight font-serif text-slate-100">
            Achieve Your Dream Grades <br className="hidden md:block"/>
            <span className="text-amber-400">With Expert Academic Support</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mt-6 max-w-2xl mx-auto font-sans leading-relaxed">
            Professional guidance for University Assignments, Research Projects, and Dissertations tailored to premium academic standards.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link 
              href="https://wa.me/94757114126" // 🚨 Girlfriend ගේ WhatsApp ලින්ක් එක මෙතනට
              target="_blank"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-900/30 transition-all hover:-translate-y-0.5"
            >
              Get Expert Help Now
            </Link>
            <a 
              href="#services"
              className="bg-white/10 hover:bg-white/20 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all border border-white/10 backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* 🏆 2. QUALIFICATIONS & EXPERTISE SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Why Trust My Service?</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded"></div>
          <p className="text-slate-600 mt-4">Direct guidance from a highly qualified academic writer with a proven track record.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="bg-amber-100 text-amber-600 p-4 rounded-full w-fit mx-auto"><FaGraduationCap size={24} /></div>
            <h4 className="text-lg font-bold text-slate-800 mt-4">Postgraduate Qualified</h4>
            <p className="text-slate-500 text-sm mt-2">Holding advanced university degrees ensuring deep research understanding.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-fit mx-auto"><FaAward size={24} /></div>
            <h4 className="text-lg font-bold text-slate-800 mt-4">5+ Years Experience</h4>
            <p className="text-slate-500 text-sm mt-2">Successfully guided 500+ undergraduate & master's level students.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full w-fit mx-auto"><FaUserShield size={24} /></div>
            <h4 className="text-lg font-bold text-slate-800 mt-4">100% Privacy</h4>
            <p className="text-slate-500 text-sm mt-2">Your identity, university info, and data are permanently secured.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="bg-purple-100 text-purple-600 p-4 rounded-full w-fit mx-auto"><FaClock size={24} /></div>
            <h4 className="text-lg font-bold text-slate-800 mt-4">On-Time Delivery</h4>
            <p className="text-slate-500 text-sm mt-2">Guaranteed submissions before your deadline, giving time for review.</p>
          </div>
        </div>
      </section>

      {/* 🛠Header 3. SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-100 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Tailored Academic Solutions</h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all">
              <div className="bg-blue-100 p-4 rounded-xl w-fit text-blue-600"><FaBookOpen size={28} /></div>
              <h3 className="text-xl font-bold mt-4 text-slate-800">Custom Assignments</h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">Comprehensive, structure-focused writing for essays, case studies, and business reports across multiple fields.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all">
              <div className="bg-indigo-100 p-4 rounded-xl w-fit text-indigo-600"><FaFileAlt size={28} /></div>
              <h3 className="text-xl font-bold mt-4 text-slate-800">Research & Projects</h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">End-to-end assistance on final year research projects, literature reviews, and empirical analysis templates.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all">
              <div className="bg-purple-100 p-4 rounded-xl w-fit text-purple-600"><FaGraduationCap size={28} /></div>
              <h3 className="text-xl font-bold mt-4 text-slate-800">Theses & Dissertations</h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">Rigorous academic formatting and writing mentorship from initial thesis proposal to the final conclusion draft.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 💬 4. TESTIMONIALS (STUDENT FEEDBACK) SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">What Our Students Say</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded"></div>
          <p className="text-slate-600 mt-4">Real feedback from undergraduates and masters candidates who achieved success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feedback 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative pt-12">
            <span className="absolute top-6 left-8 text-amber-400 opacity-20"><FaQuoteLeft size={40} /></span>
            <div className="flex text-amber-400 gap-1 mb-4"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="text-slate-600 text-sm italic leading-relaxed">
              "I was struggling with my final year management thesis. The research framework provided was exceptional and helped me secure an A grade! Highly recommended."
            </p>
            <div className="mt-6 border-t border-slate-100 pt-4">
              <h5 className="font-bold text-sm text-slate-800">Nisansala K.</h5>
              <p className="text-xs text-slate-400 mt-0.5">BBA Undergraduate Candidate</p>
            </div>
          </div>
          {/* Feedback 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative pt-12">
            <span className="absolute top-6 left-8 text-amber-400 opacity-20"><FaQuoteLeft size={40} /></span>
            <div className="flex text-amber-400 gap-1 mb-4"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="text-slate-600 text-sm italic leading-relaxed">
              "Amazing response time and absolute confidentiality. The formatting (APA 7th edition) and referencing were absolutely flawless. Worth every rupee."
            </p>
            <div className="mt-6 border-t border-slate-100 pt-4">
              <h5 className="font-bold text-sm text-slate-800">Devinda W.</h5>
              <p className="text-xs text-slate-400 mt-0.5">MBA Postgraduate Student</p>
            </div>
          </div>
          {/* Feedback 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative pt-12">
            <span className="absolute top-6 left-8 text-amber-400 opacity-20"><FaQuoteLeft size={40} /></span>
            <div className="flex text-amber-400 gap-1 mb-4"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="text-slate-600 text-sm italic leading-relaxed">
              "Saved me during a huge time crunch! The assignments were written exactly matching the university criteria sheet, and they passed Turnitin plagiarism check easily."
            </p>
            <div className="mt-6 border-t border-slate-100 pt-4">
              <h5 className="font-bold text-sm text-slate-800">Shamil A.</h5>
              <p className="text-xs text-slate-400 mt-0.5">BSc IT Undergraduate Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 5. FINAL CALL TO ACTION */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-serif">Don't Let Deadlines Stress You Out</h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Get professional academic assistance today. Let's work together to boost your grades safely and confidentially.
          </p>
          <div className="mt-8">
            <Link 
              href="https://wa.me/94757114126"
              target="_blank"
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              Contact on WhatsApp Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}