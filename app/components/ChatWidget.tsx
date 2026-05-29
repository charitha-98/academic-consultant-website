'use client';

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  
  const { messages, sendMessage, status } = useChat();

  const isThinking = status === 'streaming' || status === 'submitted';

  const quickReplies = [
    { label: '💰 Prices & Rates', text: 'How much do you charge for an assignment?' },
    { label: '🛡️ Plagiarism Free?', text: 'Do you provide plagiarism-free work and AI reports?' },
    { label: '⏳ Urgent Deadlines', text: 'Can you complete an assignment within 24 hours?' },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && status === 'ready') {
      sendMessage({ text: input });
      setInput('');
    }
  };

  const handleQuickReplyClick = (text: string) => {
    if (status === 'ready') {
      sendMessage({ text });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* 🔘 Floating Action Button (FAB) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center hover:scale-105 active:scale-95 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
          </svg>
        </button>
      )}

      {/* 🔮 MAIN LUXURY GLASS CHAT WINDOW */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[530px] rounded-2xl shadow-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/40 dark:border-slate-800/40 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 transition-all duration-300">
          
          {/* 💎 GLASS HEADER */}
          <div className="bg-slate-900/40 dark:bg-slate-950/40 border-b border-slate-200/30 dark:border-slate-800/30 p-4 flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">AcademicAI Assistant</h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Ask anything about assignments</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 💬 MESSAGES AREA (Transparent for background glass effect) */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-transparent">
            {messages.length === 0 && (
              <div className="flex flex-col h-full justify-between py-2">
                <div className="text-center py-6 text-slate-600 dark:text-slate-300 text-xs font-medium px-4 leading-relaxed bg-white/40 dark:bg-slate-800/30 rounded-xl border border-slate-200/20">
                  👋 Hi! I can help you with assignment structures, thesis advice, or guide you on getting custom academic expert help. Ask me anything!
                </div>
                
                {/* Suggested Questions (Glassy Buttons) */}
                <div className="space-y-2 px-1">
                  <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider mb-1.5 pl-1">Suggested Questions:</p>
                  {quickReplies.map((reply, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickReplyClick(reply.text)}
                      disabled={status !== 'ready'}
                      className="w-full text-left bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/40 text-slate-700 dark:text-slate-200 p-2.5 rounded-xl text-xs font-semibold transition-all hover:bg-blue-50/50 dark:hover:bg-blue-950/30 hover:border-blue-300 dark:hover:border-blue-800 shadow-sm active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {reply.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Render Chat Messages */}
            {messages.map((m) => (
              <div key={m.id} className="space-y-1 animate-in fade-in duration-200">
                <div className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed whitespace-pre-line shadow-sm border ${
                    m.role === 'user' 
                      ? 'bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500 rounded-tr-none' 
                      : 'bg-white/90 dark:bg-slate-800/90 border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-100 rounded-tl-none'
                  }`}>
                    {m.parts.map((part, index) => part.type === 'text' ? <span key={index}>{part.text}</span> : null)}
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                {m.role === 'assistant' && !isThinking && (
                  <div className="flex justify-start pl-1 animate-in fade-in duration-300">
                    <a
                      href="https://wa.me/94757114126" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-sm transition-colors mt-1"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M planetary-path M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.204-3.517l.363.215c1.554.921 3.321 1.407 5.127 1.408 5.391 0 9.776-4.346 9.779-9.691.002-2.59-1.003-5.025-2.831-6.855S14.542 2.71 11.952 2.71c-5.393 0-9.782 4.346-9.785 9.692-.001 1.884.492 3.73 1.426 5.314l.235.399-1.004 3.668 3.754-.972zm10.744-5.378c-.295-.148-1.748-.865-2.019-.963-.272-.099-.471-.148-.668.148-.197.297-.764.963-.936 1.161-.172.197-.344.223-.639.074-.295-.148-1.246-.459-2.375-1.464-.877-.782-1.47-1.747-1.642-2.044-.172-.295-.018-.456.13-.603.133-.132.295-.346.443-.519.148-.173.197-.297.295-.495.099-.198.05-.371-.025-.519-.075-.148-.668-1.609-.916-2.203-.242-.582-.487-.504-.668-.513-.173-.008-.371-.01-.569-.01-.198 0-.519.074-.79.371-.272.297-1.038 1.015-1.038 2.477 0 1.462 1.062 2.873 1.211 3.071.148.198 2.092 3.194 5.068 4.479.708.306 1.261.489 1.691.626.712.226 1.36.194 1.872.118.571-.085 1.748-.715 1.995-1.404.247-.688.247-1.277.173-1.404-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                      Contact on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* AI Thinking Bubble (Glassy) */}
            {isThinking && (
              <div className="flex justify-start animate-in fade-in duration-200">
                <div className="bg-white/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 text-slate-500 dark:text-slate-400 rounded-2xl rounded-tl-none p-3 text-xs flex items-center gap-1 shadow-sm">
                  Thinking<span className="animate-bounce">.</span><span className="animate-bounce [animation-delay:0.2s]">.</span><span className="animate-bounce [animation-delay:0.4s]">.</span>
                </div>
              </div>
            )}
          </div>

          {/* ✍️ GLASS INPUT FORM AREA */}
          <form onSubmit={handleFormSubmit} className="p-3 bg-white/40 dark:bg-slate-900/40 border-t border-slate-200/30 dark:border-slate-800/30 flex gap-2 backdrop-blur-md">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your doubt here..."
              disabled={status !== 'ready'}
              // Input field එකත් Glassy කරා මචං:
              className="flex-grow bg-white/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors disabled:opacity-50"
            />
            <button 
              type="submit" 
              disabled={status !== 'ready' || !input.trim()} 
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors disabled:opacity-50 cursor-pointer shadow-sm"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}