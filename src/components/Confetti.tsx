import React from 'react';
import { motion } from 'framer-motion';

const Confetti: React.FC<{ count?: number }> = ({ count = 40 }) => {
  const colors = [
    'hsl(330, 85%, 60%)',
    'hsl(280, 60%, 70%)',
    'hsl(310, 70%, 55%)',
    'hsl(42, 90%, 55%)',
    'hsl(330, 70%, 85%)',
    'hsl(300, 70%, 75%)',
    'hsl(350, 80%, 65%)',
    'hsl(0, 0%, 100%)',
  ];

  const pieces = React.useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
      color: colors[i % colors.length],
      size: 4 + Math.random() * 8,
      shape: Math.random() > 0.5 ? 'circle' : 'rect',
    })), [count]
  );

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
