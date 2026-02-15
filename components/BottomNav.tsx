
import React from 'react';
import { Home as HomeIcon, Heart, User, ClipboardList, ShoppingCart, Sparkles } from 'lucide-react';
import { ViewState } from '../types';

interface BottomNavProps {
  currentView: ViewState;
  setView: (v: ViewState) => void;
  cartCount: number;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView, cartCount }) => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 px-8 py-4 safe-area-bottom flex justify-between items-center z-50 rounded-t-[32px] shadow-2xl">
      <button 
        onClick={() => setView('HOME')}
        className={`flex flex-col items-center gap-1 ${currentView === 'HOME' ? 'text-[#27AE60]' : 'text-gray-300'}`}
      >
        <HomeIcon size={22} strokeWidth={currentView === 'HOME' ? 3 : 2} />
        <span className="text-[10px] font-bold">Home</span>
      </button>

      <button 
        onClick={() => setView('PROFILE')} // Mock profile
        className={`flex flex-col items-center gap-1 ${currentView === 'PROFILE' ? 'text-[#27AE60]' : 'text-gray-300'}`}
      >
        <Heart size={22} strokeWidth={currentView === 'PROFILE' ? 3 : 2} />
        <span className="text-[10px] font-bold">Favorite</span>
      </button>

      <div className="relative -mt-12">
        <button 
            onClick={() => setView('CART')}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 ${currentView === 'CART' ? 'bg-[#27AE60] text-white' : 'bg-white border-2 border-[#27AE60] text-[#27AE60]'}`}
        >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
        </button>
      </div>

      <button 
        onClick={() => setView('AI_CHAT')}
        className={`flex flex-col items-center gap-1 ${currentView === 'AI_CHAT' ? 'text-[#27AE60]' : 'text-gray-300'}`}
      >
        <Sparkles size={22} strokeWidth={currentView === 'AI_CHAT' ? 3 : 2} />
        <span className="text-[10px] font-bold">Chef AI</span>
      </button>

      <button 
        onClick={() => setView('PROFILE')}
        className={`flex flex-col items-center gap-1 ${currentView === 'PROFILE' ? 'text-[#27AE60]' : 'text-gray-300'}`}
      >
        <User size={22} strokeWidth={currentView === 'PROFILE' ? 3 : 2} />
        <span className="text-[10px] font-bold">Account</span>
      </button>
    </div>
  );
};

export default BottomNav;
