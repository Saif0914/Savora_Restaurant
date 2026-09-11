import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from './Icons';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { IMAGES } from '../images';

interface FoodMenuProps {
  onSelectItem: (item: MenuItem) => void;
}

type MenuCategory = 'Special' | 'Breakfast' | 'Launch' | 'Dinner' | 'Sneaks';

export const FoodMenu: React.FC<FoodMenuProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Special');

  const categories: MenuCategory[] = ['Special', 'Breakfast', 'Launch', 'Dinner', 'Sneaks'];

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image - Fully Visible without White Shadows or Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.backgrounds.menu}
          alt="Culinary dining ambiance background"
          className="w-full h-full object-cover object-center scale-105 opacity-100"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title on Left, Tabs on Right (or stacked on mobile) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-md px-6 py-3.5 rounded-2xl shadow-xs border border-black/5 inline-block"
          >
            <SectionHeading
              title="Food Menu"
              align="left"
              className="mb-0 md:mb-0"
            />
          </motion.div>

          {/* Categories Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xs border border-black/5 relative">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`menu-tab-${cat.toLowerCase()}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative pb-1 text-sm sm:text-base font-medium transition-colors cursor-pointer ${
                    isActive ? 'text-[#ff6426] font-semibold' : 'text-[#666666] hover:text-[#ff6426]'
                  }`}
                >
                  <span>{cat}</span>

                  {/* Active Indicator Arrow/Triangle with Motion layout */}
                  {isActive && (
                    <motion.div
                      layoutId="activeMenuTabIndicator"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      className="absolute -bottom-[12px] left-0 right-0 flex justify-center pointer-events-none"
                    >
                      <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[5px] border-t-[#ff6426]" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Grid with animated category switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {filteredItems.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.id}
                id={`food-menu-item-${item.id}`}
                onClick={() => onSelectItem(item)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-5 cursor-pointer"
              >
                {/* Dish Thumbnail */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-gray-100 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Dish Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-[#222222] truncate group-hover:text-[#ff6426] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#777777] line-clamp-2 mb-3 font-sans">
                    {item.description}
                  </p>
                  <span className="font-semibold text-sm sm:text-base text-[#ff6426] font-sans">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
