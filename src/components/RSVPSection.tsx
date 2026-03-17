import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Confetti from './Confetti';
import Sparkles from './Sparkles';

interface RSVPProps {
  childName: string;
}

const RSVPSection: React.FC<RSVPProps> = ({ childName }) => {
  const [guestName, setGuestName] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (guestName.trim()) setAccepted(true);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-secondary/5">
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
              <div className="mb-6">
                <Input
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Enter your name..."
                  className="text-center text-lg py-6 rounded-2xl border-primary/30 focus:border-primary"
                  onKeyDown={(e) => e.key === 'Enter' && handleAccept()}
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleAccept}
                  disabled={!guestName.trim()}
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
            <Confetti count={50} />
            <Sparkles count={30} />

            <motion.div
              className="bg-card p-8 md:p-10 rounded-3xl shadow-2xl border border-border relative overflow-hidden"
              style={{ animation: 'pulse-glow 2s infinite' }}
            >
              <motion.div className="text-6xl md:text-7xl mb-4"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎀
              </motion.div>

              <motion.h2 className="font-cursive text-4xl md:text-5xl barbie-text mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Thank You!
              </motion.h2>

              <motion.p className="text-lg font-dancing text-secondary mb-1"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >Dear</motion.p>

              <motion.h3 className="text-3xl md:text-4xl font-cursive text-primary mb-4"
                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, type: 'spring' }}
              >{guestName}</motion.h3>

              <motion.p className="text-muted-foreground font-dancing text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
              >
                You are cordially invited to<br />
                <span className="text-primary font-semibold">{childName}'s Birthday Party!</span><br />
                We're so excited to celebrate with you! 👑
              </motion.p>

              <motion.div className="flex justify-center gap-3 md:gap-4 mt-6 text-3xl md:text-4xl flex-wrap"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
              >
                {['🎀', '🎁', '🎂', '🐘', '🐱'].map((e, i) => (
                  <motion.span key={i} animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                  >{e}</motion.span>
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
