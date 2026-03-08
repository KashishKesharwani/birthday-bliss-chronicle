import React from 'react';
import { motion } from 'framer-motion';
import Sparkles from './Sparkles';
import Rainbow from './Rainbow';

interface LandingProps {
  childName: string;
  age: number;
  onOpen: () => void;
}

const LandingSection: React.FC<LandingProps> = ({ childName, age, onOpen }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/20 via-background to-primary/10">
      <Rainbow />
      <Sparkles count={25} />

      {/* Stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-accent text-2xl"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.p
          className="text-lg md:text-xl text-muted-foreground font-dancing mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          You're Invited to
        </motion.p>

        <motion.h1
          className="font-cursive text-6xl md:text-8xl lg:text-9xl rainbow-text mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
        >
          {childName}'s
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <motion.span
            className="text-5xl md:text-7xl font-bold text-primary font-dancing"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {age}
          </motion.span>
          <span className="text-2xl md:text-3xl text-secondary font-dancing">
            {age === 1 ? 'st' : age === 2 ? 'nd' : age === 3 ? 'rd' : 'th'}
          </span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-dancing text-secondary mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Birthday Party! 🎂
        </motion.h2>

        {/* Hands with cake emoji */}
        <motion.div
          className="text-6xl mb-8"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🙌🎂🎉
        </motion.div>

        <motion.button
          onClick={onOpen}
          className="relative px-10 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full text-xl font-semibold shadow-lg overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ animation: 'pulse-glow 2s infinite' }}
        >
          <span className="relative z-10 flex items-center gap-2">
            ✨ Open Invitation ✨
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </motion.button>
      </motion.div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
            fill="hsl(330, 80%, 55%)"
            opacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
};

export default LandingSection;
