import React from 'react';
import { motion } from 'motion/react';
import { SpoonArrow } from './Icons';
import { IMAGES } from '../images';

interface OurHistoryProps {
  onReadMoreHistory: () => void;
}

export const OurHistory: React.FC<OurHistoryProps> = ({ onReadMoreHistory }) => {
  return (
    <section id="history" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Plate Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-[480px]">
              {/* Circular Avocado & Eggs Plate with subtle drop shadow & soft floating animation */}
              <motion.div
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03, rotate: 5 }}
                className="relative z-10 w-72 sm:w-96 md:w-[440px] aspect-square mx-auto rounded-full p-2 bg-white shadow-2xl transition-all cursor-pointer"
              >
                <img
                  src={IMAGES.history.mainPlate}
                  alt="Artisanal gourmet heritage harvest bowl with colorful roasted vegetables"
                  className="w-full h-full object-cover rounded-full shadow-inner"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Decorative background circle */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[450px] aspect-square rounded-full border border-orange-100 -z-0 pointer-events-none"
              />

              {/* Fresh green herbs / salad accent on edge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                animate={{ y: [0, -6, 0] }}
                className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg z-20"
              >
                <img
                  src={IMAGES.history.sideGarnish}
                  alt="Fresh culinary garnishes and organic harvest"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif-heading font-bold text-[#1c1d1f] leading-tight">
              Where The Food's As Good As The Root Beer.
            </h2>

            {/* Script / Italic Quote in Orange */}
            <p className="font-script text-xl sm:text-2xl text-[#ff6426] tracking-wide">
              Satisfying people hunger for simple pleasures
            </p>

            {/* Narrative text */}
            <p className="text-[#777777] text-sm sm:text-base leading-relaxed font-sans">
              May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep
              abundantly bearing, him, gathering you blessed bearing he our position best ticket in month hole
              deep
            </p>

            {/* Read More button */}
            <div className="pt-2">
              <motion.button
                id="history-read-more-btn"
                onClick={onReadMoreHistory}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-[#444444] hover:text-[#ff6426] transition-colors cursor-pointer"
              >
                <span>Read More</span>
                <SpoonArrow />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
