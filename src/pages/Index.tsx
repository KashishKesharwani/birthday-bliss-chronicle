import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingSection from '@/components/LandingSection';
import CelebrationSection from '@/components/CelebrationSection';
import JourneySection from '@/components/JourneySection';
import EventDetailsSection from '@/components/EventDetailsSection';
import BlessingsSection from '@/components/BlessingsSection';
import RSVPSection from '@/components/RSVPSection';
import FloatingBalloons from '@/components/FloatingBalloons';
import VideoSection from '@/components/VideoSection';

// ✨ CUSTOMIZE YOUR INVITATION HERE ✨
const INVITATION_CONFIG = {
  childName: 'Aaradhya',
  age: 2,
  date: 'March 15, 2026',
  day: 'Saturday',
  time: '4:00 PM - 8:00 PM',
  venue: 'Rainbow Party Hall',
  address: '123 Celebration Street, Happiness Nagar, Joy City - 400001',
  familyName: 'The Sharma Family',
  phone: '+91 98765 43210',
  email: 'sharma.family@email.com',
  mapsLink: 'https://maps.google.com',
};

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
              childName={INVITATION_CONFIG.childName}
              age={INVITATION_CONFIG.age}
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
            <EventDetailsSection
              date={INVITATION_CONFIG.date}
              day={INVITATION_CONFIG.day}
              time={INVITATION_CONFIG.time}
              venue={INVITATION_CONFIG.venue}
              address={INVITATION_CONFIG.address}
              familyName={INVITATION_CONFIG.familyName}
              phone={INVITATION_CONFIG.phone}
              email={INVITATION_CONFIG.email}
              mapsLink={INVITATION_CONFIG.mapsLink}
            />
            <BlessingsSection />
            <RSVPSection childName={INVITATION_CONFIG.childName} />

            <footer className="relative py-10 text-center bg-gradient-to-t from-primary/10 to-transparent">
              <motion.p
                className="font-dancing text-2xl text-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Made with 💖 for our little princess
              </motion.p>
              <p className="text-sm text-muted-foreground mt-2">
                🎀 Barbie Dreams & Magic 🎀
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
