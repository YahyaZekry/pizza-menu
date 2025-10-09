'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCartStore } from '@/lib/store';

interface HeaderProps {
  onCartToggle?: () => void;
}

export default function Header({ onCartToggle }: HeaderProps) {
  const { itemCount, toggleCart } = useCartStore();

  const handleCartClick = () => {
    if (onCartToggle) {
      onCartToggle();
    } else {
      toggleCart();
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl flex-1">The Perfect PizzaPlace</h1>

        <motion.button
          onClick={handleCartClick}
          className="relative p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 backdrop-blur-sm flex-shrink-0 ml-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingBag size={24} className="text-yellow-400" />

          {itemCount > 0 && (
            <motion.span
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              {itemCount > 9 ? '9+' : itemCount}
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.header>
  );
}
