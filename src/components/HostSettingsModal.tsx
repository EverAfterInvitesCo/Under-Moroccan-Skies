import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, X, Download, Trash2, Users, MessageSquare, Check, Sparkles } from 'lucide-react';
import { RSVPData, GuestbookWish } from '../types';

interface HostSettingsModalProps {
  coupleNames: string;
  setCoupleNames: (names: string) => void;
}

export const HostSettingsModal: React.FC<HostSettingsModalProps> = ({
  coupleNames,
  setCoupleNames,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'rsvp' | 'wishes' | 'settings'>('rsvp');
  const [tempNames, setTempNames] = useState(coupleNames);

  const getRSVPs = (): RSVPData[] => {
    const saved = localStorage.getItem('royal_wedding_rsvp');
    return saved ? [JSON.parse(saved)] : [];
  };

  const getWishes = (): GuestbookWish[] => {
    const saved = localStorage.getItem('royal_wedding_wishes');
    return saved ? JSON.parse(saved) : [];
  };

  const handleSaveNames = (e: React.FormEvent) => {
    e.preventDefault();
    setCoupleNames(tempNames);
    setIsOpen(false);
  };

  const exportRSVPCSV = () => {
    const rsvps = getRSVPs();
    if (!rsvps.length) return alert('No RSVPs to export yet!');

    const headers = 'ID,Full Name,Email,Attendance,Guest Count,Dietary,Song Request,Date\n';
    const rows = rsvps
      .map(
        (r) =>
          `"${r.id}","${r.fullName}","${r.email}","${r.attendance}",${r.guestCount},"${r.dietary}","${r.songRequest || ''}","${r.createdAt}"`
      )
      .join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Royal_Wedding_RSVPs.csv';
    a.click();
  };

  return (
    <>
      {/* Discrete Top Left Floating Settings Gear */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-40 p-3 rounded-full bg-[#3D2C24]/80 backdrop-blur-md border border-[#D4A359]/60 text-[#EAD096] hover:bg-[#3D2C24] transition-all shadow-xl cursor-pointer"
        aria-label="Organizer Settings"
      >
        <Settings className="w-4 h-4 text-[#D4A359]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#211511]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-3xl bg-[#3D2C24] border-2 border-[#D4A359] rounded-3xl p-6 sm:p-8 text-[#F7E7CE] shadow-2xl relative gold-shimmer"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#54382B] text-[#EAD096] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-[#D4A359] mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-cinzel text-xs tracking-widest uppercase font-bold">Couple & Host Controls</span>
              </div>

              <h3 className="font-playfair text-2xl sm:text-3xl text-gold-gradient font-bold mb-6">
                Invitation Suite Dashboard
              </h3>

              {/* Tabs */}
              <div className="flex border-b border-[#D4A359]/30 mb-6 gap-4">
                <button
                  onClick={() => setActiveTab('rsvp')}
                  className={`pb-2 font-cinzel text-xs sm:text-sm tracking-wider uppercase transition-all border-b-2 ${
                    activeTab === 'rsvp'
                      ? 'border-[#D4A359] text-gold-gradient font-bold'
                      : 'border-transparent text-[#F7E7CE]/60'
                  }`}
                >
                  Submitted RSVPs
                </button>
                <button
                  onClick={() => setActiveTab('wishes')}
                  className={`pb-2 font-cinzel text-xs sm:text-sm tracking-wider uppercase transition-all border-b-2 ${
                    activeTab === 'wishes'
                      ? 'border-[#D4A359] text-gold-gradient font-bold'
                      : 'border-transparent text-[#F7E7CE]/60'
                  }`}
                >
                  Guestbook Log
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`pb-2 font-cinzel text-xs sm:text-sm tracking-wider uppercase transition-all border-b-2 ${
                    activeTab === 'settings'
                      ? 'border-[#D4A359] text-gold-gradient font-bold'
                      : 'border-transparent text-[#F7E7CE]/60'
                  }`}
                >
                  Edit Names
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'rsvp' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-cormorant text-lg text-[#EAD096]">
                      Manage guest attendance submissions
                    </span>
                    <button
                      onClick={exportRSVPCSV}
                      className="px-4 py-2 rounded-full bg-gold-gradient text-[#211511] font-cinzel text-xs font-bold uppercase flex items-center gap-2 hover:brightness-110 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Export CSV
                    </button>
                  </div>

                  <div className="max-h-60 overflow-y-auto space-y-3 pr-2">
                    {getRSVPs().length > 0 ? (
                      getRSVPs().map((r) => (
                        <div
                          key={r.id}
                          className="p-4 rounded-xl bg-[#211511]/80 border border-[#D4A359]/30 flex items-center justify-between font-cormorant text-base"
                        >
                          <div>
                            <span className="block text-gold-gradient font-bold text-lg">{r.fullName}</span>
                            <span className="text-xs text-[#F7E7CE]/70">{r.email} • {r.guestCount} Guest(s)</span>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-cinzel uppercase ${
                              r.attendance === 'accept'
                                ? 'bg-[#D4A359]/20 text-[#EAD096] border border-[#D4A359]'
                                : 'bg-red-900/30 text-red-300 border border-red-800'
                            }`}
                          >
                            {r.attendance}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="font-cormorant text-base italic text-[#F7E7CE]/60 py-4 text-center">
                        No RSVP submissions recorded yet.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'wishes' && (
                <div>
                  <div className="max-h-60 overflow-y-auto space-y-3 pr-2">
                    {getWishes().map((w) => (
                      <div
                        key={w.id}
                        className="p-4 rounded-xl bg-[#211511]/80 border border-[#D4A359]/30 font-cormorant text-base"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gold-gradient font-bold text-lg">{w.senderName}</span>
                          <span className="text-xs text-[#EAD096]/70">{w.relationship}</span>
                        </div>
                        <p className="italic text-sm text-[#F7E7CE]/90">"{w.message}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <form onSubmit={handleSaveNames} className="space-y-4">
                  <div>
                    <label className="block font-cinzel text-xs text-[#EAD096] uppercase mb-1">
                      Display Couple Names
                    </label>
                    <input
                      type="text"
                      value={tempNames}
                      onChange={(e) => setTempNames(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#211511] border border-[#D4A359]/50 text-[#F7E7CE] font-playfair text-xl focus:outline-none focus:border-[#D4A359]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-gold-gradient text-[#211511] font-cinzel text-xs font-bold uppercase tracking-widest hover:brightness-110 cursor-pointer"
                  >
                    Save Couple Names
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
