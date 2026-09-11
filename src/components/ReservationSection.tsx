import React, { useState } from 'react';
import { Calendar, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from './Icons';
import { ReservationData } from '../types';
import { IMAGES } from '../images';

interface ReservationSectionProps {
  onReservationSuccess: (data: ReservationData) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onReservationSuccess }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    persons: '2 Persons',
    date: '2026-09-12',
    time: '07:30 PM',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out the required reservation details.');
      return;
    }
    setSubmitted(true);
    onReservationSuccess(formData);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section id="reservation" className="relative bg-[#0d1217] py-20 md:py-28 overflow-hidden">
      {/* Right-side Salmon Fillet Accent Image with smooth scale */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[62%] pointer-events-none z-0 overflow-hidden flex items-center justify-end"
      >
        <img
          src={IMAGES.backgrounds.reservation}
          alt="Freshly seared Atlantic salmon cut with aromatic herbs"
          className="h-full w-full object-cover object-left lg:object-center transform scale-110 lg:scale-100 brightness-105 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft gradient blend into dark background ensuring the seared dish is rich and clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1217] via-[#0d1217]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1217] via-transparent to-[#0d1217]/70" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl lg:max-w-2xl"
        >
          {/* Heading */}
          <SectionHeading
            title="Book A Table"
            align="left"
            dark={true}
          />

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-[#ff6426]/40 text-white space-y-4 shadow-2xl"
              >
                <div className="flex items-center gap-3 text-[#ff7a3d]">
                  <CheckCircle2 className="w-7 h-7" />
                  <h3 className="font-serif-heading text-2xl font-bold">Reservation Confirmed!</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. We have reserved a table for{' '}
                  <strong className="text-[#ff7a3d]">{formData.persons}</strong> on{' '}
                  <strong className="text-white">{formData.date}</strong> at{' '}
                  <strong className="text-white">{formData.time}</strong>. A confirmation email has been sent to{' '}
                  <strong className="text-white">{formData.email}</strong>.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-600 focus:border-[#ff6426] py-3 text-sm text-white placeholder-gray-400 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-600 focus:border-[#ff6426] py-3 text-sm text-white placeholder-gray-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Persons & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <select
                      value={formData.persons}
                      onChange={(e) => setFormData({ ...formData, persons: e.target.value })}
                      className="w-full appearance-none bg-transparent border-b border-gray-600 focus:border-[#ff6426] py-3 text-sm text-white placeholder-gray-400 outline-none transition-colors cursor-pointer pr-8"
                    >
                      <option value="1 Person" className="bg-[#0d1217] text-white">1 Person</option>
                      <option value="2 Persons" className="bg-[#0d1217] text-white">2 Persons</option>
                      <option value="3 Persons" className="bg-[#0d1217] text-white">3 Persons</option>
                      <option value="4 Persons" className="bg-[#0d1217] text-white">4 Persons</option>
                      <option value="5+ Persons" className="bg-[#0d1217] text-white">5+ Persons</option>
                    </select>
                    <ChevronDown className="absolute right-1 top-4 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-600 focus:border-[#ff6426] py-3 text-sm text-white placeholder-gray-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-600 focus:border-[#ff6426] py-3 text-sm text-white placeholder-gray-400 outline-none transition-colors cursor-pointer [color-scheme:dark]"
                    />
                    <Calendar className="absolute right-1 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full appearance-none bg-transparent border-b border-gray-600 focus:border-[#ff6426] py-3 text-sm text-white placeholder-gray-400 outline-none transition-colors cursor-pointer pr-8"
                    >
                      <option value="12:00 PM" className="bg-[#0d1217] text-white">12:00 PM (Lunch)</option>
                      <option value="01:30 PM" className="bg-[#0d1217] text-white">01:30 PM (Lunch)</option>
                      <option value="06:00 PM" className="bg-[#0d1217] text-white">06:00 PM (Dinner)</option>
                      <option value="07:30 PM" className="bg-[#0d1217] text-white">07:30 PM (Dinner)</option>
                      <option value="08:30 PM" className="bg-[#0d1217] text-white">08:30 PM (Dinner)</option>
                      <option value="09:30 PM" className="bg-[#0d1217] text-white">09:30 PM (Dinner)</option>
                    </select>
                    <ChevronDown className="absolute right-1 top-4 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Row 4: Your Note */}
                <div>
                  <textarea
                    rows={3}
                    placeholder="Your Note *"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-[#ff6426] py-3 text-sm text-white placeholder-gray-400 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    id="book-a-table-submit-btn"
                    whileHover={{ scale: 1.03, backgroundColor: '#e6551b' }}
                    whileTap={{ scale: 0.97 }}
                    className="px-9 py-3.5 rounded-sm bg-[#ff6426] text-white font-medium text-sm transition-colors duration-300 shadow-md cursor-pointer tracking-wide"
                  >
                    Book A Table
                  </motion.button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
