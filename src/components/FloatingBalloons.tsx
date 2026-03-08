import React from 'react';
import { motion } from 'framer-motion';

const BALLOON_COLORS = [
  'hsl(330, 85%, 60%)',   // barbie pink
  'hsl(280, 60%, 70%)',   // lavender
  'hsl(310, 70%, 55%)',   // magenta
  'hsl(330, 70%, 85%)',   // light pink
  'hsl(300, 70%, 75%)',   // soft purple
  'hsl(350, 80%, 65%)',   // rose
  'hsl(42, 90%, 55%)',    // gold
];

interface Balloon {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
}

const FloatingBalloons: React.FC<{ count?: number }> = ({ count = 15 }) => {
  const [balloons] = React.useState<Balloon[]>(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 6,
      color: BALLOON_COLORS[i % BALLOON_COLORS.length],
      size: 30 + Math.random() * 25,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="absolute bottom-0"
          style={{ left: `${b.x}%` }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(b.id) * 40, 0],
            rotate: [0, b.id % 2 === 0 ? 15 : -15, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg width={b.size} height={b.size * 1.3} viewBox="0 0 50 65">
            <defs>
              <radialGradient id={`bgrad-${b.id}`} cx="35%" cy="35%">
                <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                <stop offset="100%" stopColor={b.color} />
              </radialGradient>
            </defs>
            <ellipse cx="25" cy="22" rx="20" ry="22" fill={`url(#bgrad-${b.id})`} />
            <polygon points="25,44 22,48 28,48" fill={b.color} />
            <line x1="25" y1="48" x2="25" y2="65" stroke={b.color} strokeWidth="0.8" opacity="0.6" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
