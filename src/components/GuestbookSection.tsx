import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Send, MessageSquare, Feather } from 'lucide-react';
import { GuestbookWish } from '../types';
import { INITIAL_WISHES } from '../data';

export const GuestbookSection: React.FC = () => {
  const [wishes, setWishes] = useState<GuestbookWish[]>([]);
  const [newSender, setNewSender] = useState('');
  const [newRelationship, setNewRelationship] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  // Load stored wishes or use defaults
  useEffect(() => {
    const saved = localStorage.getItem('royal_wedding_wishes');
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        setWishes(INITIAL_WISHES);
      }
    } else {
      setWishes(INITIAL_WISHES);
      localStorage.setItem('royal_wedding_wishes', JSON.stringify(INITIAL_WISHES));
    }
  }, []);

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSender.trim() || !newMessage.trim()) return;

    const wish: GuestbookWish = {
      id: `wish-${Date.now()}`,
      senderName: newSender,
      relationship: newRelationship || 'Guest & Well-wisher',
      message: newMessage,
      createdAt: new Date().toISOString(),
      likes: 1,
    };

    const updated = [wish, ...wishes];
    setWishes(updated);
    localStorage.setItem('royal_wedding_wishes', JSON.stringify(updated));

    setNewSender('');
    setNewRelationship('');
    setNewMessage('');
    setIsAdding(false);
  };

  const handleLike = (id: string) => {
    const updated = wishes.map((w) =>
      w.id === id ? { ...w, likes: w.likes + 1 } : w
    );
    setWishes(updated);
    localStorage.setItem('royal_wedding_wishes', JSON.stringify(updated));
  };

  return (
    <section className="relative py-28 px-6 bg-[#211511] text-[#F7E7CE] overflow-hidden">
      {/* Background Soft Gold Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A359]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3 text-[#D4A359]">
            <Feather className="w-5 h-5 animate-pulse" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.4em] uppercase text-[#EAD096]">
              Royal Guestbook
            </span>
            <Feather className="w-5 h-5 animate-pulse" />
          </div>

          <h2 className="font-playfair text-4xl sm:text-6xl text-gold-gradient font-bold mb-4">
            Words of Love & Blessing
          </h2>

          <p className="font-cormorant text-xl sm:text-2xl italic text-[#F7E7CE]/80 max-w-xl mx-auto mb-8">
            Leave your heartfelt wishes for Maryam and Khaled as they embark on this eternal journey.
          </p>

          <button
            onClick={() => setIsAdding(!isAdding)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-gradient text-[#211511] font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase hover:brightness-110 shadow-2xl transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            {isAdding ? 'Close Guestbook Form' : 'Write a Blessing'}
          </button>
        </motion.div>

        {/* New Wish Form Collapsible */}
        <AnimatePresence>
          {isAdding && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-16"
            >
              <form onSubmit={handleAddWish} className="p-8 rounded-3xl bg-[#3D2C24] border-2 border-[#D4A359] shadow-2xl space-y-5 gold-shimmer">
                <div className="grid grid-cols-2 gap-3 sm:gap-5">
                  <div>
                    <label className="block font-cinzel text-[10px] sm:text-xs text-[#EAD096] uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={newSender}
                      onChange={(e) => setNewSender(e.target.value)}
                      placeholder="e.g. Layla & Hamza"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#211511] border border-[#D4A359]/40 text-[#F7E7CE] focus:outline-none focus:border-[#D4A359] font-cormorant text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-cinzel text-[10px] sm:text-xs text-[#EAD096] uppercase mb-1">Relationship</label>
                    <input
                      type="text"
                      value={newRelationship}
                      onChange={(e) => setNewRelationship(e.target.value)}
                      placeholder="e.g. Friend, Cousin"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#211511] border border-[#D4A359]/40 text-[#F7E7CE] focus:outline-none focus:border-[#D4A359] font-cormorant text-base sm:text-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-cinzel text-xs text-[#EAD096] uppercase mb-1">Your Blessing *</label>
                  <textarea
                    required
                    rows={4}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Write your wishes for the happy couple..."
                    className="w-full px-4 py-3 rounded-xl bg-[#211511] border border-[#D4A359]/40 text-[#F7E7CE] focus:outline-none focus:border-[#D4A359] font-cormorant text-lg"
                  />
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-gold-gradient text-[#211511] font-cinzel text-xs font-bold tracking-widest uppercase hover:brightness-110 shadow-lg cursor-pointer"
                  >
                    Post Blessing
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Wishes Grid - Horizontal Scroll Track on Phone View */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 scrollbar-none md:grid md:grid-cols-2 md:gap-8">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#3D2C24]/80 backdrop-blur-md border border-[#D4A359]/50 shadow-2xl relative flex flex-col justify-between group hover:border-[#D4A359] transition-all min-w-[85vw] sm:min-w-0 snap-center shrink-0"
            >
              {/* Wax Seal Decorative Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#B85B3F] to-[#7A2E19] border border-[#EAD096] flex items-center justify-center text-[#EAD096] shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>

              <div>
                <p className="font-cormorant text-xl italic text-[#F7E7CE] leading-relaxed mb-6 pt-2">
                  “{wish.message}”
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#D4A359]/30">
                <div>
                  <h4 className="font-playfair text-lg text-gold-gradient font-bold">{wish.senderName}</h4>
                  <span className="font-cormorant text-sm italic text-[#EAD096]/70">{wish.relationship}</span>
                </div>

                <button
                  onClick={() => handleLike(wish.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#211511]/60 border border-[#D4A359]/30 text-[#E5A99B] hover:text-white transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span className="font-cinzel text-xs">{wish.likes}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
