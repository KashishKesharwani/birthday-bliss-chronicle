import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sparkles from './Sparkles';
import { Input } from '@/components/ui/input';
import barbieCakeImg from '@/assets/barbie-cake.png';
import animalsImg from '@/assets/animals-group.png';
import patternImg from '@/assets/party-pattern.png';

interface LandingProps {
  childName: string;
  age: number;
  onOpen: (guestName: string) => void;
}

const LandingSection: React.FC<LandingProps> = ({ childName, age, onOpen }) => {
  const [guestName, setGuestName] = useState('');
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${patternImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Pink overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 backdrop-blur-[2px]" />

      <Sparkles count={20} />

      {/* Floating animals in background */}
      <motion.img
        src={animalsImg}
        alt="Cute animals"
        className="absolute bottom-4 left-4 w-32 md:w-48 opacity-80 z-[1]"
        animate={{ y: [0, -15, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Individual floating animals */}
      <motion.span
        className="absolute top-[15%] left-[8%] text-5xl md:text-6xl z-[1]"
        animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        🐘
      </motion.span>
      <motion.span
        className="absolute top-[20%] right-[10%] text-5xl md:text-6xl z-[1]"
        animate={{ y: [0, -15, 0], rotate: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        🐄
      </motion.span>
      <motion.span
        className="absolute bottom-[20%] right-[8%] text-5xl md:text-6xl z-[1]"
        animate={{ y: [0, -18, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        🐱
      </motion.span>
      <motion.span
        className="absolute top-[40%] left-[5%] text-4xl z-[1]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
      >
        🦋
      </motion.span>
      <motion.span
        className="absolute top-[60%] right-[5%] text-4xl z-[1]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
      >
        🌸
      </motion.span>

      {/* Hearts floating */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-primary/40 z-[1]"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            fontSize: `${14 + Math.random() * 20}px`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.3, 0.8],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
        >
          💖
        </motion.span>
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
          ✨ Dear Guest, ✨
        </motion.p>

        <motion.p
          className="text-xl md:text-2xl font-dancing text-secondary mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          You are cordially invited<br />to celebrate
        </motion.p>

        <motion.h1
          className="font-cursive text-5xl md:text-7xl lg:text-8xl barbie-text mb-2"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
        >
          💖 {childName}'s
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <motion.span
            className="text-5xl md:text-7xl font-bold text-primary font-pacifico"
            animate={{ scale: [1, 1.15, 1] }}
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
          className="text-3xl md:text-5xl font-dancing text-secondary mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Birthday Party! 💖
        </motion.h2>

        {/* Barbie girl cake image */}
        <motion.div
          className="mx-auto mb-8 relative"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.2, type: 'spring', bounce: 0.4 }}
        >
          <motion.img
            src={barbieCakeImg}
            alt="Barbie girl cutting cake with clapping hands"
            className="w-48 md:w-64 mx-auto drop-shadow-2xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Clapping sparkles */}
          <motion.span
            className="absolute -left-4 bottom-4 text-2xl"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            👏
          </motion.span>
          <motion.span
            className="absolute -right-4 bottom-4 text-2xl"
            animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
          >
            👏
          </motion.span>
        </motion.div>

        {/* Guest name input */}
        <motion.div
          className="mx-auto mb-6 max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Input
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Enter your name..."
            className="text-center text-lg py-5 rounded-2xl border-primary/30 focus:border-primary bg-card/80 backdrop-blur-sm"
            onKeyDown={(e) => e.key === 'Enter' && guestName.trim() && onOpen(guestName.trim())}
          />
        </motion.div>

        <motion.button
          onClick={() => guestName.trim() && onOpen(guestName.trim())}
          className={`relative px-10 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full text-xl font-semibold shadow-xl overflow-hidden group ${!guestName.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          whileHover={guestName.trim() ? { scale: 1.05 } : {}}
          whileTap={guestName.trim() ? { scale: 0.95 } : {}}
          style={{ animation: 'pulse-glow 2s infinite' }}
        >
          <span className="relative z-10 flex items-center gap-2">
            🎀 Open Invitation 🎀
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </motion.button>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
            fill="hsl(330, 85%, 60%)"
            opacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
};

export default LandingSection;
