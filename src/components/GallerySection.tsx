import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export const GallerySection: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  const handleNext = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section className="relative py-24 px-6 bg-[#FBF8F3] text-[#3D2C24] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3 text-[#C8953C]">
            <Sparkles className="w-4 h-4" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.35em] uppercase">Visual Vignettes</span>
            <Sparkles className="w-4 h-4" />
          </div>

          <h2 className="font-playfair text-4xl sm:text-6xl text-[#3D2C24] font-bold mb-4">
            The Wedding Gallery
          </h2>

          <p className="font-cormorant text-xl sm:text-2xl italic text-[#7A533E] max-w-xl mx-auto">
            Moments captured in golden light, framed in timeless Moroccan elegance.
          </p>
        </motion.div>

        {/* Vintage Gold Framed Grid - Horizontal Scroll Track on Phone View */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {GALLERY_IMAGES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.8 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setActivePhotoIndex(index)}
              className="relative p-3 rounded-2xl bg-[#3D2C24] border-4 border-[#D4A359] shadow-2xl gold-shimmer group cursor-pointer min-w-[80vw] sm:min-w-0 snap-center shrink-0"
            >
              {/* Outer Vintage Frame Corner Filigree */}
              <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#EAD096] z-10" />
              <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#EAD096] z-10" />
              <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#EAD096] z-10" />
              <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#EAD096] z-10" />

              <div className="relative rounded-lg overflow-hidden h-72 sm:h-80">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211511]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-[#F7E7CE]">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-playfair text-xl font-bold text-gold-gradient">{item.title}</h3>
                    <Maximize2 className="w-4 h-4 text-[#D4A359]" />
                  </div>
                  <p className="font-cormorant text-sm italic text-[#F7E7CE]/90">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#211511]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#3D2C24] border border-[#D4A359] text-[#EAD096] hover:bg-[#54382B] transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-[#3D2C24] border border-[#D4A359] text-[#EAD096] hover:bg-[#54382B] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-[#3D2C24] border border-[#D4A359] text-[#EAD096] hover:bg-[#54382B] transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image & Caption */}
            <div className="max-w-4xl w-full text-center">
              <div className="p-4 rounded-3xl bg-[#3D2C24] border-4 border-[#D4A359] shadow-2xl gold-shimmer inline-block">
                <img
                  src={GALLERY_IMAGES[activePhotoIndex].url}
                  alt={GALLERY_IMAGES[activePhotoIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto mx-auto rounded-xl object-contain"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-playfair text-3xl text-gold-gradient font-bold mb-2">
                  {GALLERY_IMAGES[activePhotoIndex].title}
                </h3>
                <p className="font-cormorant text-xl italic text-[#F7E7CE]">
                  {GALLERY_IMAGES[activePhotoIndex].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
