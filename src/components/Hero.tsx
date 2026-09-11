import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';
import { SpoonArrow } from './Icons';
import { IMAGES } from '../images';

interface HeroProps {
  onReservationClick: () => void;
  onWatchStoryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReservationClick, onWatchStoryClick }) => {
  return (
    <section className="relative z-10 pt-4 pb-20 md:py-16 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 z-10 space-y-6 max-w-xl"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] font-serif-heading font-bold text-[#1a1a1a] leading-[1.12] tracking-tight"
            >
              Deliciousness jumping into the mouth
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-[#777777] text-sm sm:text-base leading-relaxed font-sans max-w-lg"
            >
              Together creeping heaven upon third dominion be upon won't darkness rule land behold it
              created good saw after she'd Our set living. Signs midst dominion creepeth morning
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="pt-2 flex flex-wrap items-center gap-5 sm:gap-8"
            >
              {/* Reservation Button */}
              <motion.button
                id="hero-reservation-btn"
                onClick={onReservationClick}
                whileHover={{ scale: 1.04, borderColor: '#ff6426' }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-3 px-7 py-3 rounded-full border border-gray-400 text-[#222222] hover:border-[#ff6426] hover:text-[#ff6426] transition-all duration-300 text-sm font-medium shadow-xs cursor-pointer"
              >
                <span>Reservation</span>
                <SpoonArrow />
              </motion.button>

              {/* Watch Our Story Button */}
              <motion.button
                id="hero-watch-story-btn"
                onClick={onWatchStoryClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-3.5 text-sm font-medium text-[#222222] hover:text-[#ff6426] transition-colors cursor-pointer"
              >
                <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#ff7a3d] text-white shadow-md group-hover:scale-105 group-hover:bg-[#ff6426] transition-all">
                  <span className="absolute inset-0 rounded-full bg-[#ff7a3d] animate-ping opacity-30"></span>
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </span>
                <span className="font-medium text-[#444444] group-hover:text-[#ff6426] transition-colors">
                  Watch Our Story
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Hero Image (Signature Curved Steak & Spoons) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-[16/13]">
              {/* Signature curved cut-out container */}
              <div className="w-full h-full rounded-bl-[160px] sm:rounded-bl-[220px] overflow-hidden shadow-2xl relative border-4 border-white group">
                <img
                  src={IMAGES.hero.mainSteak}
                  alt="Delicious wood-fired grilled ribeye steak with herb butter"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Spices Wooden Spoons Asset with gentle floating animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -bottom-10 -left-6 sm:-left-12 w-48 sm:w-64 md:w-72 drop-shadow-xl z-20"
              >
                <motion.div
                  whileHover={{ scale: 1.04, rotate: -2 }}
                  className="relative rounded-2xl p-2 bg-white/95 backdrop-blur-sm border border-white/80 shadow-xl rotate-[-6deg] transition-all cursor-pointer"
                >
                  <img
                    src={IMAGES.hero.spicesBowl}
                    alt="Aromatic culinary herbs and chef spices"
                    className="w-full h-28 sm:h-36 object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#111111]/80 text-white text-[11px] font-medium px-2.5 py-1 rounded-full backdrop-blur-sm shadow-sm">
                    ✨ Secret Spices
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
