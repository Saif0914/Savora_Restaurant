import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './Icons';
import { CHEFS } from '../data';
import { Chef } from '../types';

interface ChefsProps {
  onSelectChef?: (chef: Chef) => void;
}

export const Chefs: React.FC<ChefsProps> = ({ onSelectChef }) => {
  return (
    <section id="chefs" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Our Experience Chefs"
            align="left"
          />
        </motion.div>

        {/* 3 Chef Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {CHEFS.map((chef, index) => (
            <motion.div
              key={chef.id}
              id={`chef-card-${chef.id}`}
              onClick={() => onSelectChef && onSelectChef(chef)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-t-3xl rounded-b-[48px] overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col text-center cursor-pointer"
            >
              {/* Chef Photo */}
              <div className="relative overflow-hidden aspect-[4/4.2] bg-gray-100">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-600 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Chef Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1c1d1f] mb-1 group-hover:text-[#ff6426] transition-colors">
                    {chef.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#888888] font-sans">
                    {chef.role}
                  </p>
                </div>

                {/* Social Icons Row */}
                <div className="pt-6 flex items-center justify-center gap-3">
                  {/* Facebook */}
                  <motion.a
                    href={chef.social.facebook || '#'}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ y: -3, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`${chef.name} Facebook`}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#ff6426] hover:bg-[#ff6426] hover:text-white transition-colors duration-200 text-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                    </svg>
                  </motion.a>

                  {/* Twitter */}
                  <motion.a
                    href={chef.social.twitter || '#'}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ y: -3, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`${chef.name} Twitter`}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#ff6426] hover:bg-[#ff6426] hover:text-white transition-colors duration-200 text-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.162c-.424.729-.667 1.577-.667 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.18 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                    </svg>
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href={chef.social.instagram || '#'}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ y: -3, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`${chef.name} Instagram`}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#ff6426] hover:bg-[#ff6426] hover:text-white transition-colors duration-200 text-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </motion.a>

                  {/* Behance / Globe */}
                  <motion.a
                    href={chef.social.behance || '#'}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ y: -3, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`${chef.name} Portfolio`}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#ff6426] hover:bg-[#ff6426] hover:text-white transition-colors duration-200 text-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.791 0-6.027-2.641-6.027-6.055 0-3.551 2.373-6.055 5.922-6.055 3.399 0 5.483 2.128 5.483 5.495 0 .744-.066 1.492-.178 1.956h-8.082c.105 1.832 1.341 2.766 3.018 2.766 1.353 0 2.28-.68 2.668-1.107l1.924 1.005zm-5.011-5.748c-.029-.982-.705-1.793-1.843-1.793-1.196 0-1.924.789-2.028 1.793h3.871zm-10.715 8.748h-8v-16h8.28c2.934 0 4.72 1.547 4.72 4.098 0 1.707-.803 2.943-2.146 3.59 1.777.674 2.646 2.121 2.646 4.025 0 2.784-2.039 4.287-5.5 4.287zm-4.76-6.862h4.347c1.472 0 2.393-.657 2.393-1.855 0-1.192-.931-1.793-2.393-1.793h-4.347v3.648zm0-5.776h3.947c1.372 0 2.193-.604 2.193-1.691 0-1.077-.821-1.637-2.193-1.637h-3.947v3.328z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
