import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { SavoraLogo } from './Icons';

interface NavbarProps {
  onBookTableClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookTableClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setBlogDropdownOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ff6426] via-[#ff7a3d] to-[#ff9e58] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <motion.header
        id="main-navbar"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'relative bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              onClick={() => scrollToSection('home')}
              className="cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SavoraLogo />
            </motion.div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-[#222222]">
              {['Home', 'About', 'Menu', 'Chefs'].map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <motion.button
                    key={item}
                    id={`nav-link-${sectionId}`}
                    onClick={() => scrollToSection(sectionId)}
                    whileHover={{ y: -1.5, color: '#ff6426' }}
                    whileTap={{ scale: 0.97 }}
                    className="hover:text-[#ff6426] transition-colors py-2 cursor-pointer font-medium relative group"
                  >
                    {item}
                    <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-[#ff6426] transition-all duration-300 group-hover:w-full" />
                  </motion.button>
                );
              })}

              {/* Blog with dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setBlogDropdownOpen(true)}
                onMouseLeave={() => setBlogDropdownOpen(false)}
              >
                <motion.button
                  id="nav-link-blog"
                  onClick={() => scrollToSection('blog')}
                  whileHover={{ y: -1.5, color: '#ff6426' }}
                  className="flex items-center gap-1 hover:text-[#ff6426] transition-colors cursor-pointer"
                >
                  Blog
                  <motion.span
                    animate={{ rotate: blogDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-[#888888]" />
                  </motion.span>
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {blogDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute left-0 top-full mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                    >
                      <button
                        onClick={() => scrollToSection('blog')}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#fff5f0] hover:text-[#ff6426] transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>Blog Posts</span>
                        <span className="text-[10px] text-[#ff6426] font-medium uppercase tracking-wider">News</span>
                      </button>
                      <button
                        onClick={() => scrollToSection('blog')}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#fff5f0] hover:text-[#ff6426] transition-colors cursor-pointer"
                      >
                        Culinary News
                      </button>
                      <button
                        onClick={() => scrollToSection('history')}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#fff5f0] hover:text-[#ff6426] transition-colors cursor-pointer"
                      >
                        Chef Stories
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                id="nav-link-contact"
                onClick={() => scrollToSection('contact')}
                whileHover={{ y: -1.5, color: '#ff6426' }}
                whileTap={{ scale: 0.97 }}
                className="hover:text-[#ff6426] transition-colors py-2 cursor-pointer relative group"
              >
                Contact
                <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-[#ff6426] transition-all duration-300 group-hover:w-full" />
              </motion.button>
            </nav>

            {/* Right Action Button: "Book A Table" */}
            <div className="hidden sm:flex items-center">
              <motion.button
                id="header-book-table-btn"
                onClick={onBookTableClick}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-2.5 rounded-full text-sm font-semibold bg-[#ff6426] text-white hover:bg-[#e85317] transition-all duration-300 shadow-[0_4px_16px_rgba(255,100,38,0.38)] hover:shadow-[0_6px_22px_rgba(255,100,38,0.52)] cursor-pointer"
              >
                Book a Table
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <motion.button
                id="mobile-book-btn"
                onClick={onBookTableClick}
                whileTap={{ scale: 0.92 }}
                className="sm:hidden px-4 py-1.5 rounded-full text-xs font-semibold bg-[#ff6426] text-white hover:bg-[#e85317] shadow-sm transition-all"
              >
                Book
              </motion.button>
              <motion.button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-700 hover:text-[#ff6426] focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="lg:hidden mt-3 pt-3 pb-5 border-t border-gray-100 bg-white rounded-2xl shadow-xl px-4 space-y-2 overflow-hidden"
              >
                {['Home', 'About', 'Menu', 'Chefs', 'Blog', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2.5 text-[15px] font-medium text-gray-800 hover:text-[#ff6426] hover:pl-1 transition-all"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-2">
                  <motion.button
                    onClick={onBookTableClick}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2.5 rounded-full text-center text-sm font-semibold bg-[#ff6426] text-white hover:bg-[#e0541d] transition-all shadow-md cursor-pointer"
                  >
                    Book a Table
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};
