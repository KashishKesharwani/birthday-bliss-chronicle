import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Confetti from './Confetti';
import Sparkles from './Sparkles';

const RSVPSection: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (guestName.trim()) {
      setAccepted(true);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-secondary/10">
      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="form"
            className="relative z-10 max-w-lg mx-auto px-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.h2
              className="font-cursive text-5xl md:text-7xl rainbow-text mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              RSVP
            </motion.h2>
            <p className="text-muted-foreground font-dancing text-xl mb-10">
              Let us know you're coming! 💌
            </p>

            <motion.div
              className="bg-card p-8 rounded-3xl shadow-xl border border-border"
              whileHover={{ y: -3 }}
            >
              <div className="mb-6 text-left">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Name ✨
                </label>
                <Input
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Enter your beautiful name..."
                  className="text-center text-lg py-6 rounded-2xl border-primary/30 focus:border-primary"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleAccept}
                  disabled={!guestName.trim()}
                  className="w-full py-6 text-lg rounded-2xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground font-semibold shadow-lg"
                >
                  🎉 Accept Invitation 🎉
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="thankyou"
            className="relative z-10 max-w-lg mx-auto px-6 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            <Confetti count={50} />
            <Sparkles count={30} />

            <motion.div
              className="bg-card p-10 rounded-3xl shadow-2xl border border-border relative overflow-hidden"
              style={{ animation: 'pulse-glow 2s infinite' }}
            >
              <motion.div
                className="text-7xl mb-6"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎉
              </motion.div>

              <motion.h2
                className="font-cursive text-4xl md:text-5xl rainbow-text mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Thank You!
              </motion.h2>

              <motion.p
                className="text-2xl font-dancing text-secondary mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Dear
              </motion.p>

              <motion.h3
                className="text-4xl font-cursive text-primary mb-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
              >
                {guestName}
              </motion.h3>

              <motion.p
                className="text-muted-foreground font-dancing text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                We're so excited to celebrate with you! 🌟
                <br />
                See you at the party! 🎈🎂
              </motion.p>

              <motion.div
                className="flex justify-center gap-4 mt-6 text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {['🎈', '🎁', '🎂', '🎊', '🌈'].map((e, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
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
