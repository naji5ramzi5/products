
import React from 'react';
import { Product, Category } from '../types';
import { Search, Bell, Menu, Plus } from 'lucide-react';

interface HomeProps {
  products: Product[];
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  onProductClick: (p: Product) => void;
  onAddToCart: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ products, categories, selectedCategory, onSelectCategory, onProductClick, onAddToCart }) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-[#0B121E] text-white px-6 pt-12 pb-8 rounded-b-[40px]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <img src="https://picsum.photos/id/64/100/100" className="w-10 h-10 rounded-full border-2 border-white/20" alt="Avatar" />
            <div>
              <p className="text-xs text-gray-400">Welcome</p>
              <p className="text-sm font-bold">Tariqul Islam</p>
            </div>
          </div>
          <button className="bg-white/10 p-2 rounded-full">
            <Bell size={20} className="text-white" />
          </button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search here..." 
            className="w-full bg-white text-gray-800 rounded-full py-3 px-12 focus:outline-none text-sm shadow-inner"
          />
        </div>

        <div className="flex items-center gap-4 overflow-x-auto custom-scrollbar pt-2">
            <button className="bg-[#27AE60] p-3 rounded-full flex-shrink-0">
                <Menu size={20} />
            </button>
            {categories.map(cat => (
                <button 
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`flex flex-col items-center gap-1 transition-all ${selectedCategory === cat.id ? 'scale-110' : 'opacity-70'}`}
                >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg bg-white`}>
                        {cat.icon}
                    </div>
                    <span className="text-[10px] font-medium whitespace-nowrap">{cat.name}</span>
                </button>
            ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className="px-6 py-6">
        <h2 className="text-lg font-bold text-[#1A1C1E] mb-4">Special Offers</h2>
        <div className="bg-[#E9F7EF] rounded-[24px] p-6 flex items-center justify-between relative overflow-hidden">
            <div className="relative z-10 w-1/2">
                <h3 className="text-2xl font-extrabold text-[#1A1C1E] leading-tight">35% Discount</h3>
                <p className="text-[10px] text-gray-500 mt-1 mb-4">100% Guaranteed all Fresh Grocery Items</p>
                <button className="bg-[#27AE60] text-white text-xs font-bold py-2 px-6 rounded-full shadow-lg">Shop Now</button>
            </div>
            <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400" 
                className="w-1/2 h-24 object-contain rounded-xl" 
                alt="Promotion" 
            />
        </div>
      </div>

      {/* Popular Items */}
      <div className="px-6 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#1A1C1E]">Popular Items</h2>
          <button className="text-xs text-gray-400 font-medium">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 flex flex-col relative"
              onClick={() => onProductClick(product)}
            >
              <img src={product.image} className="w-full h-28 object-cover rounded-2xl mb-3" alt={product.name} />
              <div className="flex-1">
                <h3 className="text-sm font-bold text-[#1A1C1E] line-clamp-1">{product.name}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">Original fresh {product.name}</p>
                <div className="flex justify-between items-end mt-2">
                  <span className="text-sm font-bold text-[#1A1C1E]">${product.price.toFixed(2)}<span className="text-[10px] text-gray-400 font-normal">/{product.unit}</span></span>
                </div>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                className="absolute bottom-4 right-4 bg-[#0B121E] text-white p-1 rounded-md shadow-lg"
              >
                <Plus size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
