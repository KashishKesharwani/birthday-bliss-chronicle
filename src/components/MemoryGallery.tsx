import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, Star, Sparkles, Image } from 'lucide-react';

type TabKey = 'barbie-frame' | 'memory-grid' | 'stories';

const tabs: { key: TabKey; label: string; emoji: string }[] = [
  { key: 'barbie-frame', label: 'Barbie Frame', emoji: '🎀' },
  { key: 'memory-grid', label: 'Memory Grid', emoji: '📸' },
  { key: 'stories', label: 'Stories', emoji: '✨' },
];

const framePhotos = [
  { label: 'Day 1 👶', emoji: '👶' },
  { label: '3 Months 😊', emoji: '😊' },
  { label: '6 Months 🦷', emoji: '🦷' },
  { label: '9 Months 🏃', emoji: '🏃' },
  { label: '1 Year 👣', emoji: '👣' },
  { label: 'Birthday! 🎂', emoji: '🎂' },
];

const gridPhotos = [
  { label: 'With Family 👨‍👩‍👧', emoji: '👨‍👩‍👧' },
  { label: 'Princess 👑', emoji: '👑' },
  { label: 'First Cake 🎂', emoji: '🎂' },
  { label: 'Party Time 🎉', emoji: '🎉' },
  { label: 'Smile 😊', emoji: '😊' },
  { label: 'Dancing 💃', emoji: '💃' },
  { label: 'Gifts 🎁', emoji: '🎁' },
  { label: 'Love 💖', emoji: '💖' },
];

const stories = [
  { title: 'The Day She Arrived', desc: 'Our world changed forever with the tiniest hello', emoji: '👶', color: 'from-primary to-secondary' },
  { title: 'First Giggle', desc: 'That little laugh filled the whole room with joy', emoji: '😂', color: 'from-secondary to-accent' },
  { title: 'Walking Queen', desc: 'Those first wobbly steps towards us', emoji: '👑', color: 'from-accent to-primary' },
  { title: 'Birthday Princess', desc: 'Growing up so fast, our little star shines bright', emoji: '🌟', color: 'from-primary to-accent' },
];

const MemoryGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('barbie-frame');

  return (
    <div className="relative">
      {/* ===== OUTER DECORATIVE FRAME ===== */}
      <div className="relative p-[3px] md:p-[4px] rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl">
        <div className="bg-card rounded-[2.3rem] overflow-hidden">
          {/* Confetti dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none rounded-[2.3rem]"
            style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1.5px, transparent 1.5px), radial-gradient(circle, hsl(var(--secondary)) 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
              backgroundPosition: '0 0, 14px 14px',
            }}
          />

          {/* ===== HEADER: Barbie World Logo ===== */}
          <div className="relative pt-8 pb-2 text-center">
            {/* Floating sparkles */}
            {['✨', '💖', '⭐', '🎀', '⭐', '💖', '✨'].map((e, i) => (
              <motion.span
                key={i}
                className="absolute text-sm md:text-base opacity-30"
                style={{ left: `${10 + i * 13}%`, top: `${15 + (i % 3) * 20}%` }}
                animate={{ y: [0, -6, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              >
                {e}
              </motion.span>
            ))}
            <motion.h2
              className="font-pacifico text-4xl sm:text-5xl md:text-6xl barbie-text relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Barbie World
            </motion.h2>
            {/* Crown on top */}
            <motion.span
              className="absolute left-1/2 -translate-x-1/2 -top-1 text-2xl md:text-3xl"
              animate={{ y: [0, -4, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              👑
            </motion.span>
          </div>

          {/* ===== SUB-HEADER ===== */}
          <motion.p
            className="text-center font-dancing text-lg sm:text-xl md:text-2xl text-muted-foreground pb-5 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ✨ A Magical Memory Gallery ✨
          </motion.p>

          {/* Sparkle divider */}
          <div className="flex justify-center gap-2 pb-4">
            {['🎀', '💎', '🌸', '💎', '🎀'].map((e, i) => (
              <motion.span
                key={i}
                className="text-xs opacity-40"
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.8, delay: i * 0.15, repeat: Infinity }}
              >
                {e}
              </motion.span>
            ))}
          </div>

          {/* ===== NAVIGATION TABS ===== */}
          <div className="flex justify-center px-4 pb-6">
            <div className="inline-flex bg-muted/50 rounded-full p-1 sm:p-1.5 border border-border gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-dancing font-semibold transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="mr-1">{tab.emoji}</span>
                  {tab.label}
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ===== MAIN CONTENT AREA ===== */}
          <div className="px-4 sm:px-6 md:px-8 pb-8 relative z-10">
            <AnimatePresence mode="wait">
              {activeTab === 'barbie-frame' && (
                <motion.div
                  key="barbie-frame"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <BarbieFrameTab />
                </motion.div>
              )}
              {activeTab === 'memory-grid' && (
                <motion.div
                  key="memory-grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <MemoryGridTab />
                </motion.div>
              )}
              {activeTab === 'stories' && (
                <motion.div
                  key="stories"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <StoriesTab />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom decorations */}
          <div className="flex justify-center gap-3 pb-6">
            {['🎀', '💖', '🎁', '🌟', '🎂', '🌟', '🎁', '💖', '🎀'].map((e, i) => (
              <motion.span
                key={i}
                className="text-sm opacity-30"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, delay: i * 0.12, repeat: Infinity }}
              >
                {e}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      {[
        { emoji: '🎈', pos: '-top-4 -left-3 md:-top-5 md:-left-4', size: 'text-3xl md:text-4xl' },
        { emoji: '🎈', pos: '-top-4 -right-3 md:-top-5 md:-right-4', size: 'text-3xl md:text-4xl' },
        { emoji: '🎁', pos: '-bottom-3 -left-3 md:-bottom-4 md:-left-4', size: 'text-2xl md:text-3xl' },
        { emoji: '🎁', pos: '-bottom-3 -right-3 md:-bottom-4 md:-right-4', size: 'text-2xl md:text-3xl' },
      ].map((d, i) => (
        <motion.span
          key={i}
          className={`absolute ${d.pos} ${d.size} z-20 pointer-events-none`}
          animate={{ y: [0, -6, 0], rotate: [0, i % 2 === 0 ? 8 : -8, 0] }}
          transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
        >
          {d.emoji}
        </motion.span>
      ))}
    </div>
  );
};

/* ===== BARBIE FRAME TAB ===== */
const BarbieFrameTab: React.FC = () => (
  <div className="relative">
    {/* Central interactive Barbie frame */}
    <div className="max-w-md mx-auto mb-8">
      <div className="relative p-[3px] rounded-[2rem] bg-gradient-to-br from-primary via-accent to-secondary shadow-xl">
        <div className="bg-card rounded-[1.85rem] p-3">
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-3 relative overflow-hidden">
            {/* Sparkle overlay */}
            {['✨', '🎀', '💖', '⭐'].map((e, i) => (
              <motion.span
                key={i}
                className="absolute text-xl opacity-15"
                style={{ left: `${20 + i * 20}%`, top: `${15 + i * 18}%` }}
                animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
              >
                {e}
              </motion.span>
            ))}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Camera className="w-10 h-10 text-primary/30" />
            </motion.div>
            <span className="font-dancing text-lg text-primary/50">Your Princess Photo</span>
            <span className="text-xs text-muted-foreground">Tap to add your star photo ⭐</span>
          </div>
        </div>
        {/* Frame label */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
          <div className="px-4 py-1.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg">
            <span className="font-dancing text-sm text-primary-foreground font-bold">👑 Princess Frame</span>
          </div>
        </div>
      </div>
    </div>

    {/* Timeline photo strip */}
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mt-8">
      {framePhotos.map((slot, i) => (
        <motion.div
          key={i}
          className="relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.08, zIndex: 10 }}
        >
          <div className="p-[2px] rounded-xl bg-gradient-to-br from-primary/50 via-secondary/50 to-accent/50 shadow-md group-hover:shadow-lg transition-shadow">
            <div className="bg-card rounded-[10px] p-1">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col items-center justify-center gap-1 border border-dashed border-primary/20">
                <span className="text-2xl sm:text-3xl">{slot.emoji}</span>
                <Camera className="w-3 h-3 text-primary/25" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 z-10">
            <div className="px-1.5 py-0.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-sm">
              <span className="text-[7px] sm:text-[9px] font-dancing text-primary-foreground font-semibold whitespace-nowrap">
                {slot.label}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ===== MEMORY GRID TAB ===== */
const MemoryGridTab: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
    {gridPhotos.map((slot, i) => (
      <motion.div
        key={i}
        className="relative group"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.06, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.05, zIndex: 10 }}
      >
        <div className="p-[2px] rounded-2xl bg-gradient-to-br from-primary/60 via-secondary/60 to-accent/60 shadow-md group-hover:shadow-xl transition-shadow">
          <div className="bg-card rounded-[14px] p-1.5">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex flex-col items-center justify-center gap-2 relative overflow-hidden border border-dashed border-primary/15">
              <span className="text-3xl md:text-4xl">{slot.emoji}</span>
              <div className="flex items-center gap-1">
                <Image className="w-3.5 h-3.5 text-primary/25" />
                <span className="text-[10px] md:text-xs text-muted-foreground font-dancing">Add Photo</span>
              </div>
            </div>
          </div>
        </div>
        {/* Label ribbon */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10">
          <div className="px-2.5 py-0.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-sm">
            <span className="text-[8px] md:text-[10px] font-dancing text-primary-foreground font-semibold whitespace-nowrap">
              {slot.label}
            </span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

/* ===== STORIES TAB ===== */
const StoriesTab: React.FC = () => (
  <div className="space-y-4">
    {stories.map((story, i) => (
      <motion.div
        key={i}
        className="relative group"
        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.1, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-start gap-4 p-4 md:p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
          {/* Story icon */}
          <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${story.color} flex items-center justify-center text-2xl md:text-3xl shadow-lg`}>
            {story.emoji}
          </div>
          {/* Story content */}
          <div className="flex-1 min-w-0">
            <h4 className="font-dancing text-lg md:text-xl font-bold text-foreground">{story.title}</h4>
            <p className="text-sm text-muted-foreground mt-1 font-dancing">{story.desc}</p>
            {/* Mini photo slot */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-dashed border-primary/20 flex items-center justify-center">
                <Camera className="w-4 h-4 text-primary/30" />
              </div>
              <span className="text-[10px] text-muted-foreground font-dancing">Add a memory photo</span>
            </div>
          </div>
          {/* Decorative sparkle */}
          <motion.span
            className="absolute top-2 right-3 text-sm opacity-30"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            ✨
          </motion.span>
        </div>
      </motion.div>
    ))}
  </div>
);

export default MemoryGallery;
