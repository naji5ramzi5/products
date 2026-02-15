
import React, { useState } from 'react';
import { Product } from '../types';
import { ChevronLeft, Share2, Heart, Star } from 'lucide-react';
import { PRODUCTS } from '../constants';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (p: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('Details');
  
  return (
    <div className="flex flex-col animate-in fade-in duration-300">
      <div className="relative h-80 bg-[#F1F3F5]">
        <img src={product.image} className="w-full h-full object-contain" alt={product.name} />
        <div className="absolute top-12 left-6 flex justify-between w-[calc(100%-48px)]">
          <button onClick={onBack} className="bg-white p-2 rounded-full shadow-lg">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            <button className="bg-white p-2 rounded-full shadow-lg">
                <Share2 size={18} />
            </button>
            <button className="bg-white p-2 rounded-full shadow-lg text-red-500">
                <Heart size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white -mt-10 rounded-t-[40px] px-8 pt-10 pb-24 min-h-[50vh] flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-2xl font-extrabold text-[#1A1C1E]">{product.name}</h1>
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#27AE60] text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
            <Star size={10} fill="white" /> {product.rating} ({product.reviews} Reviews)
          </div>
          <p className="text-xs text-gray-400">Seller: <span className="font-bold text-[#1A1C1E]">Tariqul</span></p>
        </div>

        <div className="flex gap-8 border-b border-gray-100 mb-6">
          {['Details', 'Support', 'Ratings'].map(tab => (
            <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-bold transition-all ${activeTab === tab ? 'text-[#27AE60] border-b-2 border-[#27AE60]' : 'text-gray-400'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1">
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              {product.description}
            </p>

            <h3 className="text-lg font-bold text-[#1A1C1E] mb-4">You Might Also Like</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                {PRODUCTS.filter(p => p.id !== product.id).map(p => (
                    <div key={p.id} className="min-w-[140px] bg-gray-50 rounded-2xl p-3 border border-gray-100">
                        <img src={p.image} className="w-full h-20 object-cover rounded-xl mb-2" alt={p.name} />
                        <h4 className="text-xs font-bold text-[#1A1C1E] line-clamp-1">{p.name}</h4>
                        <p className="text-[10px] font-bold text-[#27AE60] mt-1">${p.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md px-8 py-4 bg-white/80 backdrop-blur-md">
            <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-[#27AE60] text-white font-bold py-4 rounded-full shadow-xl shadow-green-100 flex justify-between px-8 items-center"
            >
                <span>Add to Cart</span>
                <span>${product.price.toFixed(2)}</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
