import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#fcfaf7] border-t border-gray-100 text-[#666666] pt-16 md:pt-20 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns with staggered entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-gray-200/80"
        >
          {/* Column 1: About Us (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif-heading font-bold text-xl text-[#1c1d1f] tracking-tight">
              About Us
            </h4>
            <p className="text-sm leading-relaxed text-[#777777] font-sans max-w-sm">
              Heaven fruitful doesn't over for these theheaven fruitful doe over days appear creeping
              seasons sad behold beari ath of it fly signs bearing be one blessed after.
            </p>
          </div>

          {/* Column 2: Important Link (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif-heading font-bold text-xl text-[#1c1d1f] tracking-tight">
              Important Link
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-[#ff6426] hover:translate-x-1 transition-all cursor-pointer"
                >
                  WHMCS-bridge
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-[#ff6426] hover:translate-x-1 transition-all cursor-pointer"
                >
                  Search Domain
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reservation')}
                  className="hover:text-[#ff6426] hover:translate-x-1 transition-all cursor-pointer"
                >
                  My Account
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-[#ff6426] hover:translate-x-1 transition-all cursor-pointer"
                >
                  Shopping Cart
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#ff6426] hover:translate-x-1 transition-all cursor-pointer"
                >
                  Our Shop
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact us (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-heading font-bold text-xl text-[#1c1d1f] tracking-tight">
              Contact us
            </h4>
            <div className="space-y-2 text-sm leading-relaxed font-sans text-[#777777]">
              <p>
                <span className="text-[#333333] font-medium">Address :</span> Hath of it fly signs bear be
                one blessed after
              </p>
              <p>
                <span className="text-[#333333] font-medium">Phone :</span>{' '}
                <a href="tel:+2362658060" className="hover:text-[#ff6426] transition-colors">
                  +2 36 265 (8060)
                </a>
              </p>
              <p>
                <span className="text-[#333333] font-medium">Email :</span>{' '}
                <a href="mailto:info@colorlib.com" className="hover:text-[#ff6426] transition-colors">
                  info@colorlib.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-heading font-bold text-xl text-[#1c1d1f] tracking-tight">
              Newsletter
            </h4>
            <p className="text-sm text-[#777777] leading-relaxed font-sans">
              Heaven fruitful doesn't over lesser in days. Appear creeping seas
            </p>

            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="sub-success"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2 text-xs font-semibold text-[#ff6426] bg-[#fff5f0] p-2.5 rounded-md border border-[#ff6426]/30 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you for subscribing!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center w-full">
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-white border border-gray-300 border-r-0 rounded-l-md px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff6426] transition-colors"
                  />
                  <motion.button
                    type="submit"
                    id="footer-newsletter-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Subscribe to newsletter"
                    className="bg-[#ff6426] hover:bg-[#e45318] text-white px-3.5 py-2.5 rounded-r-md transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Sub-footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888] font-sans">
          <p>
            Copyright ©{new Date().getFullYear()} Savora. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="#"
              whileHover={{ y: -2, scale: 1.15 }}
              aria-label="Facebook"
              className="text-[#777777] hover:text-[#ff6426] transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2, scale: 1.15 }}
              aria-label="Twitter"
              className="text-[#777777] hover:text-[#ff6426] transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.162c-.424.729-.667 1.577-.667 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.18 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2, scale: 1.15 }}
              aria-label="Globe"
              className="text-[#777777] hover:text-[#ff6426] transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2, scale: 1.15 }}
              aria-label="Behance"
              className="text-[#777777] hover:text-[#ff6426] transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.791 0-6.027-2.641-6.027-6.055 0-3.551 2.373-6.055 5.922-6.055 3.399 0 5.483 2.128 5.483 5.495 0 .744-.066 1.492-.178 1.956h-8.082c.105 1.832 1.341 2.766 3.018 2.766 1.353 0 2.28-.68 2.668-1.107l1.924 1.005zm-5.011-5.748c-.029-.982-.705-1.793-1.843-1.793-1.196 0-1.924.789-2.028 1.793h3.871zm-10.715 8.748h-8v-16h8.28c2.934 0 4.72 1.547 4.72 4.098 0 1.707-.803 2.943-2.146 3.59 1.777.674 2.646 2.121 2.646 4.025 0 2.784-2.039 4.287-5.5 4.287zm-4.76-6.862h4.347c1.472 0 2.393-.657 2.393-1.855 0-1.192-.931-1.793-2.393-1.793h-4.347v3.648zm0-5.776h3.947c1.372 0 2.193-.604 2.193-1.691 0-1.077-.821-1.637-2.193-1.637h-3.947v3.328z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
