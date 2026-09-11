import React, { useState } from 'react';
import { X, Sparkles, Film, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ExclusiveDish, MenuItem, BlogPost, Chef } from '../types';
import { VIDEOS_LIST, VideoItem } from '../video';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS_LIST[0]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#11161b] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close video modal"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm border border-white/10"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Video Player Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                key={activeVideo.id}
                controls
                autoPlay
                playsInline
                poster={activeVideo.poster}
                className="w-full h-full object-cover"
              >
                <source src={activeVideo.src} type={activeVideo.type} />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Story Info & Video Playlist Selector */}
            <div className="p-6 sm:p-8 bg-[#0f1418] text-white">
              {/* Video Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mr-2">
                  <Film className="w-3.5 h-3.5 text-[#ff6426]" />
                  <span>Featured Videos:</span>
                </div>
                {VIDEOS_LIST.map((video) => {
                  const isActive = video.id === activeVideo.id;
                  return (
                    <button
                      key={video.id}
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className={`text-xs px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#ff6426] text-white font-semibold shadow-md'
                          : 'bg-white/5 hover:bg-white/10 text-gray-300'
                      }`}
                    >
                      <PlayCircle className="w-3 h-3" />
                      <span>{video.title.split('&')[0].trim()}</span>
                      <span className="text-[10px] opacity-75">({video.duration})</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#ff6426] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{activeVideo.subtitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-heading font-bold mb-3">
                {activeVideo.title}
              </h3>
              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface DetailModalProps {
  item: ExclusiveDish | MenuItem | BlogPost | Chef | null;
  type: 'dish' | 'menu' | 'blog' | 'chef' | null;
  onClose: () => void;
  onBookTable: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, type, onClose, onBookTable }) => {
  const isOpen = Boolean(item && type);

  return (
    <AnimatePresence>
      {isOpen && item && type && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 25 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]"
          >
            {/* Header Close */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </motion.button>

            {/* Image */}
            <div className="relative h-60 w-full shrink-0 bg-gray-100">
              <img
                src={item.image}
                alt={'name' in item ? item.name : item.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {'price' in item && item.price && (
                <div className="absolute bottom-4 right-4 bg-[#ff6426] text-white font-semibold text-sm px-4 py-1 rounded-full shadow-lg">
                  {item.price}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ff6426]">
                {type === 'dish'
                  ? 'Exclusive Specialty'
                  : type === 'menu'
                  ? 'Menu Selection'
                  : type === 'chef'
                  ? 'Master Chef'
                  : 'Culinary Chronicle'}
              </span>

              <h3 className="text-2xl font-serif-heading font-bold text-[#1c1d1f]">
                {'name' in item ? item.name : item.title}
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed font-sans">
                {'description' in item
                  ? item.description
                  : 'summary' in item
                  ? item.summary
                  : 'bio' in item
                  ? item.bio
                  : ''}
              </p>

              {'role' in item && (
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-sans block mb-1">Kitchen Specialization</span>
                  <p className="text-sm font-medium text-gray-800">{item.role} & Heritage Specialist</p>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <motion.button
                  onClick={() => {
                    onClose();
                    onBookTable();
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-6 py-2.5 rounded-full text-xs font-medium bg-[#ff6426] hover:bg-[#e0541d] text-white transition-colors shadow-sm cursor-pointer"
                >
                  Book A Table
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
