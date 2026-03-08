import React from 'react';
import { motion } from 'framer-motion';

const Sparkles: React.FC<{ count?: number }> = ({ count = 20 }) => {
  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 1.5 + Math.random() * 2,
    size: 4 + Math.random() * 8,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
          }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 20 20">
            <path
              d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z"
              fill="hsl(42, 90%, 55%)"
              opacity="0.8"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default Sparkles;
