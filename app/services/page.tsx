import Link from 'next/link';
import { 
  FaBookOpen, FaFileAlt, FaGraduationCap, FaSearch, 
  FaCheckDouble, FaArrowRight, FaLaptopCode, FaChartBar, FaStethoscope 
} from 'react-icons/fa';

export default function ServicesPage() {
  
  const services = [
    {
      icon: <FaBookOpen size={32} className="text-blue-600" />,
      title: "Custom Assignment Writing",
      desc: "High-quality, well-researched assignment support tailored to your university guidelines. Includes essays, case studies, and business reports.",
      features: ["Proper Structure", "APA/Harvard/In-text Referencing", "Turnitin Report Included"]
    },
    {
      icon: <FaFileAlt size={32} className="text-indigo-600" />,
      title: "Research Proposals & Projects",
      desc: "Complete guidance for your final year research projects. We help you draft flawless methodologies, literature reviews, and data analysis concepts.",
      features: ["Topic Selection Help", "Rigorous Literature Review", "Methodology Design"]
    },
    {
      icon: <FaGraduationCap size={32} className="text-purple-600" />,
      title: "Master's & BSc Dissertations",
      desc: "End-to-end dissertation writing mentorship. We assist you through every single chapter to ensure a masterfully structured final thesis.",
      features: ["Chapter-by-Chapter Submission", "Data Analysis Support", "Defense Preparation Tips"]
    },
    {
      icon: <FaSearch size={32} className="text-amber-600" />,
      title: "Academic Proofreading & Editing",
      desc: "Already written your paper but worried about grammar, flow, or layout? We refine your work to match elite academic publication standards.",
      features: ["Grammar & Flow Fixes", "Plagiarism Reduction", "Formatting Alignment"]
    }
  ];

  const subjects = [
    { name: "Business & Management", icon: <FaChartBar /> },
    { name: "Information Technology & CS", icon: <FaLaptopCode /> },
    { name: "Nursing & Healthcare", icon: <FaStethoscope /> },
    { name: "Humanities & Social Sciences", icon: <FaBookOpen /> }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* 📑 HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            Our Academic Services
          </h1>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded"></div>
          <p className="text-slate-600 mt-4 text-base">
            Professional, confidential, and comprehensive support designed to help undergraduate and postgraduate students succeed.
          </p>
        </div>

        {/* 🛠SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="bg-slate-50 p-4 rounded-xl w-fit mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 font-serif">{service.title}</h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">{service.desc}</p>
                
                <ul className="mt-6 space-y-2.5">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-slate-700">
                      <FaCheckDouble className="text-emerald-500 shrink-0" size={14} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-50">
                <Link 
                  href="https://wa.me/94757114126" 
                  target="_blank"
                  className="text-blue-600 font-semibold text-sm inline-flex items-center gap-1.5 hover:text-blue-700 transition-all"
                >
                  Inquire About This Service <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 📚 SUBJECT AREAS (මොබයිල් ෆික්ස් කරපු සුපිරි Glassmorphic Layout එක) */}
        <div className="bg-white/70 dark:bg-slate-950/40 backdrop-blur-md p-6 sm:p-10 rounded-3xl border-slate-200/40 dark:border-slate-800/40 shadow-sm mb-24 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center font-serif mb-2">Major Disciplines We Cover</h3>
          <p className="text-slate-500 dark:text-slate-100 text-center text-sm mb-10">Expert academic support across multiple specialized faculties.</p>
          
          {/* 🛠️ මෙතන grid-cols-1 දාලා sm:grid-cols-2 කරපු නිසා මොබයිල් එකේදී පිටතට පනින්නේ නැහැ මචං */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((sub, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/60 dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl  border-slate-200/50 dark:border-slate-800/50 flex items-center gap-3.5 font-semibold text-slate-700 dark:text-slate-200 text-sm hover:bg-blue-50/50 dark:hover:bg-blue-950/30 hover:border-blue-200 dark:hover:border-blue-800 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 shadow-sm"
              >
                {/* Icon wrapper එක shrink නොවෙන්න flex-shrink-0 එකක් දැම්මා */}
                <span className="text-blue-600 dark:text-blue-400 text-lg flex-shrink-0 bg-blue-50 dark:bg-blue-950/60 p-2 rounded-lg">
                  {sub.icon}
                </span>
                {/* දිග අකුරු තිබුණත් ලස්සනට ගැලපෙන්න truncate නොවී wrap වෙන්න ඉඩ හැදුවා */}
                <span className="leading-tight break-words pr-2">
                  {sub.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔄 THE PROCESS SECTION */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center font-serif mb-12">How It Works</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto text-lg shadow-md shadow-blue-200">1</div>
              <h4 className="font-bold text-slate-800 mt-4 text-base">Submit Requirements</h4>
              <p className="text-slate-500 text-xs mt-2 px-4">Send your criteria sheet, rubrics, and deadline via WhatsApp.</p>
            </div>
            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto text-lg shadow-md shadow-blue-200">2</div>
              <h4 className="font-bold text-slate-800 mt-4 text-base">Get a Price Quote</h4>
              <p className="text-slate-500 text-xs mt-2 px-4">We review the guidelines and offer a fair, affordable price.</p>
            </div>
            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto text-lg shadow-md shadow-blue-200">3</div>
              <h4 className="font-bold text-slate-800 mt-4 text-base">Expert Execution</h4>
              <p className="text-slate-500 text-xs mt-2 px-4">We write, proofread, and run plagiarism checks on your document.</p>
            </div>
            {/* Step 4 */}
            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mx-auto text-lg shadow-md shadow-emerald-200">4</div>
              <h4 className="font-bold text-slate-800 mt-4 text-base">On-Time Delivery</h4>
              <p className="text-slate-500 text-xs mt-2 px-4">Receive your high-scoring, custom-made paper ahead of time.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}