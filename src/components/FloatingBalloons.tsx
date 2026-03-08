import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BALLOON_COLORS = [
  'hsl(0, 85%, 65%)',    // red
  'hsl(30, 90%, 60%)',   // orange
  'hsl(50, 95%, 55%)',   // yellow
  'hsl(140, 70%, 50%)',  // green
  'hsl(200, 80%, 55%)',  // blue
  'hsl(270, 70%, 60%)',  // purple
  'hsl(330, 80%, 55%)',  // pink
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
  const [balloons] = useState<Balloon[]>(() =>
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
          {/* Balloon shape */}
          <svg width={b.size} height={b.size * 1.3} viewBox="0 0 50 65">
            <defs>
              <radialGradient id={`grad-${b.id}`} cx="35%" cy="35%">
                <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                <stop offset="100%" stopColor={b.color} />
              </radialGradient>
            </defs>
            <ellipse cx="25" cy="22" rx="20" ry="22" fill={`url(#grad-${b.id})`} />
            <polygon points="25,44 22,48 28,48" fill={b.color} />
            <line x1="25" y1="48" x2="25" y2="65" stroke={b.color} strokeWidth="0.8" opacity="0.6" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
