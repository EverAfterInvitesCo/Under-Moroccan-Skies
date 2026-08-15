import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Quote } from 'lucide-react';
import { STORY_MILESTONES } from '../data';

export const StoryTimelineSection: React.FC = () => {
  return (
    <section className="relative py-28 px-6 bg-[#211511] text-[#F7E7CE] overflow-hidden">
      {/* Background Starlight & Soft Light Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4A359]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B85B3F]/15 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-3 text-[#D4A359]">
            <Heart className="w-4 h-4 animate-pulse text-[#E5A99B]" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.4em] uppercase text-[#EAD096]">
              Our Chapters
            </span>
            <Heart className="w-4 h-4 animate-pulse text-[#E5A99B]" />
          </div>

          <h2 className="font-playfair text-4xl sm:text-6xl text-gold-gradient font-bold mb-4">
            Our Love Story
          </h2>

          <p className="font-cormorant text-xl sm:text-2xl italic text-[#F7E7CE]/80 max-w-2xl mx-auto">
            A journey woven through art, starry desert nights, and quiet promises.
          </p>
        </motion.div>

        {/* Timeline Cards - Horizontal Scroll Track on Phone View, Vertical Timeline on Tablet/Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-none md:block md:border-l-0 md:ml-0">
          {STORY_MILESTONES.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1 }}
                className={`relative min-w-[88vw] sm:min-w-[420px] md:min-w-0 md:w-full snap-center md:mb-24 flex flex-col md:flex-row items-stretch ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot Indicator (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#3D2C24] border-2 border-[#D4A359] items-center justify-center text-[#D4A359] shadow-[0_0_20px_rgba(212,163,89,0.5)] z-20">
                  <span className="font-cinzel text-xs font-bold">{item.year.slice(2)}</span>
                </div>

                {/* Content Box */}
                <div className="w-full md:w-1/2 md:px-10 flex flex-col justify-between">
                  <div className="bg-[#3D2C24]/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#D4A359]/50 shadow-2xl gold-shimmer relative h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-cinzel text-xs font-bold tracking-widest text-[#D4A359] uppercase">
                          {item.year} • {item.location}
                        </span>
                        <Sparkles className="w-4 h-4 text-[#EAD096]/60" />
                      </div>

                      <h3 className="font-playfair text-2xl sm:text-3xl text-gold-gradient font-bold mb-3">
                        {item.title}
                      </h3>

                      <p className="font-cormorant text-base sm:text-lg text-[#F7E7CE]/90 italic leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <blockquote className="font-cormorant text-sm sm:text-base italic text-[#E5A99B] border-l-2 border-[#D4A359]/60 pl-3 py-1 bg-[#211511]/40 rounded-r-lg flex items-start gap-2 mt-auto">
                      <Quote className="w-4 h-4 text-[#D4A359] shrink-0 mt-0.5" />
                      <span>{item.quote}</span>
                    </blockquote>
                  </div>
                </div>

                {/* Watercolor Illustration Image Frame */}
                <div className="w-full md:w-1/2 md:px-10 mt-4 md:mt-0">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4A359]/60 shadow-2xl group h-48 sm:h-80">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#211511]/80 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
