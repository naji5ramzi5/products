
import React, { useState, useMemo } from 'react';
import { ViewState, Product, CartItem } from './types';
import { CATEGORIES, PRODUCTS } from './constants';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import AIService from './components/AIService';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('DETAILS');
  };

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#F8F9FB] shadow-xl relative pb-24 overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {view === 'HOME' && (
          <Home 
            products={filteredProducts} 
            categories={CATEGORIES} 
            onProductClick={handleProductClick}
            onAddToCart={addToCart}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        {view === 'DETAILS' && selectedProduct && (
          <ProductDetails 
            product={selectedProduct} 
            onBack={() => setView('HOME')} 
            onAddToCart={addToCart}
          />
        )}

        {view === 'CART' && (
          <Cart 
            items={cart} 
            onUpdateQuantity={updateQuantity} 
            onRemove={removeFromCart} 
            onBack={() => setView('HOME')}
          />
        )}

        {view === 'AI_CHAT' && (
          <AIService cartItems={cart.map(i => i.name)} onBack={() => setView('HOME')} />
        )}

        {(view === 'ORDERS' || view === 'PROFILE') && (
            <div className="p-8 text-center text-gray-500 mt-20">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{view} Screen</h2>
                <p>This feature is coming soon in Phase 2!</p>
                <button onClick={() => setView('HOME')} className="mt-4 text-[#27AE60] font-semibold">Back to Home</button>
            </div>
        )}
      </div>

      <BottomNav currentView={view} setView={setView} cartCount={cart.reduce((a, b) => a + b.quantity, 0)} />
    </div>
  );
};

export default App;
