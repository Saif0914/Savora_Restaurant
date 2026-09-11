import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading, SpoonArrow } from './Icons';
import { EXCLUSIVE_DISHES } from '../data';
import { ExclusiveDish } from '../types';

interface ExclusiveItemsProps {
  onSelectDish: (dish: ExclusiveDish) => void;
}

export const ExclusiveItems: React.FC<ExclusiveItemsProps> = ({ onSelectDish }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Our Exclusive Items"
            align="left"
          />
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {EXCLUSIVE_DISHES.map((dish, index) => (
            <motion.div
              key={dish.id}
              id={`exclusive-dish-${dish.id}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Dish Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-600 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm"
                >
                  {dish.price}
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1c1d1f] mb-3 group-hover:text-[#ff6426] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-[#777777] text-sm leading-relaxed mb-6 font-sans">
                    {dish.description}
                  </p>
                </div>

                {/* Read More button */}
                <div>
                  <motion.button
                    onClick={() => onSelectDish(dish)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-[#444444] hover:text-[#ff6426] transition-colors cursor-pointer"
                  >
                    <span>Read More</span>
                    <SpoonArrow />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
