import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingBalloons from './FloatingBalloons';
import Confetti from './Confetti';
import barbieCakeImg from '@/assets/barbie-cake.png';
import animalsImg from '@/assets/animals-group.png';

type Phase = 'candles-lit' | 'blowing' | 'candles-out' | 'cutting' | 'celebrate';

const CelebrationSection: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('candles-lit');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('blowing'), 3000),
      setTimeout(() => setPhase('candles-out'), 4500),
      setTimeout(() => setPhase('cutting'), 6000),
      setTimeout(() => setPhase('celebrate'), 8500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const restart = () => {
    setPhase('candles-lit');
    setTimeout(() => setPhase('blowing'), 3000);
    setTimeout(() => setPhase('candles-out'), 4500);
    setTimeout(() => setPhase('cutting'), 6000);
    setTimeout(() => setPhase('celebrate'), 8500);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 via-background to-accent/5 py-20">
      <FloatingBalloons count={12} />
      {phase === 'celebrate' && <Confetti count={50} />}

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="font-cursive text-5xl md:text-7xl barbie-text mb-4"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.5 }}
        >
          Let's Celebrate!
        </motion.h2>

        {/* Hands with Barbie image */}
        <motion.div className="flex items-center justify-center gap-4 mb-4">
          <motion.span className="text-5xl" animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 1, repeat: Infinity }}>🙌</motion.span>
          <motion.img
            src={animalsImg}
            alt="Cute animals"
            className="w-20 md:w-28"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.span className="text-5xl" animate={{ rotate: [10, -10, 10] }} transition={{ duration: 1, repeat: Infinity }}>🙌</motion.span>
        </motion.div>

        {/* Animated Cake Scene */}
        <motion.div
          className="relative mx-auto max-w-lg mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Cake SVG with animated candles */}
          <div className="relative mx-auto w-72 md:w-96">
            <svg viewBox="0 0 400 350" className="w-full">
              {/* Cake base - 3 tiers */}
              <defs>
                <linearGradient id="cake-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(330, 85%, 75%)" />
                  <stop offset="100%" stopColor="hsl(330, 85%, 60%)" />
                </linearGradient>
                <linearGradient id="icing-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(330, 70%, 90%)" />
                  <stop offset="100%" stopColor="hsl(330, 85%, 80%)" />
                </linearGradient>
                <linearGradient id="tier2-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(280, 60%, 80%)" />
                  <stop offset="100%" stopColor="hsl(280, 60%, 70%)" />
                </linearGradient>
              </defs>

              {/* Bottom tier */}
              <rect x="80" y="240" width="240" height="70" rx="10" fill="url(#cake-grad)" />
              <path d="M80 250 Q120 230 200 240 Q280 230 320 250" fill="url(#icing-grad)" />
              {/* Dots on bottom tier */}
              {[110, 150, 190, 230, 270].map((x, i) => (
                <circle key={`dot1-${i}`} cx={x} cy="275" r="4" fill="hsl(42, 90%, 55%)" />
              ))}

              {/* Middle tier */}
              <rect x="120" y="175" width="160" height="65" rx="8" fill="url(#tier2-grad)" />
              <path d="M120 185 Q160 170 200 180 Q240 170 280 185" fill="url(#icing-grad)" />
              {/* Hearts on middle tier */}
              {[145, 185, 225].map((x, i) => (
                <text key={`h-${i}`} x={x} y="215" fontSize="14" textAnchor="middle">💖</text>
              ))}

              {/* Top tier */}
              <rect x="150" y="120" width="100" height="55" rx="8" fill="url(#cake-grad)" />
              <path d="M150 130 Q175 118 200 125 Q225 118 250 130" fill="url(#icing-grad)" />

              {/* Candles */}
              {[175, 200, 225].map((x, i) => (
                <g key={`candle-${i}`}>
                  {/* Candle stick */}
                  <rect x={x - 3} y="90" width="6" height="30" rx="2" fill={i % 2 === 0 ? 'hsl(330, 85%, 60%)' : 'hsl(280, 60%, 70%)'} />
                  <rect x={x - 3} y="90" width="6" height="8" rx="2" fill="hsl(42, 90%, 55%)" opacity="0.5" />

                  {/* Flame */}
                  <AnimatePresence>
                    {(phase === 'candles-lit' || phase === 'blowing') && (
                      <motion.g
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: phase === 'blowing' ? [1, 0.5, 0.2] : 1,
                          scale: phase === 'blowing' ? [1, 0.5, 0] : [0.9, 1.1, 0.9],
                          x: phase === 'blowing' ? [0, 8, 15] : 0,
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          duration: phase === 'blowing' ? 1.5 : 0.5,
                          repeat: phase === 'blowing' ? 0 : Infinity,
                          delay: phase === 'blowing' ? i * 0.3 : 0,
                        }}
                      >
                        {/* Outer glow */}
                        <ellipse cx={x} cy="82" rx="8" ry="12" fill="hsl(42, 100%, 70%)" opacity="0.3" />
                        {/* Flame */}
                        <ellipse cx={x} cy="83" rx="4" ry="8" fill="hsl(30, 100%, 55%)" />
                        <ellipse cx={x} cy="85" rx="2.5" ry="5" fill="hsl(50, 100%, 65%)" />
                        <ellipse cx={x} cy="86" rx="1.5" ry="3" fill="hsl(50, 100%, 85%)" />
                      </motion.g>
                    )}
                  </AnimatePresence>

                  {/* Smoke after blowing */}
                  <AnimatePresence>
                    {phase === 'candles-out' && (
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.6, 0], y: [0, -20, -40] }}
                        transition={{ duration: 2, delay: i * 0.2 }}
                      >
                        <circle cx={x} cy="80" r="3" fill="hsl(0, 0%, 80%)" />
                        <circle cx={x + 3} cy="75" r="2" fill="hsl(0, 0%, 85%)" />
                      </motion.g>
                    )}
                  </AnimatePresence>
                </g>
              ))}

              {/* Cake topper - star */}
              <motion.text
                x="200" y="80" textAnchor="middle" fontSize="20"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐
              </motion.text>

              {/* Plate */}
              <ellipse cx="200" cy="310" rx="170" ry="15" fill="hsl(0, 0%, 95%)" />
              <ellipse cx="200" cy="310" rx="160" ry="12" fill="hsl(0, 0%, 98%)" />

              {/* Knife during cutting phase */}
              <AnimatePresence>
                {phase === 'cutting' && (
                  <motion.g
                    initial={{ x: 80, y: -60, rotate: -30 }}
                    animate={{ x: 0, y: 0, rotate: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  >
                    {/* Knife */}
                    <rect x="255" y="160" width="4" height="50" rx="1" fill="hsl(0, 0%, 75%)" />
                    <rect x="248" y="150" width="18" height="14" rx="3" fill="hsl(30, 40%, 45%)" />
                    <motion.line
                      x1="257" y1="210" x2="257" y2="300"
                      stroke="hsl(0, 0%, 80%)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </motion.g>
                )}
              </AnimatePresence>
            </svg>

            {/* Barbie girl behind cake */}
            <motion.img
              src={barbieCakeImg}
              alt="Barbie girl"
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 md:w-52 opacity-90"
              style={{ zIndex: -1 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Phase text */}
          <AnimatePresence mode="wait">
            <motion.p
              key={phase}
              className="text-xl md:text-2xl font-dancing text-primary mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {phase === 'candles-lit' && '✨ The candles are glowing bright! ✨'}
              {phase === 'blowing' && '💨 Phoooo... Make a wish! 💨'}
              {phase === 'candles-out' && '🌟 Wish granted! 🌟'}
              {phase === 'cutting' && '🔪 Time to cut the cake! 🎂'}
              {phase === 'celebrate' && '🎉 Yaaay! Happy Birthday! 🎉'}
            </motion.p>
          </AnimatePresence>

          {/* Replay button */}
          {phase === 'celebrate' && (
            <motion.button
              onClick={restart}
              className="mt-4 px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              🔄 Watch Again
            </motion.button>
          )}
        </motion.div>

        {/* Clapping hands around */}
        <AnimatePresence>
          {(phase === 'celebrate' || phase === 'cutting') && (
            <motion.div
              className="flex justify-center gap-6 mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="text-4xl"
                  animate={{ scale: [1, 1.3, 1], rotate: [0, i % 2 === 0 ? 15 : -15, 0] }}
                  transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity }}
                >
                  👏
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animals celebrating */}
        <div className="flex justify-center gap-8 text-5xl mb-8">
          {['🐘', '🐄', '🐱', '🦋', '🌸'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -20, 0], rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>

        {/* Celebration items */}
        <div className="flex justify-center gap-6 text-5xl">
          {['🎈', '🎁', '🎊', '🎉', '🎀'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 1.8, delay: i * 0.15, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Footprints */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8 opacity-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={i}
            className="text-3xl"
            style={{ transform: `rotate(${i % 2 === 0 ? -15 : 15}deg)` }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3 }}
          >
            👣
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default CelebrationSection;
