import React from 'react';
import { motion } from 'framer-motion';
import FloatingBalloons from './FloatingBalloons';
import Confetti from './Confetti';
import barbieCakeImg from '@/assets/barbie-cake.png';

const CelebrationSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 via-background to-accent/5 py-20">
      <FloatingBalloons count={12} />
      <Confetti count={30} />

      <motion.div
        className="relative z-10 text-center px-6"
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

        {/* Barbie cake cutting scene */}
        <motion.div
          className="relative mx-auto max-w-md mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.img
            src={barbieCakeImg}
            alt="Barbie girl cutting birthday cake"
            className="w-64 md:w-80 mx-auto drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Clapping hands around */}
          {[
            { x: '-20%', y: '60%', delay: 0 },
            { x: '85%', y: '60%', delay: 0.3 },
            { x: '-10%', y: '40%', delay: 0.15 },
            { x: '90%', y: '40%', delay: 0.45 },
          ].map((pos, i) => (
            <motion.span
              key={i}
              className="absolute text-3xl"
              style={{ left: pos.x, top: pos.y }}
              animate={{ scale: [1, 1.3, 1], rotate: [0, i % 2 === 0 ? 15 : -15, 0] }}
              transition={{ duration: 0.6, delay: pos.delay, repeat: Infinity }}
            >
              👏
            </motion.span>
          ))}

          <motion.p
            className="text-2xl font-dancing text-primary mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Make a wish and blow the candles! 🌟
          </motion.p>
        </motion.div>

        {/* Animals celebrating */}
        <div className="flex justify-center gap-8 text-5xl mb-8">
          {['🐘', '🐄', '🐱', '🦋', '🌸'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -20, 0],
                rotate: [0, i % 2 === 0 ? 10 : -10, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
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
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.8,
                delay: i * 0.15,
                repeat: Infinity,
              }}
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
