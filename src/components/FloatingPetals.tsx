import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotate: number;
  color: string;
}

export const FloatingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = ['#E5A99B', '#D4A359', '#F7E7CE', '#B85B3F'];
    const generatedPetals: Petal[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 10 + 8,
      duration: Math.random() * 12 + 20, // 20s to 32s slow movement
      delay: Math.random() * 12,
      opacity: Math.random() * 0.3 + 0.2, // restrained, delicate opacity
      rotate: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute rounded-full transition-transform"
          style={{
            left: `${petal.left}%`,
            top: '-5%',
            width: `${petal.size}px`,
            height: `${petal.size * 1.4}px`,
            backgroundColor: petal.color,
            opacity: petal.opacity,
            borderRadius: '80% 0 80% 50%',
            filter: 'blur(0.4px)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
            animation: `petalFall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotate}deg)`,
          }}
        />
      ))}
      <style>{`
        @keyframes petalFall {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(35px);
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(110vh) rotate(360deg) translateX(-25px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
