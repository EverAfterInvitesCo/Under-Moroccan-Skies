import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Ticket, Sparkles, User, Users, Mail, Utensils, Music } from 'lucide-react';
import { RSVPData } from '../types';
import { OrnateFrame } from './OrnateFrame';

export const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    attendance: 'accept' | 'decline';
    guestCount: number;
    events: string[];
    dietary: string;
    songRequest: string;
  }>({
    fullName: '',
    email: '',
    attendance: 'accept',
    guestCount: 1,
    events: ['Welcome Tea', 'Katb Al-Kitab Ceremony', 'Gala Dinner'],
    dietary: '',
    songRequest: '',
  });

  const [submittedRSVP, setSubmittedRSVP] = useState<RSVPData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load existing RSVP from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('royal_wedding_rsvp');
    if (saved) {
      try {
        setSubmittedRSVP(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved RSVP', e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newRSVP: RSVPData = {
        id: `rsvp-${Date.now()}`,
        fullName: formData.fullName,
        email: formData.email,
        attendance: formData.attendance,
        guestCount: Number(formData.guestCount),
        events: formData.events,
        dietary: formData.dietary || 'None',
        songRequest: formData.songRequest,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('royal_wedding_rsvp', JSON.stringify(newRSVP));
      setSubmittedRSVP(newRSVP);
      setIsSubmitting(false);
    }, 1200);
  };

  const toggleEvent = (eventName: string) => {
    setFormData((prev) => {
      const exists = prev.events.includes(eventName);
      return {
        ...prev,
        events: exists
          ? prev.events.filter((e) => e !== eventName)
          : [...prev.events, eventName],
      };
    });
  };

  return (
    <section className="relative py-28 px-6 bg-[#F7ECE1] text-[#3D2C24] overflow-hidden">
      {/* Background Ornamentation */}
      <div className="absolute inset-0 paper-texture opacity-90 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3 text-[#C8953C]">
            <Sparkles className="w-4 h-4" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.35em] uppercase">R.S.V.P</span>
            <Sparkles className="w-4 h-4" />
          </div>

          <h2 className="font-playfair text-4xl sm:text-6xl text-[#3D2C24] font-bold mb-4">
            Kindly Respond
          </h2>

          <p className="font-cormorant text-xl sm:text-2xl italic text-[#7A533E] max-w-xl mx-auto">
            Please confirm your attendance by October 15th, 2026, so we may prepare your seat at the royal banquet.
          </p>
        </motion.div>

        {/* RSVP Form or Ticket Display */}
        <AnimatePresence mode="wait">
          {submittedRSVP ? (
            <motion.div
              key="ticket"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 sm:p-12 rounded-3xl bg-[#3D2C24] border-4 border-[#D4A359] text-[#F7E7CE] shadow-2xl relative gold-shimmer">
                {/* Stamp Emblem */}
                <div className="absolute top-6 right-6 w-20 h-20 rounded-full border-2 border-[#D4A359]/60 flex flex-col items-center justify-center p-2 transform rotate-12 opacity-80">
                  <Ticket className="w-6 h-6 text-[#D4A359]" />
                  <span className="font-cinzel text-[9px] text-[#EAD096] uppercase tracking-widest mt-0.5">VERIFIED</span>
                </div>

                <div className="flex items-center gap-3 text-[#D4A359] mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                  <span className="font-cinzel text-sm tracking-widest uppercase font-bold text-[#EAD096]">
                    RSVP Confirmed
                  </span>
                </div>

                <h3 className="font-playfair text-3xl sm:text-4xl text-gold-gradient font-bold mb-2">
                  {submittedRSVP.fullName}
                </h3>

                <p className="font-cormorant text-xl italic text-[#F7E7CE]/90 mb-6">
                  {submittedRSVP.attendance === 'accept'
                    ? `We are overjoyed to welcome you ${submittedRSVP.guestCount > 1 ? `and your ${submittedRSVP.guestCount - 1} guest(s)` : ''} to Marrakech!`
                    : 'We will miss your presence deeply, but thank you for your warm blessings.'}
                </p>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 border-t border-[#D4A359]/30 text-sm font-cormorant">
                  <div>
                    <span className="block font-cinzel text-[10px] sm:text-xs text-[#D4A359] uppercase">Status</span>
                    <span className="text-base sm:text-lg capitalize">{submittedRSVP.attendance === 'accept' ? 'Joyfully Attending' : 'Regretfully Declining'}</span>
                  </div>
                  <div>
                    <span className="block font-cinzel text-[10px] sm:text-xs text-[#D4A359] uppercase">Party Size</span>
                    <span className="text-base sm:text-lg">{submittedRSVP.guestCount} Guest(s)</span>
                  </div>
                  <div>
                    <span className="block font-cinzel text-[10px] sm:text-xs text-[#D4A359] uppercase">Dietary</span>
                    <span className="text-base sm:text-lg">{submittedRSVP.dietary}</span>
                  </div>
                  <div>
                    <span className="block font-cinzel text-[10px] sm:text-xs text-[#D4A359] uppercase">Song Request</span>
                    <span className="text-base sm:text-lg italic">{submittedRSVP.songRequest || 'None'}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#D4A359]/30 flex justify-between items-center">
                  <button
                    onClick={() => setSubmittedRSVP(null)}
                    className="text-xs font-cinzel text-[#EAD096] underline hover:text-white transition-all cursor-pointer"
                  >
                    Edit RSVP Details
                  </button>
                  <span className="font-cinzel text-xs text-[#D4A359]/80 uppercase tracking-widest">
                    Invitation #MK-2026-ROYAL
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <OrnateFrame variant="gold">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Attendance Toggle Buttons */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'accept' })}
                      className={`p-3 sm:p-4 rounded-xl border-2 font-cinzel text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 ${
                        formData.attendance === 'accept'
                          ? 'border-[#D4A359] bg-[#3D2C24] text-[#EAD096] shadow-lg'
                          : 'border-[#D4A359]/30 bg-[#FBF8F3] text-[#3D2C24] hover:border-[#D4A359]/60'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#D4A359] shrink-0" />
                      <span>Joyfully Accepts</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'decline' })}
                      className={`p-3 sm:p-4 rounded-xl border-2 font-cinzel text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 ${
                        formData.attendance === 'decline'
                          ? 'border-[#B85B3F] bg-[#B85B3F] text-white shadow-lg'
                          : 'border-[#D4A359]/30 bg-[#FBF8F3] text-[#3D2C24] hover:border-[#D4A359]/60'
                      }`}
                    >
                      <span>Regretfully Declines</span>
                    </button>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-cinzel text-xs text-[#7A533E] uppercase font-bold mb-2 flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-[#C8953C]" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Princess Salma Al-Mansoor"
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F3] border border-[#D4A359]/50 text-[#3D2C24] focus:outline-none focus:border-[#C8953C] font-cormorant text-lg placeholder-[#7A533E]/40"
                      />
                    </div>

                    <div>
                      <label className="block font-cinzel text-xs text-[#7A533E] uppercase font-bold mb-2 flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#C8953C]" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. salma@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F3] border border-[#D4A359]/50 text-[#3D2C24] focus:outline-none focus:border-[#C8953C] font-cormorant text-lg placeholder-[#7A533E]/40"
                      />
                    </div>
                  </div>

                  {/* Number of Guests */}
                  {formData.attendance === 'accept' && (
                    <div>
                      <label className="block font-cinzel text-xs text-[#7A533E] uppercase font-bold mb-2 flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#C8953C]" />
                        Total Guests Attending
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F3] border border-[#D4A359]/50 text-[#3D2C24] focus:outline-none focus:border-[#C8953C] font-cormorant text-lg cursor-pointer"
                      >
                        <option value={1}>1 Guest (Just Myself)</option>
                        <option value={2}>2 Guests (+1 Partner/Guest)</option>
                        <option value={3}>3 Guests (Family)</option>
                        <option value={4}>4 Guests (Family Group)</option>
                      </select>
                    </div>
                  )}

                  {/* Dietary Requirements */}
                  <div>
                    <label className="block font-cinzel text-xs text-[#7A533E] uppercase font-bold mb-2 flex items-center gap-2">
                      <Utensils className="w-3.5 h-3.5 text-[#C8953C]" />
                      Dietary Preferences / Restrictions
                    </label>
                    <input
                      type="text"
                      value={formData.dietary}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      placeholder="e.g. Vegetarian, Halal, Gluten-Free, Allergies"
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF8F3] border border-[#D4A359]/50 text-[#3D2C24] focus:outline-none focus:border-[#C8953C] font-cormorant text-lg placeholder-[#7A533E]/40"
                    />
                  </div>

                  {/* Song Request */}
                  <div>
                    <label className="block font-cinzel text-xs text-[#7A533E] uppercase font-bold mb-2 flex items-center gap-2">
                      <Music className="w-3.5 h-3.5 text-[#C8953C]" />
                      Song Request for the Orchestra / DJ
                    </label>
                    <input
                      type="text"
                      value={formData.songRequest}
                      onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                      placeholder="e.g. Fairouz, Amr Diab, Abdel Halim, Classic Waltz"
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF8F3] border border-[#D4A359]/50 text-[#3D2C24] focus:outline-none focus:border-[#C8953C] font-cormorant text-lg placeholder-[#7A533E]/40"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-4 rounded-full bg-gold-gradient text-[#211511] font-cinzel text-sm font-bold tracking-[0.2em] uppercase hover:brightness-110 shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-3 mx-auto"
                    >
                      {isSubmitting ? (
                        <span>Submitting Invitation...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 fill-current" />
                          Confirm Royal RSVP
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </OrnateFrame>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
