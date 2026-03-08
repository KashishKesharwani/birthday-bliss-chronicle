import React from 'react';
import { motion } from 'framer-motion';

const Rainbow: React.FC = () => {
  const colors = [
    'hsl(0, 85%, 65%)',
    'hsl(30, 90%, 60%)',
    'hsl(50, 95%, 55%)',
    'hsl(140, 70%, 50%)',
    'hsl(200, 80%, 55%)',
    'hsl(250, 70%, 60%)',
    'hsl(270, 70%, 60%)',
  ];

  return (
    <motion.div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.2, scale: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 600 300" className="w-full h-full">
        {colors.map((color, i) => (
          <motion.path
            key={i}
            d={`M ${50 + i * 12} 300 A ${250 - i * 12} ${250 - i * 12} 0 0 1 ${550 - i * 12} 300`}
            fill="none"
            stroke={color}
            strokeWidth="12"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.15, ease: 'easeOut' }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

export default Rainbow;
