import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronDown, Lock, Unlock } from 'lucide-react';
import { ASSETS } from '../data';

interface IntroGateProps {
  coupleNames: string;
  onGateOpen?: () => void;
}

export const IntroGate: React.FC<IntroGateProps> = ({ coupleNames, onGateOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGate = () => {
    setIsOpen(true);
    if (onGateOpen) onGateOpen();
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#211511]">
      {/* Background Palace Illustration Behind Gate */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${ASSETS.courtyard})` }}
        initial={{ scale: 1.15 }}
        animate={{ scale: isOpen ? 1 : 1.05 }}
        transition={{ duration: 12, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#211511]/60 via-[#211511]/30 to-[#211511]/80" />
      </motion.div>

      {/* Behind Gate Content (Title) */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Soft Warm Radial Backdrop Glow for Luxury Contrast */}
        <div className="absolute inset-0 bg-radial from-[#D4A359]/20 via-[#211511]/40 to-transparent blur-3xl pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={{ opacity: isOpen ? 1 : 0.2, y: isOpen ? 0 : 25, scale: isOpen ? 1 : 0.95 }}
          transition={{ duration: 2.4, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center py-10"
        >
          <div className="flex items-center gap-4 mb-6 text-[#D4A359]">
            <span className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#D4A359]/80" />
            <Sparkles className="w-4 h-4 text-[#D4A359]" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.4em] uppercase text-[#EAD096]/90">
              Royal Wedding Invitation
            </span>
            <Sparkles className="w-4 h-4 text-[#D4A359]" />
            <span className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#D4A359]/80" />
          </div>

          <h1 className="font-playfair text-6xl sm:text-8xl lg:text-9xl text-gold-gradient font-bold tracking-tight drop-shadow-2xl mb-6 leading-tight">
            {coupleNames}
          </h1>

          <p className="font-cormorant text-xl sm:text-3xl italic text-[#F7E7CE]/90 font-light max-w-2xl mb-12 tracking-wide leading-relaxed">
            “Two souls painted in gold, bound by love under the Moroccan stars”
          </p>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1.4 }}
              className="flex flex-col items-center gap-2 mt-2"
            >
              <span className="font-cinzel text-xs text-[#EAD096]/80 tracking-[0.3em] uppercase">
                Scroll to enter the storybook
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-5 h-5 text-[#D4A359]" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Palace Gate Doors (Left and Right Sliding Panels) */}
      <AnimatePresence>
        {!isOpen && (
          <>
            {/* Left Gate Panel */}
            <motion.div
              key="left-gate"
              className="absolute top-0 left-0 w-1/2 h-full z-20 bg-cover bg-right border-r-2 border-[#D4A359]/60 shadow-2xl flex items-center justify-end pr-4 sm:pr-12"
              style={{ backgroundImage: `url(${ASSETS.gateHero})` }}
              exit={{ x: '-100%', transition: { duration: 3.0, ease: [0.7, 0, 0.2, 1] } }}
            >
              <div className="absolute inset-0 bg-[#3D2C24]/50 mix-blend-multiply" />
            </motion.div>

            {/* Right Gate Panel */}
            <motion.div
              key="right-gate"
              className="absolute top-0 right-0 w-1/2 h-full z-20 bg-cover bg-left border-l-2 border-[#D4A359]/60 shadow-2xl flex items-center justify-start pl-4 sm:pl-12"
              style={{ backgroundImage: `url(${ASSETS.gateHero})` }}
              exit={{ x: '100%', transition: { duration: 3.0, ease: [0.7, 0, 0.2, 1] } }}
            >
              <div className="absolute inset-0 bg-[#3D2C24]/50 mix-blend-multiply" />
            </motion.div>

            {/* Gate Center Lock & Seal Button */}
            <motion.div
              key="gate-seal"
              className="absolute z-30 flex flex-col items-center"
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.6 } }}
            >
              <motion.button
                onClick={handleOpenGate}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="group relative cursor-pointer flex flex-col items-center gap-3 p-6 sm:p-8 rounded-full bg-[#3D2C24]/90 border-2 border-[#D4A359] text-[#EAD096] shadow-[0_0_50px_rgba(212,163,89,0.5)] backdrop-blur-md transition-all"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#D4A359]/50 flex items-center justify-center bg-gradient-to-br from-[#54382B] to-[#211511] gold-shimmer">
                  <Lock className="w-8 h-8 text-[#D4A359] group-hover:hidden transition-all" />
                  <Unlock className="w-8 h-8 text-[#EAD096] hidden group-hover:block transition-all" />
                </div>
                <div className="text-center">
                  <span className="block font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#EAD096] uppercase font-bold">
                    Open Palace Gates
                  </span>
                  <span className="block font-cormorant text-xs italic text-[#E5A99B]">
                    Click to reveal the invitation
                  </span>
                </div>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
