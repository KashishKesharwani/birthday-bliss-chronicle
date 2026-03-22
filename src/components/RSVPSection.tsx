import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

/* ── Burst Particle (cracker + balloon pieces) ── */
const BurstParticles: React.FC<{ count?: number }> = ({ count = 60 }) => {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const distance = 120 + Math.random() * 280;
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance - 100,
        color: [
          'hsl(330, 85%, 60%)', 'hsl(42, 90%, 55%)', 'hsl(280, 60%, 70%)',
          'hsl(310, 70%, 55%)', 'hsl(180, 70%, 50%)', 'hsl(120, 60%, 50%)',
          'hsl(350, 80%, 65%)', 'hsl(50, 95%, 60%)', 'hsl(0, 0%, 100%)',
        ][i % 9],
        size: 3 + Math.random() * 7,
        delay: Math.random() * 0.3,
        duration: 1.2 + Math.random() * 1.5,
        shape: ['circle', 'rect', 'star'][i % 3] as 'circle' | 'rect' | 'star',
        rotation: Math.random() * 720,
      };
    }), [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute left-1/2 top-1/2"
          style={{
            width: p.size,
            height: p.shape === 'rect' ? p.size * 0.5 : p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'star' ? '2px' : '1px',
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: p.x,
            y: p.y,
            opacity: [1, 1, 0],
            scale: [0, 1.5, 0.5],
            rotate: p.rotation,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

/* ── Balloon Pop Effect ── */
const BalloonPop: React.FC = () => {
  const balloons = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      startX: -50 + Math.random() * 100,
      color: [
        'hsl(330, 85%, 60%)', 'hsl(280, 60%, 70%)', 'hsl(42, 90%, 55%)',
        'hsl(310, 70%, 55%)', 'hsl(180, 60%, 55%)', 'hsl(350, 80%, 65%)',
        'hsl(120, 50%, 55%)', 'hsl(50, 90%, 55%)',
      ][i],
      size: 35 + Math.random() * 20,
      delay: 0.2 + i * 0.15,
    })), []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="absolute bottom-0"
          style={{ left: `${50 + b.startX * 0.4}%` }}
          initial={{ y: 100, opacity: 0, scale: 0 }}
          animate={{
            y: [100, -300 - Math.random() * 200],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1.3, 0],
          }}
          transition={{ duration: 2, delay: b.delay, ease: 'easeOut' }}
        >
          <svg width={b.size} height={b.size * 1.3} viewBox="0 0 50 65">
            <defs>
              <radialGradient id={`rpop-${b.id}`} cx="35%" cy="35%">
                <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                <stop offset="100%" stopColor={b.color} />
              </radialGradient>
            </defs>
            <ellipse cx="25" cy="22" rx="20" ry="22" fill={`url(#rpop-${b.id})`} />
            <polygon points="25,44 22,48 28,48" fill={b.color} />
            <line x1="25" y1="48" x2="25" y2="65" stroke={b.color} strokeWidth="0.8" opacity="0.6" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

/* ── Firework Bursts ── */
const FireworkBursts: React.FC = () => {
  const bursts = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: 15 + Math.random() * 70,
      y: 10 + Math.random() * 40,
      delay: 0.5 + i * 0.4,
      color: ['hsl(330, 85%, 60%)', 'hsl(42, 90%, 55%)', 'hsl(280, 60%, 70%)', 'hsl(180, 70%, 50%)', 'hsl(50, 95%, 60%)'][i],
      size: 60 + Math.random() * 40,
    })), []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {bursts.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 2.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 1.2, delay: b.delay, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
};

/* ── Sparkle Rain ── */
const SparkleRain: React.FC<{ count?: number }> = ({ count = 40 }) => {
  const sparkles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
      size: 6 + Math.random() * 10,
      color: ['hsl(330, 85%, 60%)', 'hsl(42, 90%, 55%)', 'hsl(0, 0%, 100%)'][i % 3],
    })), [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{ left: `${s.x}%`, top: -20 }}
          animate={{
            y: [0, 600],
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 20 20">
            <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill={s.color} opacity="0.8" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

/* ── Main RSVP Section ── */
interface RSVPProps {
  childName: string;
}

const RSVPSection: React.FC<RSVPProps> = ({ childName }) => {
  const guestName = 'Kashish';
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-secondary/5">
      {/* Floating animals */}
      <motion.span className="absolute top-[10%] left-[5%] text-5xl opacity-15" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}>🐘</motion.span>
      <motion.span className="absolute bottom-[15%] right-[5%] text-5xl opacity-15" animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity }}>🐱</motion.span>
      <motion.span className="absolute top-[50%] right-[8%] text-5xl opacity-15" animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>🐄</motion.span>

      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="form"
            className="relative z-10 max-w-lg mx-auto px-4 md:px-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.h2
              className="font-cursive text-5xl md:text-7xl barbie-text mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              RSVP
            </motion.h2>
            <p className="text-muted-foreground font-dancing text-xl mb-10">
              Accept the invitation to join the party! 💌
            </p>

            <motion.div className="bg-card p-6 md:p-8 rounded-3xl shadow-xl border border-border" whileHover={{ y: -3 }}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleAccept}
                  className="w-full py-6 text-lg rounded-2xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground font-semibold shadow-lg"
                >
                  🎀 Accept Invitation 🎀
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="thankyou"
            className="relative z-10 max-w-lg mx-auto px-4 md:px-6 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            {/* 🎆 All celebration effects */}
            <BurstParticles count={70} />
            <BalloonPop />
            <FireworkBursts />
            <SparkleRain count={45} />

            <motion.div
              className="bg-card p-8 md:p-10 rounded-3xl shadow-2xl border border-border relative overflow-hidden"
              style={{ animation: 'pulse-glow 2s infinite' }}
            >
              {/* Big celebration emoji */}
              <motion.div
                className="text-7xl md:text-8xl mb-2"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: [0, 1.4, 1], rotate: [-180, 20, 0] }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                🎉
              </motion.div>

              <motion.div
                className="text-5xl md:text-6xl mb-4"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎀
              </motion.div>

              <motion.h2
                className="font-cursive text-4xl md:text-5xl barbie-text mb-2"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Thank You, {guestName}!
              </motion.h2>

              <motion.p
                className="text-lg font-dancing text-secondary mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Dear
              </motion.p>

              <motion.h3
                className="text-3xl md:text-4xl font-cursive text-primary mb-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring', bounce: 0.6 }}
              >
                {guestName}
              </motion.h3>

              <motion.p
                className="text-muted-foreground font-dancing text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                You are cordially invited! 💌
              </motion.p>

              <motion.p
                className="text-muted-foreground font-dancing text-base md:text-lg leading-relaxed mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Your presence has been confirmed.<br />
                We are excited to celebrate{' '}
                <span className="text-primary font-semibold">{childName}'s 2nd Birthday</span>{' '}
                with you! 🎂💖
              </motion.p>

              <motion.p
                className="text-primary font-semibold font-dancing text-xl mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                See you at the party! 🎉🎀
              </motion.p>

              {/* Bouncing emojis */}
              <motion.div
                className="flex justify-center gap-3 md:gap-4 mt-6 text-3xl md:text-4xl flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {['🎆', '🎀', '🎁', '🎂', '🎈', '🎊'].map((e, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -12, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
                  >
                    {e}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RSVPSection;
