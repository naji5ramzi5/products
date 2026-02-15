
import React from 'react';
import { CartItem } from '../types';
import { ChevronLeft, Trash2, Plus, Minus } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, d: number) => void;
  onRemove: (id: string) => void;
  onBack: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemove, onBack }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = items.length > 0 ? 30.00 : 0;
  const total = subtotal + shipping;

  return (
    <div className="px-6 py-12 flex flex-col h-full animate-in slide-in-from-right duration-300">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="bg-white p-2 rounded-full shadow-md">
            <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-[#1A1C1E]">Your Cart</h1>
      </div>

      <div className="flex-1 flex flex-col gap-4 overflow-y-auto max-h-[50vh] custom-scrollbar mb-8">
        {items.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">Your cart is empty</div>
        ) : (
          items.map(item => (
            <div key={item.id} className="bg-white rounded-[24px] p-4 flex gap-4 shadow-sm border border-gray-50">
              <img src={item.image} className="w-20 h-20 object-cover rounded-2xl" alt={item.name} />
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-[#1A1C1E]">{item.name}</h3>
                    <p className="text-[10px] text-gray-400">Fresh {item.name}</p>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-[#1A1C1E]">${(item.price * item.quantity).toFixed(2)}</span>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-2 py-1">
                    <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1"><Minus size={14} /></button>
                    <span className="text-xs font-bold">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1"><Plus size={14} /></button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-white rounded-[32px] p-6 shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col gap-4">
        <div className="flex gap-2">
            <input 
                type="text" 
                placeholder="Enter Promo Code" 
                className="flex-1 bg-gray-50 rounded-full px-4 py-3 text-sm focus:outline-none"
            />
            <button className="bg-[#0B121E] text-white text-xs font-bold py-3 px-6 rounded-full">Apply Code</button>
        </div>

        <div className="space-y-3 mt-4 border-b border-gray-100 pb-4">
            <div className="flex justify-between text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-bold text-[#1A1C1E]">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-gray-400">Shipping Fee</span>
                <span className="font-bold text-[#1A1C1E]">${shipping.toFixed(2)}</span>
            </div>
        </div>

        <div className="flex justify-between items-center py-2">
            <span className="text-lg font-bold text-[#1A1C1E]">Total</span>
            <span className="text-lg font-bold text-[#1A1C1E]">${total.toFixed(2)}</span>
        </div>

        <button 
            disabled={items.length === 0}
            className={`w-full py-4 rounded-full font-bold text-white shadow-xl mt-2 transition-all ${items.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#27AE60] active:scale-95'}`}
        >
          Proceed To Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
