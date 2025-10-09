'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';
import { formatCurrency } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, total, itemCount, removeItem, updateQuantity, clearCart } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Cart Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-xl z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-yellow-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Your Order ({itemCount})
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag size={48} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500">Add some delicious pizzas to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.pizza.id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <Image
                        src={item.pizza.photoName}
                        alt={item.pizza.name}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />

                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.pizza.name}</h4>
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {item.pizza.ingredients}
                        </p>
                        <p className="text-sm font-semibold text-yellow-600">
                          {formatCurrency(item.pizza.price)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.pizza.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Minus size={16} className="text-gray-600" />
                        </button>

                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.pizza.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Plus size={16} className="text-gray-600" />
                        </button>

                        <button
                          onClick={() => removeItem(item.pizza.id)}
                          className="p-1 hover:bg-red-100 rounded transition-colors ml-2"
                        >
                          <Trash2 size={16} className="text-red-500" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div
                className="border-t border-gray-200 p-6 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-yellow-600">{formatCurrency(total)}</span>
                </div>

                <div className="space-y-3">
                  <motion.button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingBag size={18} />
                    Proceed to Checkout
                  </motion.button>

                  <button
                    onClick={clearCart}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
