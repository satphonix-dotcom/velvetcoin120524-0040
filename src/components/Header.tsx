import React, { useState } from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';
import Navigation from './Navigation';
import Logo from './Logo';
import CartDrawer from './cart/CartDrawer';
import AuthModal from './auth/AuthModal';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { state } = useCart();
  const { user } = useAuth();

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-[#1C1C1C] text-white">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-8 px-16">
          {/* Logo */}
          <div className="flex-1">
            <Logo variant="header" />
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-8">
            <button aria-label="Search" className="hover:text-gray-300 transition-colors">
              <Search size={28} strokeWidth={1} />
            </button>
            <button
              aria-label="Account"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsAuthOpen(true)}
            >
              <User size={28} strokeWidth={1} />
            </button>
            <button
              aria-label="Cart"
              className="hover:text-gray-300 transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={28} strokeWidth={1} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-body">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        <Navigation />
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </header>
  );
};

export default Header;