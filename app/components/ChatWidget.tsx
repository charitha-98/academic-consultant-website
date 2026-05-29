'use client';

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(''); // 👈 අලුත් SDK එකේ input එක සාමාන්‍ය React State එකක් විදිහට ගන්නවා
  
  // 👈 Version 6 එකේ useChat එකෙන් ලැබෙන්නේ මේ ටික විතරයි මචං
  const { messages, sendMessage, status } = useChat();

  const isThinking = status === 'streaming' || status === 'submitted';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && status === 'ready') {
      sendMessage({ text: input }); // 👈 මැසේජ් එක යවන්නේ මෙහෙමයි
      setInput(''); // Input එක clear කිරීම
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
          </svg>
          <span className="text-sm font-bold pr-1">Chat with Expert</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-slate-950 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <div>
                <h3 className="text-sm font-bold">AcademicAI Assistant</h3>
                <p className="text-[10px] text-slate-400">Ask anything about assignments</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-slate-50">
            {messages.length === 0 && (
              <div className="text-center py-8 text-slate-500 text-xs px-4">
                👋 Hi! I can help you with assignment structures, thesis advice, or guide you on getting custom academic expert help. Ask me anything!
              </div>
            )}
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'}`}>
                  {/* 👈 Version 6 එකේ content එක පෙන්වන්නේ මෙහෙම parts වලට map කරලා මචං */}
                  {m.parts.map((part, index) => part.type === 'text' ? <span key={index}>{part.text}</span> : null)}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3 text-slate-400 text-xs flex items-center gap-1 shadow-sm">
                  Thinking<span className="animate-bounce">.</span><span className="animate-bounce [animation-delay:0.2s]">.</span><span className="animate-bounce [animation-delay:0.4s]">.</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleFormSubmit} className="p-3 border-t border-slate-200 bg-white flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your doubt here..."
              disabled={status !== 'ready'}
              className="flex-grow border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-600 transition-colors disabled:opacity-50"
            />
            <button type="submit" disabled={status !== 'ready' || !input.trim()} className="bg-slate-900 text-white px-3 py-2 rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors disabled:opacity-50">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}