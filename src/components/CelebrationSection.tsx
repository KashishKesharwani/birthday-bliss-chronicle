import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingBalloons from './FloatingBalloons';
import Confetti from './Confetti';
import Sparkles from './Sparkles';
import barbieCakeImg from '@/assets/barbie-cake.png';
import barbieBlowImg from '@/assets/barbie-blow.png';
import barbieHandsCuttingImg from '@/assets/barbie-hands-cutting.png';

type Phase = 'candles-lit' | 'blowing' | 'candles-out' | 'cutting' | 'celebrate';

const CelebrationSection: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('candles-lit');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('blowing'), 4000),
      setTimeout(() => setPhase('candles-out'), 5200),
      setTimeout(() => setPhase('cutting'), 6200),
      setTimeout(() => setPhase('celebrate'), 7800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const restart = () => {
    setPhase('candles-lit');
    setTimeout(() => setPhase('blowing'), 4000);
    setTimeout(() => setPhase('candles-out'), 5200);
    setTimeout(() => setPhase('cutting'), 6200);
    setTimeout(() => setPhase('celebrate'), 7800);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 via-background to-accent/5 py-20">
      <FloatingBalloons count={12} />
      {phase === 'celebrate' && <Confetti count={60} />}
      {phase === 'celebrate' && <Sparkles count={25} />}

      <motion.div
        className="relative z-10 text-center px-6 w-full max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="font-cursive text-5xl md:text-7xl barbie-text mb-8"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.5 }}
        >
          Let's Celebrate!
        </motion.h2>

        {/* Main Scene - Image based phases */}
        <motion.div
          className="relative mx-auto mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            {/* Phase 1: Candles Lit - Barbie with cake, candles glowing */}
            {phase === 'candles-lit' && (
              <motion.div
                key="lit"
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src={barbieCakeImg}
                  alt="Barbie with birthday cake"
                  className="w-56 md:w-72 mx-auto drop-shadow-2xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Glowing candle effect */}
                <motion.div
                  className="absolute top-[15%] left-1/2 -translate-x-1/2 w-32 h-16"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{
                    background: 'radial-gradient(circle, hsl(42, 100%, 70%, 0.5) 0%, transparent 70%)',
                    filter: 'blur(8px)',
                  }}
                />
              </motion.div>
            )}

            {/* Phase 2: Blowing - Barbie blowing candles */}
            {phase === 'blowing' && (
              <motion.div
                key="blowing"
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src={barbieBlowImg}
                  alt="Barbie blowing candles"
                  className="w-56 md:w-72 mx-auto drop-shadow-2xl"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                {/* Wind effect lines */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${30 + i * 8}%`,
                      left: '55%',
                      width: '60px',
                      height: '2px',
                      background: 'linear-gradient(90deg, hsl(200, 80%, 85%), transparent)',
                      borderRadius: '2px',
                    }}
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: [0, 60, 120], opacity: [0, 0.8, 0] }}
                    transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
                  />
                ))}
                {/* Flickering flames going out */}
                <motion.div
                  className="absolute top-[20%] left-1/2 -translate-x-1/2"
                  animate={{ opacity: [0.6, 0.2, 0] }}
                  transition={{ duration: 1.8 }}
                  style={{
                    background: 'radial-gradient(circle, hsl(42, 100%, 70%, 0.4) 0%, transparent 70%)',
                    width: '80px',
                    height: '40px',
                    filter: 'blur(6px)',
                  }}
                />
              </motion.div>
            )}

            {/* Phase 3: Candles Out - Smoke rising */}
            {phase === 'candles-out' && (
              <motion.div
                key="out"
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={barbieBlowImg}
                  alt="Barbie after blowing"
                  className="w-56 md:w-72 mx-auto drop-shadow-2xl"
                />
                {/* Smoke wisps */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      left: `${42 + i * 5}%`,
                      top: '25%',
                      width: '8px',
                      height: '8px',
                      background: 'hsl(0, 0%, 80%)',
                    }}
                    animate={{
                      y: [0, -40, -80],
                      x: [0, (i % 2 === 0 ? 10 : -10), (i % 2 === 0 ? 20 : -20)],
                      opacity: [0.6, 0.3, 0],
                      scale: [0.5, 1.5, 2],
                    }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: 1 }}
                  />
                ))}
                {/* Wish granted sparkle */}
                <motion.div
                  className="absolute top-[10%] left-1/2 -translate-x-1/2 text-4xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  ⭐
                </motion.div>
              </motion.div>
            )}

            {/* Phase 4: Cutting - Barbie cutting cake */}
            {phase === 'cutting' && (
              <motion.div
                key="cutting"
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src={barbieHandsCuttingImg}
                  alt="Barbie cutting cake"
                  className="w-56 md:w-72 mx-auto drop-shadow-2xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Sparkle effects from cutting */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute text-xl"
                    style={{ left: `${30 + i * 10}%`, top: `${40 + (i % 3) * 10}%` }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: [0, -20],
                    }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    ✨
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Phase 5: Celebrate! */}
            {phase === 'celebrate' && (
              <motion.div
                key="celebrate"
                className="relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5 }}
              >
                <motion.img
                  src={barbieCakeImg}
                  alt="Celebration!"
                  className="w-56 md:w-72 mx-auto drop-shadow-2xl"
                  animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Clapping hands */}
                <div className="flex justify-center gap-4 mt-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-3xl md:text-4xl"
                      animate={{ scale: [1, 1.3, 1], rotate: [0, i % 2 === 0 ? 15 : -15, 0] }}
                      transition={{ duration: 0.5, delay: i * 0.08, repeat: Infinity }}
                    >
                      👏
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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
              {phase === 'candles-out' && '⭐ Wish granted! ⭐'}
              {phase === 'cutting' && '🎂 Time to cut the cake! 🔪'}
              {phase === 'celebrate' && '🎉 Yaaay! Happy Birthday Princess! 🎉'}
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

        {/* Floating gifts & hearts background */}
        <div className="relative mt-12 py-10">
          {/* Scattered floating gifts and hearts */}
          {[
            { emoji: '🎁', x: 5, y: 10, size: 'text-5xl', dur: 3.5 },
            { emoji: '💖', x: 15, y: 30, size: 'text-4xl', dur: 3 },
            { emoji: '🎁', x: 85, y: 15, size: 'text-5xl', dur: 4 },
            { emoji: '💝', x: 90, y: 40, size: 'text-4xl', dur: 3.2 },
            { emoji: '🎁', x: 25, y: 60, size: 'text-4xl', dur: 3.8 },
            { emoji: '💖', x: 70, y: 55, size: 'text-5xl', dur: 3.5 },
            { emoji: '💝', x: 50, y: 5, size: 'text-3xl', dur: 2.8 },
            { emoji: '🎁', x: 60, y: 70, size: 'text-4xl', dur: 3.6 },
            { emoji: '💖', x: 40, y: 45, size: 'text-3xl', dur: 3.1 },
            { emoji: '🎁', x: 10, y: 65, size: 'text-3xl', dur: 4.2 },
            { emoji: '💝', x: 78, y: 25, size: 'text-3xl', dur: 3.4 },
            { emoji: '💖', x: 35, y: 75, size: 'text-4xl', dur: 3 },
            { emoji: '🎁', x: 55, y: 35, size: 'text-3xl', dur: 3.7 },
            { emoji: '💝', x: 20, y: 80, size: 'text-3xl', dur: 3.3 },
            { emoji: '💖', x: 92, y: 70, size: 'text-4xl', dur: 3.9 },
          ].map((item, i) => (
            <motion.span
              key={i}
              className={`absolute ${item.size} opacity-30`}
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, i % 2 === 0 ? 15 : -15, 0],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: item.dur,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {item.emoji}
            </motion.span>
          ))}

          {/* Center content over floating bg */}
          <div className="relative z-10">
            {/* Main row of gifts/hearts */}
            <div className="flex justify-center items-end gap-3 md:gap-5 mb-6">
              {[
                { emoji: '🎀', size: 'text-4xl', delay: 0 },
                { emoji: '🎁', size: 'text-5xl', delay: 0.1 },
                { emoji: '💝', size: 'text-4xl', delay: 0.2 },
                { emoji: '🎂', size: 'text-6xl', delay: 0.3 },
                { emoji: '💝', size: 'text-4xl', delay: 0.4 },
                { emoji: '🎁', size: 'text-5xl', delay: 0.5 },
                { emoji: '🎀', size: 'text-4xl', delay: 0.6 },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  className={item.size}
                  animate={{ y: [0, -15, 0], scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {item.emoji}
                </motion.span>
              ))}
            </div>

            {/* Sparkle trail */}
            <div className="flex justify-center gap-2">
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="text-sm text-primary"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                >
                  ✦
                </motion.span>
              ))}
            </div>

            {/* Princess crown */}
            <motion.div
              className="mt-6 text-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-5xl">👑</span>
              <p className="font-dancing text-lg text-secondary mt-1">Our Little Princess</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full">
          <path
            d="M0,40 Q180,80 360,40 Q540,0 720,40 Q900,80 1080,40 Q1260,0 1440,40 L1440,80 L0,80 Z"
            fill="hsl(330, 85%, 60%)"
            opacity="0.06"
          />
        </svg>
      </div>
    </section>
  );
};

export default CelebrationSection;
