import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingSection from '@/components/LandingSection';
import CelebrationSection from '@/components/CelebrationSection';
import JourneySection from '@/components/JourneySection';
import EventDetailsSection from '@/components/EventDetailsSection';
import RSVPSection from '@/components/RSVPSection';
import FloatingBalloons from '@/components/FloatingBalloons';

const Index = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="landing"
            exit={{ opacity: 0, scale: 0.8, y: -100 }}
            transition={{ duration: 0.8 }}
          >
            <LandingSection
              childName="Aarav"
              age={2}
              onOpen={() => setIsOpened(true)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FloatingBalloons count={10} />
            <CelebrationSection />
            <JourneySection />
            <EventDetailsSection />
            <RSVPSection />

            {/* Footer */}
            <footer className="relative py-10 text-center bg-gradient-to-t from-primary/10 to-transparent">
              <motion.p
                className="font-dancing text-2xl text-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Made with 💖 for our little star
              </motion.p>
              <p className="text-sm text-muted-foreground mt-2">
                🌈 Rainbows & Magic 🌈
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
