import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { SCHEDULE_ITEMS, ASSETS } from '../data';
import { OrnateFrame } from './OrnateFrame';

export const VenueSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<number>(0);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=The+Royal+Mirage+Palace+Marrakech`;

  return (
    <section className="relative py-24 px-6 bg-[#F7ECE1] text-[#3D2C24] overflow-hidden">
      {/* Background Arch Pattern Overlay */}
      <div className="absolute inset-0 paper-texture opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3 text-[#C8953C]">
            <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '20s' }} />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.35em] uppercase">The Sanctuary</span>
          </div>

          <h2 className="font-playfair text-4xl sm:text-6xl text-[#3D2C24] font-bold mb-4">
            The Royal Mirage Palace
          </h2>

          <p className="font-cormorant text-xl sm:text-2xl italic text-[#7A533E] max-w-2xl mx-auto">
            A oasis of carved cedarwood, turquoise tiles, and shimmering palm reflections in Marrakech, Morocco.
          </p>
        </motion.div>

        {/* Map & Venue Card */}
        <div className="flex max-lg:flex-row max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:pb-6 scrollbar-none lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch mb-20">
          {/* Illustrated Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-7 min-w-[85vw] max-sm:min-w-[88vw] sm:min-w-[500px] lg:min-w-0 snap-center"
          >
            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-[#D4A359] shadow-2xl group gold-shimmer">
              <img
                src={ASSETS.ballroom || ASSETS.gardenHall}
                alt="Illustrated Venue Map & Pavilion"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211511]/90 via-[#211511]/30 to-transparent flex flex-col justify-end p-8 text-[#F7E7CE]">
                {/* Animated Golden Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative">
                    <span className="absolute -inset-3 rounded-full bg-[#D4A359] opacity-40 animate-ping" />
                    <div className="w-12 h-12 rounded-full bg-[#3D2C24] border-2 border-[#D4A359] flex items-center justify-center shadow-2xl">
                      <MapPin className="w-6 h-6 text-[#D4A359]" />
                    </div>
                  </div>
                  <span className="mt-2 bg-[#3D2C24]/90 px-4 py-1.5 rounded-full border border-[#D4A359]/60 font-cinzel text-xs text-[#EAD096] tracking-widest uppercase shadow-lg whitespace-nowrap">
                    The Royal Mirage Pavilion
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-playfair text-2xl sm:text-3xl text-gold-gradient font-bold mb-1">
                    Marrakech, Morocco
                  </h3>
                  <p className="font-cormorant text-base sm:text-lg text-[#F7E7CE]/80 italic mb-4">
                    Route de la Palmeraie, BP 510 Marrakech, Morocco
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gold-gradient text-[#211511] font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase shadow-xl hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Navigation className="w-4 h-4 fill-current" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 min-w-[85vw] max-sm:min-w-[88vw] sm:min-w-[450px] lg:min-w-0 snap-center"
          >
            <OrnateFrame variant="terracotta" className="h-full">
              <h3 className="font-playfair text-2xl sm:text-3xl text-[#3D2C24] font-bold mb-4">
                Guest Experience
              </h3>

              <ul className="space-y-4 font-cormorant text-lg text-[#54382B]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8953C] shrink-0 mt-1" />
                  <span><strong>Airport Shuttles:</strong> Complimentary valet & luxury shuttle service provided from Marrakech Menara Airport (RAK).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8953C] shrink-0 mt-1" />
                  <span><strong>Accommodations:</strong> Preferred guest room rates reserved at the Royal Mirage Suites & Villa Oasis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8953C] shrink-0 mt-1" />
                  <span><strong>Dress Code:</strong> Royal Black Tie / Moroccan Caftans in warm jewel or earth tones.</span>
                </li>
              </ul>
            </OrnateFrame>
          </motion.div>
        </div>

        {/* Schedule of Events */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#C8953C] block mb-2">
              Timeline of Celebrations
            </span>
            <h3 className="font-playfair text-3xl sm:text-5xl text-[#3D2C24] font-bold">
              Programme of the Evening
            </h3>
            <span className="font-cinzel text-[10px] text-[#7A533E] uppercase tracking-widest block sm:hidden mt-1">
              Swipe horizontally to view events →
            </span>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-none md:grid md:grid-cols-3 md:gap-6">
            {SCHEDULE_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                onClick={() => setSelectedEvent(index)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer min-w-[80vw] sm:min-w-[300px] md:min-w-0 snap-center ${
                  selectedEvent === index
                    ? 'border-[#D4A359] bg-[#3D2C24] text-[#F7E7CE] shadow-2xl scale-102'
                    : 'border-[#D4A359]/30 bg-[#FBF8F3] text-[#3D2C24] hover:border-[#D4A359]/70'
                }`}
              >
                <div className="flex items-center justify-between mb-3 border-b border-[#D4A359]/30 pb-2">
                  <span className="font-cinzel text-xs font-bold tracking-widest text-[#C8953C] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {item.time}
                  </span>
                  <span className="text-xs italic font-cormorant opacity-80">{item.location}</span>
                </div>
                <h4 className="font-playfair text-xl font-bold mb-2 text-gold-gradient">
                  {item.title}
                </h4>
                <p className="font-cormorant text-base italic leading-relaxed mb-4 opacity-90">
                  {item.description}
                </p>
                <div className="text-xs font-cinzel tracking-wider uppercase text-[#D4A359] opacity-80 pt-2 border-t border-[#D4A359]/20">
                  Attire: {item.dressCode}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
