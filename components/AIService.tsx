
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Send, Sparkles, User } from 'lucide-react';
import { getShoppingAdvice } from '../geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIServiceProps {
  cartItems: string[];
  onBack: () => void;
}

const AIService: React.FC<AIServiceProps> = ({ cartItems, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm your FreshVeggies assistant. Ask me for recipe ideas or nutritional tips!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    const aiResponse = await getShoppingAdvice(cartItems, userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse || '' }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full animate-in slide-in-from-bottom duration-300">
      <div className="bg-[#0B121E] text-white px-6 pt-12 pb-6 flex items-center gap-4">
        <button onClick={onBack} className="bg-white/10 p-2 rounded-full">
            <ChevronLeft size={20} />
        </button>
        <div>
            <h1 className="text-lg font-bold">Chef Gemini</h1>
            <p className="text-[10px] text-[#27AE60]">AI Shopping Assistant</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-[#27AE60]' : 'bg-[#0B121E]'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-white" /> : <Sparkles size={14} className="text-[#27AE60]" />}
                </div>
                <div className={`p-4 rounded-[20px] text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#27AE60] text-white rounded-tr-none' : 'bg-white border border-gray-100 text-gray-700 rounded-tl-none shadow-sm'}`}>
                    {msg.content}
                </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-2">
                <div className="w-2 h-2 bg-[#27AE60] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-[#27AE60] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-[#27AE60] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-gray-100 pb-28">
        <div className="relative">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How do I cook this steak?" 
                className="w-full bg-gray-50 rounded-full py-4 pl-6 pr-14 text-sm focus:outline-none focus:ring-1 focus:ring-[#27AE60]"
            />
            <button 
                onClick={handleSend}
                disabled={loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#27AE60] text-white p-3 rounded-full shadow-lg"
            >
                <Send size={18} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default AIService;
