'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus, Heart } from 'lucide-react';
import { useState } from 'react';
import { Pizza as PizzaType } from '@/lib/types';
import { useCartStore } from '@/lib/store';
import { cn } from '@/lib/utils';

interface PizzaProps extends PizzaType {
  index?: number;
}

export default function Pizza({ id, name, ingredients, price, photoName, soldOut, index = 0 }: PizzaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!soldOut) {
      addItem({ id, name, ingredients, price, photoName, soldOut });
    }
  };

  return (
    <motion.div
      className={cn(
        "pizza-card",
        soldOut ? "sold-out" : ""
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image
          src={photoName}
          alt={name}
          width={300}
          height={200}
          className={cn(
            "card-image",
            isHovered && !soldOut ? "scale-110" : "scale-100"
          )}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          onLoad={() => setImageLoaded(true)}
        />

        {/* Sold Out Badge */}
        {soldOut && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="card-content">
        {/* Header with name and price */}
        <div className="mb-4">
          <div className="flex justify-between items-start gap-3 mb-3">
            <h3 className="text-xl font-bold text-gray-900 leading-tight flex-1">
              {name}
            </h3>
            <span className={cn(
              "px-3 py-1.5 rounded-full text-lg font-bold flex-shrink-0",
              soldOut
                ? "bg-gray-100 text-gray-500"
                : "bg-yellow-500 text-white"
            )}>
              {soldOut ? "Sold out" : `$${price}`}
            </span>
          </div>

          {/* Ingredients */}
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
            {ingredients}
          </p>
        </div>

        {/* Two Buttons at Bottom */}
        <div className="card-buttons">
          {/* Add to Cart Button */}
          <motion.button
            onClick={handleAddToCart}
            disabled={soldOut}
            className={cn(
              "btn-cart",
              soldOut ? "sold-out" : ""
            )}
            whileHover={!soldOut ? { scale: 1.02, y: -1 } : {}}
            whileTap={!soldOut ? { scale: 0.98 } : {}}
          >
            <Plus size={18} />
            {soldOut ? "Sold Out" : "Add to Cart"}
          </motion.button>

          {/* Add to Favorites Button */}
          <motion.button
            className="btn-favorite"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
