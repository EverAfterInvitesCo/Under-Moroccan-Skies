import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, CalendarPlus, Sparkles } from 'lucide-react';
import { OrnateFrame } from './OrnateFrame';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const DateCountdownSection: React.FC = () => {
  // Target Wedding Date: November 28, 2026, 16:00 UTC+1 (Marrakech time)
  const targetDate = new Date('2026-11-28T16:00:00+01:00');

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Generate Google Calendar Link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Maryam+%26+Khaled%27s+Royal+Wedding&dates=20261128T150000Z/20261128T230000Z&details=Join+us+for+the+Royal+Wedding+Celebration+of+Maryam+%26+Khaled+at+The+Royal+Mirage+Palace%2C+Marrakech.&location=The+Royal+Mirage+Palace%2C+Marrakech%2C+Morocco`;

  return (
    <section className="relative py-24 px-6 bg-[#FBF8F3] text-[#3D2C24] overflow-hidden">
      {/* Subtle Watercolor Floral Background Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#E5A99B]/20 to-transparent rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#D4A359]/20 to-transparent rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-2 mb-3 text-[#C8953C]">
            <Sparkles className="w-4 h-4" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase">Save The Date</span>
            <Sparkles className="w-4 h-4" />
          </div>

          <h2 className="font-playfair text-4xl sm:text-6xl text-[#3D2C24] font-bold mb-4">
            Saturday, November 28th, 2026
          </h2>

          <p className="font-cormorant text-xl sm:text-2xl italic text-[#7A533E] mb-10">
            Four o'clock in the afternoon • Marrakech, Morocco
          </p>

          {/* Countdown Frame */}
          <OrnateFrame variant="gold" className="my-8">
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-8 py-4 overflow-x-auto scrollbar-none">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[68px] sm:min-w-0">
                  <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-2xl bg-[#3D2C24] border-2 border-[#D4A359] text-gold-gradient shadow-xl flex items-center justify-center gold-shimmer">
                    <span className="font-cinzel text-2xl sm:text-5xl font-bold">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="font-cinzel text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-[#7A533E] uppercase mt-2 sm:mt-3 font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Calendar CTA */}
            <div className="mt-8 pt-6 border-t border-[#D4A359]/30 flex flex-wrap items-center justify-center gap-4">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-[#211511] font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase hover:brightness-110 shadow-lg transition-all cursor-pointer"
              >
                <CalendarPlus className="w-4 h-4" />
                Add to Google Calendar
              </a>

              <button
                onClick={() => {
                  const icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Maryam & Khaled's Royal Wedding\nDESCRIPTION:Wedding Celebration of Maryam & Khaled at The Royal Mirage Palace, Marrakech.\nLOCATION:The Royal Mirage Palace, Marrakech\nDTSTART:20261128T150000Z\nDTEND:20261128T230000Z\nEND:VEVENT\nEND:VCALENDAR`;
                  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'Maryam_Khaled_Wedding.ics';
                  a.click();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3D2C24] text-[#EAD096] border border-[#D4A359] font-cinzel text-xs sm:text-sm tracking-widest uppercase hover:bg-[#54382B] shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D4A359]" />
                Download iCal Event
              </button>
            </div>
          </OrnateFrame>
        </motion.div>
      </div>
    </section>
  );
};
