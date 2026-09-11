import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading, SpoonArrow } from './Icons';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { IMAGES } from '../images';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  return (
    <section id="blog" className="relative py-20 md:py-28 overflow-hidden bg-[#fdfbf8]">
      {/* Background Image with Ambient Overlay (Matching Homepage) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.backgrounds.blog}
          alt="Atmospheric restaurant blog background"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 opacity-80"
          referrerPolicy="no-referrer"
        />
        {/* Lighter, balanced gradient overlay matching homepage section */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf8]/85 via-[#fdfbf8]/45 to-transparent" />
        {/* Soft top and bottom fade shadows into adjacent sections */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Latest From Blog"
            align="left"
          />
        </motion.div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              id={`blog-card-${post.id}`}
              onClick={() => onSelectPost(post)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white rounded-t-3xl rounded-b-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer"
            >
              {/* Blog Post Image */}
              <div className="relative overflow-hidden aspect-[16/11] bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Blog Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Date & Tag */}
                  <div className="flex items-center gap-2 text-xs font-medium text-[#888888] mb-3">
                    <span>{post.date}</span>
                    <span className="text-[#ff6426] font-semibold">{post.tag}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-serif-heading font-bold text-[#1c1d1f] leading-snug mb-4 group-hover:text-[#ff6426] transition-colors">
                    {post.title}
                  </h3>
                </div>

                {/* Read More button */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[#444444] group-hover:text-[#ff6426] transition-colors">
                    <span>Read More</span>
                    <SpoonArrow />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
