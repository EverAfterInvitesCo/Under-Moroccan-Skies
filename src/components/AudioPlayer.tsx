import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import loveInTheDarkTrack from '../assets/images/loveinthedark.mp3';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [trackName, setTrackName] = useState('Love in the Dark');
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Fallback: Synthesize relaxing pentatonic harp/oud soundscape using Web Audio API
  const startSynthAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      if (!masterGainRef.current) {
        masterGainRef.current = ctx.createGain();
        masterGainRef.current.gain.value = 0.12;
        masterGainRef.current.connect(ctx.destination);
      }

      const notes = [293.66, 311.13, 369.99, 392.00, 440.00, 466.16, 523.25, 587.33, 659.25, 739.99];

      const playPluck = () => {
        if (!ctx || ctx.state !== 'running' || !masterGainRef.current) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        const freq = notes[Math.floor(Math.random() * notes.length)];
        osc.type = Math.random() > 0.4 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 2.5);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGainRef.current);

        osc.start();
        osc.stop(ctx.currentTime + 3.3);
      };

      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      const droneFilter = ctx.createBiquadFilter();

      droneOsc.type = 'sawtooth';
      droneOsc.frequency.setValueAtTime(146.83, ctx.currentTime);
      droneFilter.type = 'lowpass';
      droneFilter.frequency.value = 250;

      droneGain.gain.setValueAtTime(0.001, ctx.currentTime);
      droneGain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 2);

      droneOsc.connect(droneFilter);
      droneFilter.connect(droneGain);
      droneGain.connect(masterGainRef.current);
      droneOsc.start();

      intervalRef.current = window.setInterval(() => {
        if (Math.random() > 0.3) playPluck();
      }, 1600);

      setIsPlaying(true);
      setTrackName('Royal Andalusian Ambience');
      setShowNotice(true);
      setTimeout(() => setShowNotice(false), 4000);
    } catch (e) {
      console.warn('Synth audio restricted or failed', e);
    }
  };

  const startAudio = () => {
    // Attempt to play uploaded MP3 first
    if (!audioRef.current) {
      const audio = new Audio(loveInTheDarkTrack);
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;

      audio.addEventListener('error', () => {
        console.info('Custom audio file not playable, falling back to ambient soundscape');
        startSynthAudio();
      });
    }

    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setTrackName('Love in the Dark');
          setShowNotice(true);
          setTimeout(() => setShowNotice(false), 4000);
        })
        .catch(() => {
          // If HTML5 audio playback fails (e.g. format/empty file), fallback to synth
          startSynthAudio();
        });
    } else {
      startSynthAudio();
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Toast Notice */}
      {showNotice && (
        <div className="bg-[#3D2C24]/95 backdrop-blur-md text-[#F7E7CE] px-4 py-2 rounded-full text-xs font-cormorant border border-[#D4A359]/60 shadow-xl flex items-center gap-2 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A359] animate-spin" />
          <span>Now Playing: {trackName}</span>
        </div>
      )}

      {/* Music Control Button */}
      <button
        onClick={toggleAudio}
        aria-label="Toggle Background Music"
        className="relative group p-3.5 rounded-full bg-[#3D2C24]/85 backdrop-blur-md border border-[#D4A359] text-[#EAD096] shadow-2xl hover:bg-[#3D2C24] hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {isPlaying ? (
            <>
              <Volume2 className="w-5 h-5 text-[#D4A359] animate-pulse" />
              <div className="flex items-end gap-0.5 h-4 w-4">
                <span className="w-1 bg-[#D4A359] h-full animate-bounce rounded-full" style={{ animationDelay: '0ms' }} />
                <span className="w-1 bg-[#D4A359] h-2/3 animate-bounce rounded-full" style={{ animationDelay: '150ms' }} />
                <span className="w-1 bg-[#D4A359] h-4/5 animate-bounce rounded-full" style={{ animationDelay: '300ms' }} />
              </div>
            </>
          ) : (
            <div className="flex items-center gap-1.5">
              <VolumeX className="w-5 h-5 text-[#D4A359]/70" />
              <Music className="w-3.5 h-3.5 text-[#D4A359]/50" />
            </div>
          )}
        </div>

        {/* Hover Tooltip */}
        <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-[#2A1E18] text-[#EAD096] text-[11px] font-cinzel tracking-widest px-3 py-1 rounded border border-[#D4A359]/30 whitespace-nowrap shadow-md">
          {isPlaying ? 'Pause Music' : 'Play Wedding Music'}
        </span>
      </button>
    </div>
  );
};
