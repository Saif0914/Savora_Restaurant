import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../images';

interface VideoBannerProps {
  onPlayClick: () => void;
}

export const VideoBanner: React.FC<VideoBannerProps> = ({ onPlayClick }) => {
  return (
    <section className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src={IMAGES.backgrounds.videoBanner}
          alt="Expect The Best - Savora luxury restaurant dining hall ambiance"
          className="w-full h-full object-cover object-center brightness-105"
          referrerPolicy="no-referrer"
        />
        {/* Balanced dark overlay ensuring the interior dining scene is vibrant and clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/50" />
      </motion.div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-serif-heading font-bold text-white tracking-normal mb-8 drop-shadow-md"
        >
          Expect The Best
        </motion.h2>

        {/* Pulsing Play Button */}
        <motion.button
          id="expect-the-best-play-btn"
          onClick={onPlayClick}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          aria-label="Play restaurant feature video"
          className="relative group w-18 h-18 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-black/40 border border-white/50 hover:border-white text-white transition-colors duration-300 shadow-2xl backdrop-blur-xs cursor-pointer"
        >
          {/* Animated pulse ring */}
          <span className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-40" />
          <Play className="w-7 h-7 fill-white ml-1 text-white group-hover:scale-105 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};
