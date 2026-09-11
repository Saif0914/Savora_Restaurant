import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from './Icons';
import { TESTIMONIALS } from '../data';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate testimonials gently every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-[#fdfbf8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Customers Feedback"
            align="left"
          />
        </motion.div>

        {/* Testimonial Card & Quote with AnimatePresence */}
        <div className="max-w-4xl bg-transparent">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 min-h-[160px]"
            >
              {/* Avatar on Left */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-lg"
              >
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Vertical Divider (Desktop) */}
              <div className="hidden md:block w-px self-stretch bg-gray-200" />

              {/* Quote on Right */}
              <div className="flex-1 space-y-4">
                <p className="font-serif-heading italic text-base sm:text-lg text-[#555555] leading-relaxed">
                  "{current.quote}"
                </p>
                <div>
                  <h4 className="font-serif-heading font-bold text-lg text-[#222222] inline">
                    {current.name}
                  </h4>
                  <span className="text-xs sm:text-sm text-[#888888] ml-2 font-sans">
                    , {current.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots underneath */}
          <div className="flex items-center gap-2.5 mt-10 md:ml-40">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                id={`testimonial-dot-${idx}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className="relative py-2 px-0 cursor-pointer focus:outline-none"
              >
                <motion.div
                  animate={{
                    width: currentIndex === idx ? 28 : 10,
                    backgroundColor: currentIndex === idx ? '#ff6426' : '#d1d5db'
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2.5 rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
