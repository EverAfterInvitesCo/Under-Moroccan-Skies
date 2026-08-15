import React from 'react';

interface OrnateFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gold' | 'terracotta' | 'blush';
}

export const OrnateFrame: React.FC<OrnateFrameProps> = ({
  children,
  className = '',
  variant = 'gold',
}) => {
  const borderStyles = {
    gold: 'border-[#D4A359]/60 bg-[#FBF8F3]/90 shadow-[0_10px_30px_rgba(212,163,89,0.15)]',
    terracotta: 'border-[#B85B3F]/50 bg-[#F7ECE1]/90 shadow-[0_10px_30px_rgba(184,91,63,0.12)]',
    blush: 'border-[#E5A99B]/60 bg-[#FFF9F6]/90 shadow-[0_10px_30px_rgba(229,169,155,0.15)]',
  };

  return (
    <div className={`relative p-6 sm:p-10 rounded-2xl border ${borderStyles[variant]} backdrop-blur-md paper-texture gold-shimmer ${className}`}>
      {/* Corner Ornaments */}
      <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#D4A359]" />
      <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#D4A359]" />
      <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#D4A359]" />
      <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#D4A359]" />

      {/* Decorative Arch Emblem Header */}
      <div className="flex justify-center -mt-3 mb-4">
        <svg className="w-12 h-6 text-[#D4A359]/70" viewBox="0 0 100 40" fill="none">
          <path d="M0 40 C 30 40, 40 0, 50 0 C 60 0, 70 40, 100 40 Z" fill="currentColor" opacity="0.3" />
          <path d="M10 40 C 35 40, 42 10, 50 10 C 58 10, 65 40, 90 40" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="5" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {children}
    </div>
  );
};
