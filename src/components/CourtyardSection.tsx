import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../data';
import { OrnateFrame } from './OrnateFrame';

export const CourtyardSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen text-[#3D2C24]">
      {/* SECTION 1: COURTYARD WATERCOLOR */}
      <section className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Watercolor Painting with Shimmer & Palm Swaying */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={ASSETS.courtyard}
            alt="Illustrated Palace Courtyard"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-95 opacity-90 transition-transform duration-[10000ms]"
          />
          {/* Subtle paper grain and vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#211511]/80 via-[#FBF8F3]/50 to-[#FBF8F3]/95" />
        </div>

        {/* Calligraphy Announcement Container */}
        <div className="relative z-10 max-w-3xl mx-auto text-center my-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          >
            <OrnateFrame variant="gold" className="text-center p-8 sm:p-14">
              <span className="block font-cinzel text-xs sm:text-sm tracking-[0.4em] text-[#C8953C] uppercase mb-6">
                In the Name of Love & Grace
              </span>

              <h2 className="font-playfair text-2xl sm:text-4xl text-[#3D2C24] font-semibold mb-8 tracking-wide italic">
                “Together with their families”
              </h2>

              <div className="my-8 flex items-center justify-center gap-6">
                <span className="h-[1px] w-20 bg-[#D4A359]/60" />
                <span className="font-cinzel text-xl text-[#B85B3F]">❖</span>
                <span className="h-[1px] w-20 bg-[#D4A359]/60" />
              </div>

              <div className="flex flex-col sm:flex-col items-center justify-center gap-4 sm:gap-6 my-10 max-sm:flex-row max-sm:gap-2 max-sm:items-baseline">
                <div className="text-center">
                  <span className="block font-cormorant text-xs sm:text-sm text-[#7A533E] uppercase tracking-[0.2em] font-medium">The Bride</span>
                  <h3 className="font-playfair text-2xl sm:text-6xl text-gold-gradient font-bold mt-1 leading-tight">
                    Maryam Al-Mansoor
                  </h3>
                </div>

                <div className="font-cormorant text-2xl sm:text-3xl text-[#C8953C] italic font-light px-1">&</div>

                <div className="text-center">
                  <span className="block font-cormorant text-xs sm:text-sm text-[#7A533E] uppercase tracking-[0.2em] font-medium">The Groom</span>
                  <h3 className="font-playfair text-2xl sm:text-6xl text-gold-gradient font-bold mt-1 leading-tight">
                    Khaled El-Sayed
                  </h3>
                </div>
              </div>

              <p className="font-cormorant text-lg sm:text-2xl text-[#54382B] max-w-xl mx-auto italic leading-relaxed pt-6 border-t border-[#D4A359]/30 font-light">
                request the honor of your presence to celebrate their wedding union, as two hearts become one under a canopy of blessings and joy.
              </p>
            </OrnateFrame>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SEAMLESS PARALLAX ENTRANCE SCENE */}
      <section className="relative min-h-[85vh] py-28 px-6 flex items-center justify-center overflow-hidden">
        {/* Parallax Background Artwork */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.gardenHall}
            alt="Palace Entrance Garden"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FBF8F3]/95 via-[#F7ECE1]/80 to-[#FBF8F3]" />
        </div>

        {/* Seamless Narrative Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="bg-[#3D2C24]/90 backdrop-blur-md p-10 sm:p-16 rounded-3xl border border-[#D4A359]/60 shadow-2xl text-[#F7E7CE]">
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.45em] uppercase text-[#D4A359] block mb-4">
              The Journey of Two Souls
            </span>
            <h3 className="font-playfair text-3xl sm:text-5xl text-gold-gradient font-semibold mb-8">
              A Story Written in Water & Gold
            </h3>
            <p className="font-cormorant text-xl sm:text-2xl italic leading-relaxed text-[#FBF8F3]/90 font-light max-w-2xl mx-auto">
              “Like a river flowing toward the calm blue sea, our paths converged through shared heritage, gentle laughter, and timeless devotion. We invite you to step through these golden archways into our fairytale.”
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
