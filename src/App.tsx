/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FloatingPetals } from './components/FloatingPetals';
import { AudioPlayer } from './components/AudioPlayer';
import { HostSettingsModal } from './components/HostSettingsModal';
import { IntroGate } from './components/IntroGate';
import { CourtyardSection } from './components/CourtyardSection';
import { DateCountdownSection } from './components/DateCountdownSection';
import { VenueSection } from './components/VenueSection';
import { StoryTimelineSection } from './components/StoryTimelineSection';
import { GallerySection } from './components/GallerySection';
import { RSVPSection } from './components/RSVPSection';
import { GuestbookSection } from './components/GuestbookSection';
import { SunsetFinalSection } from './components/SunsetFinalSection';

export default function App() {
  const [coupleNames, setCoupleNames] = useState('Maryam & Khaled');

  return (
    <main className="relative w-full min-h-screen bg-[#FBF8F3] text-[#3D2C24] overflow-x-hidden paper-texture">
      {/* Floating Animated Petals Overlay */}
      <FloatingPetals />

      {/* Royal Soundscape Audio Toggle */}
      <AudioPlayer />

      {/* Host Settings & RSVP Management Modal Toggle */}
      <HostSettingsModal
        coupleNames={coupleNames}
        setCoupleNames={setCoupleNames}
      />

      {/* INTRO: Palace Gate Entrance */}
      <IntroGate coupleNames={coupleNames} />

      {/* SECTION 1 & 2: Palace Courtyard & Seamless Parallax Entrance */}
      <CourtyardSection />

      {/* SECTION 3: Save The Date & Animated Countdown */}
      <DateCountdownSection />

      {/* SECTION 4: Venue Map & Programme of Events */}
      <VenueSection />

      {/* SECTION 5: Our Story Watercolor Timeline */}
      <StoryTimelineSection />

      {/* SECTION 6: Vintage Gold Framed Gallery */}
      <GallerySection />

      {/* SECTION 7: RSVP Form & Digital Ticket Pass */}
      <RSVPSection />

      {/* SECTION 8: Interactive Guestbook */}
      <GuestbookSection />

      {/* FINAL SECTION: Sunset Palace & Glowing Lanterns */}
      <SunsetFinalSection />
    </main>
  );
}

