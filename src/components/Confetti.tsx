import React from 'react';
import { motion } from 'framer-motion';

const Confetti: React.FC<{ count?: number }> = ({ count = 40 }) => {
  const colors = [
    'hsl(0, 85%, 65%)',
    'hsl(30, 90%, 60%)',
    'hsl(50, 95%, 55%)',
    'hsl(140, 70%, 50%)',
    'hsl(200, 80%, 55%)',
    'hsl(270, 70%, 60%)',
    'hsl(330, 80%, 55%)',
    'hsl(42, 90%, 55%)',
  ];

  const pieces = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4,
    color: colors[i % colors.length],
    size: 4 + Math.random() * 8,
    shape: Math.random() > 0.5 ? 'circle' : 'rect',
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.shape === 'rect' ? p.size * 0.6 : p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
          }}
          animate={{
            y: [0, window.innerHeight + 50],
            x: [0, Math.sin(p.id) * 60],
            rotate: [0, 720],
            opacity: [1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
