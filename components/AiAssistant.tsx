
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Bot, Brain, Send, User } from 'lucide-react';
import { getAiResponse } from '../services/gemini.ts';
import { Message } from '../types.ts';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Ashok's digital twin. Ask me anything about his expertise or work history." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getAiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <div className="relative">
        {/* Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 ${isOpen ? 'bg-white text-black' : 'bg-blue-600 text-white'} rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 z-50 relative`}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
              className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-[400px] bg-[#0f172a] border border-blue-500/20 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 bg-blue-600/10 border-b border-blue-500/10 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Brain size={20} />
                </div>
                <div>
                  <p className="text-white font-display font-bold text-sm">Ashok's AI Assistant</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                    <span className="text-[9px] text-blue-400 uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>

              <div ref={scrollRef} className="h-[350px] md:h-[400px] overflow-y-auto p-6 space-y-4 bg-surface/30">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white font-medium rounded-tr-none' 
                        : 'bg-white/5 text-slate-300 rounded-tl-none border border-white/5'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex gap-1.5 items-center">
                      <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t border-blue-500/10 flex gap-2 bg-surface/50">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about his projects..."
                  className="flex-1 bg-white/5 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button type="submit" className="w-10 h-10 bg-blue-600 rounded-xl text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AiAssistant;
