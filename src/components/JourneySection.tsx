import React from 'react';
import { motion } from 'framer-motion';
import { Play, Video, Camera } from 'lucide-react';

interface JourneyItem {
  age: string;
  title: string;
  description: string;
  emoji: string;
}

const journeyData: JourneyItem[] = [
  { age: 'Born', title: 'Hello World! 👋', description: 'The day our little princess arrived', emoji: '👶' },
  { age: '3 months', title: 'First Smile 😊', description: 'That magical first smile melted our hearts', emoji: '😊' },
  { age: '6 months', title: 'First Tooth 🦷', description: 'A tiny tooth appeared!', emoji: '🦷' },
  { age: '9 months', title: 'First Crawl 🐛', description: 'Started exploring the world on all fours', emoji: '🏃' },
  { age: '1 year', title: 'First Steps 👟', description: 'Walking into a world of adventure', emoji: '👣' },
  { age: 'Today', title: 'Birthday Princess 👑', description: 'Growing up so fast, time to celebrate!', emoji: '🌟' },
];

const photoSlots = [
  { label: 'Day 1 👶', emoji: '👶' },
  { label: '3 Months 😊', emoji: '😊' },
  { label: '6 Months 🦷', emoji: '🦷' },
  { label: '9 Months 🏃', emoji: '🏃' },
  { label: '1 Year 👣', emoji: '👣' },
  { label: 'Birthday! 🎂', emoji: '🎂' },
  { label: 'With Family 👨‍👩‍👧', emoji: '👨‍👩‍👧' },
  { label: 'Princess 👑', emoji: '👑' },
];

const JourneySection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-accent/5 via-background to-secondary/5">
      {/* Floating hearts & gifts background */}
      {[
        { emoji: '💖', x: 3, y: 8, size: 'text-3xl', dur: 4 },
        { emoji: '🎁', x: 92, y: 15, size: 'text-3xl', dur: 3.5 },
        { emoji: '💝', x: 8, y: 45, size: 'text-2xl', dur: 3.2 },
        { emoji: '🎁', x: 88, y: 55, size: 'text-2xl', dur: 3.8 },
        { emoji: '💖', x: 5, y: 75, size: 'text-3xl', dur: 3 },
        { emoji: '💝', x: 95, y: 80, size: 'text-2xl', dur: 3.6 },
      ].map((item, i) => (
        <motion.span
          key={`bg-${i}`}
          className={`absolute ${item.size} opacity-15 pointer-events-none`}
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{ y: [0, -15, 0], rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
          transition={{ duration: item.dur, delay: i * 0.3, repeat: Infinity }}
        >
          {item.emoji}
        </motion.span>
      ))}

      <motion.h2
        className="font-cursive text-5xl md:text-7xl text-center barbie-text mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Journey
      </motion.h2>

      <motion.p
        className="text-center text-muted-foreground font-dancing text-xl mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        From the first breath to today 🌟
      </motion.p>

      {/* Video Highlight Reel */}
      <motion.div
        className="max-w-3xl mx-auto px-4 md:px-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border shadow-xl">
          <div className="aspect-video flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
            <div className="absolute inset-0 pointer-events-none">
              {['🎀', '💖', '🌟', '✨', '🎂', '👑'].map((e, i) => (
                <motion.span
                  key={i}
                  className="absolute text-2xl opacity-20"
                  style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
                  animate={{ y: [0, -10, 0], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
                >
                  {e}
                </motion.span>
              ))}
            </div>
            <motion.div
              className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ animation: 'pulse-glow 2s infinite' }}
            >
              <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1" fill="currentColor" />
            </motion.div>
            <motion.p className="relative z-10 mt-4 font-dancing text-lg md:text-xl text-primary">
              🎬 Our Princess's Journey Video
            </motion.p>
            <p className="relative z-10 text-xs md:text-sm text-muted-foreground mt-1">Add your video URL here</p>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-6">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2" />
        {journeyData.map((item, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col md:flex-row items-center mb-12 md:mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:hidden mb-3">
              <motion.div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl shadow-lg" whileInView={{ scale: [0, 1.2, 1] }} viewport={{ once: true }}>
                {item.emoji}
              </motion.div>
            </div>
            <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
              <motion.div className="bg-card p-5 md:p-6 rounded-2xl shadow-lg border border-border" whileHover={{ scale: 1.03, y: -5 }}>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">{item.age}</span>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                <motion.div className="mt-3 w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50 flex items-center justify-center gap-2 cursor-pointer" whileHover={{ scale: 1.02 }}>
                  <Video className="w-4 h-4 text-primary/40" />
                  <span className="text-xs text-muted-foreground">Add photo/video</span>
                </motion.div>
              </motion.div>
            </div>
            <div className="hidden md:flex w-2/12 justify-center">
              <motion.div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-lg z-10" whileInView={{ scale: [0, 1.2, 1] }} viewport={{ once: true }}>
                {item.emoji}
              </motion.div>
            </div>
            <div className="hidden md:block w-5/12" />
          </motion.div>
        ))}
      </div>

      {/* ========== BARBIE WORLD MEMORY GALLERY ========== */}
      <motion.div
        className="max-w-5xl mx-auto px-4 md:px-6 mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <MemoryGallery />
      </motion.div>
    </section>
  );
};

export default JourneySection;
