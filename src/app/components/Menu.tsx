'use client';

import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { pizzaData } from '@/lib/data';
import Pizza from './Pizza';

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popular'>('name');

  const filteredPizzas = pizzaData
    .filter(pizza =>
      pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pizza.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <motion.main
      className="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>Our Menu!</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Authentic Italian cuisine. 6 creative dishes to choose from. All
          from our stone oven, all organic, all delicious.
        </p>
      </motion.div>

      {/* Search and Filter Controls */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 items-center justify-between max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search pizzas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter size={16} className="text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </motion.div>

      {/* Results count */}
      <motion.p
        className="text-sm text-gray-500 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {filteredPizzas.length === pizzaData.length
          ? `Showing all ${pizzaData.length} pizzas`
          : `Found ${filteredPizzas.length} pizza${filteredPizzas.length !== 1 ? 's' : ''}`
        }
      </motion.p>

      {/* Pizza Grid */}
      <div className="pizzas">
        {filteredPizzas.map((pizza, index) => (
          <Pizza key={pizza.id} {...pizza} index={index} />
        ))}
      </div>

      {filteredPizzas.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-4">🍕</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No pizzas found</h3>
          <p className="text-gray-600">Try adjusting your search terms</p>
        </motion.div>
      )}
    </motion.main>
  );
}
