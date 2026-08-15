import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Share2, Check, Instagram, Facebook } from 'lucide-react';
import { ASSETS } from '../data';

export const SunsetFinalSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="relative min-h-screen py-24 px-6 bg-[#211511] text-[#F7E7CE] flex flex-col items-center justify-between overflow-hidden">
      {/* Background Sunset Palace Watercolor Image with Glowing Lanterns */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.sunsetGlow}
          alt="Sunset Palace"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-bottom filter brightness-90 animate-water-shimmer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#150D0A] via-[#211511]/40 to-[#211511]/70" />
      </div>

      {/* Floating Glowing Lanterns Overhead */}
      <div className="absolute top-12 left-1/4 z-10 animate-float pointer-events-none" style={{ animationDuration: '6s' }}>
        <div className="w-8 h-12 rounded-full bg-gradient-to-b from-[#D4A359] to-[#B85B3F] shadow-[0_0_30px_rgba(212,163,89,0.9)] opacity-90 border border-[#EAD096]" />
      </div>
      <div className="absolute top-20 right-1/4 z-10 animate-float pointer-events-none" style={{ animationDuration: '8s', animationDelay: '2s' }}>
        <div className="w-10 h-14 rounded-full bg-gradient-to-b from-[#EAD096] to-[#D4A359] shadow-[0_0_35px_rgba(234,208,150,0.9)] opacity-85 border border-[#EAD096]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-[#D4A359]">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.4em] uppercase text-[#EAD096]">
              With Endless Gratitude
            </span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>

          <h2 className="font-playfair text-5xl sm:text-7xl lg:text-8xl text-gold-gradient font-bold mb-6 tracking-wide drop-shadow-2xl">
            See you on our special day.
          </h2>

          <p className="font-cormorant text-2xl sm:text-3xl italic text-[#F7E7CE]/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            “Your presence, prayers, and love complete our joy. Until the lanterns light our path in Marrakech...”
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gold-gradient text-[#211511] font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase hover:brightness-110 shadow-2xl transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#211511]" />
                  Link Copied to Clipboard
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  Share Royal Invitation
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer Branding & Social Links */}
      <footer className="relative z-10 w-full pt-12 border-t border-[#D4A359]/30 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-6">
          <div className="text-left">
            <span className="block font-playfair text-lg text-gold-gradient font-bold">
              Maryam & Khaled
            </span>
            <span className="block font-cormorant text-sm italic text-[#F7E7CE]/70">
              Made with love by <strong className="text-[#EAD096]">EverAfterInvites</strong>
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#3D2C24]/80 border border-[#D4A359]/50 text-[#EAD096] hover:bg-[#54382B] transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#3D2C24]/80 border border-[#D4A359]/50 text-[#EAD096] hover:bg-[#54382B] transition-all"
              aria-label="TikTok"
            >
              <span className="font-cinzel text-xs font-bold">TT</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#3D2C24]/80 border border-[#D4A359]/50 text-[#EAD096] hover:bg-[#54382B] transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};
