import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Grid3X3, BookOpen, Heart, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

type TabKey = 'barbie-frame' | 'memory-grid' | 'stories';

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: 'barbie-frame', label: 'Barbie Frame', icon: <Camera className="w-4 h-4" /> },
  { key: 'memory-grid', label: 'Memories Grid', icon: <Grid3X3 className="w-4 h-4" /> },
  { key: 'stories', label: 'Stories', icon: <BookOpen className="w-4 h-4" /> },
];

// Placeholder photos for demo
const barbiePhotos = [
  { id: 1, label: 'Day 1 👶', emoji: '👶' },
  { id: 2, label: '3 Months 😊', emoji: '😊' },
  { id: 3, label: '6 Months 🦷', emoji: '🦷' },
  { id: 4, label: '9 Months 🏃', emoji: '🏃' },
  { id: 5, label: '1 Year 👣', emoji: '👣' },
  { id: 6, label: 'Birthday! 🎂', emoji: '🎂' },
  { id: 7, label: 'Smiling 😄', emoji: '😄' },
  { id: 8, label: 'Princess 👑', emoji: '👑' },
];

const gridPhotos = [
  { id: 1, label: 'With Family', emoji: '👨‍👩‍👧' },
  { id: 2, label: 'Princess Mode', emoji: '👑' },
  { id: 3, label: 'First Cake', emoji: '🎂' },
  { id: 4, label: 'Party Time', emoji: '🎉' },
  { id: 5, label: 'Big Smile', emoji: '😊' },
  { id: 6, label: 'Dancing', emoji: '💃' },
  { id: 7, label: 'Gifts', emoji: '🎁' },
  { id: 8, label: 'Love', emoji: '💖' },
  { id: 9, label: 'Playing', emoji: '🧸' },
  { id: 10, label: 'Sleeping', emoji: '😴' },
  { id: 11, label: 'Bath Time', emoji: '🛁' },
  { id: 12, label: 'First Walk', emoji: '🚶' },
];

const stories = [
  { id: 1, title: 'The Day She Arrived', desc: 'Our world changed forever with the tiniest hello', emoji: '👶', photos: ['👶', '🏥', '💕'] },
  { id: 2, title: 'First Giggle', desc: 'That little laugh filled the whole room with joy', emoji: '😂', photos: ['😂', '😊', '🤣'] },
  { id: 3, title: 'Walking Queen', desc: 'Those first wobbly steps towards us', emoji: '👑', photos: ['👣', '🏃', '👑'] },
  { id: 4, title: 'Birthday Princess', desc: 'Growing up so fast, our little star shines bright', emoji: '🌟', photos: ['🎂', '🎉', '🎁'] },
  { id: 5, title: 'First Words', desc: 'Mama, Papa — the sweetest sounds ever', emoji: '🗣️', photos: ['🗣️', '💬', '❤️'] },
];

const MemoryGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('barbie-frame');

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-6 md:mb-10">
        <motion.h2
          className="font-pacifico text-3xl sm:text-4xl md:text-5xl lg:text-6xl barbie-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A Magical Memory Collection
        </motion.h2>
        <motion.p
          className="font-dancing text-base sm:text-lg md:text-xl text-muted-foreground mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          ✨ Precious moments of our little princess ✨
        </motion.p>
      </div>

      {/* ===== NAVIGATION TABS ===== */}
      <div className="flex justify-center px-2 mb-6 md:mb-8">
        <div className="inline-flex bg-muted/60 backdrop-blur-sm rounded-2xl p-1.5 border border-border/50 gap-1 flex-wrap justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {tab.icon}
              <span className="font-dancing">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <AnimatePresence mode="wait">
        {activeTab === 'barbie-frame' && (
          <motion.div key="bf" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <BarbieFrameTab />
          </motion.div>
        )}
        {activeTab === 'memory-grid' && (
          <motion.div key="mg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <MemoryGridTab />
          </motion.div>
        )}
        {activeTab === 'stories' && (
          <motion.div key="st" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <StoriesTab />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ===== BARBIE FRAME TAB ===== */
const BarbieFrameTab: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  return (
    <div className="relative">
      {/* Big decorative Barbie frame */}
      <div className="relative max-w-3xl mx-auto">
        {/* Outer gradient frame border */}
        <div className="p-[4px] md:p-[5px] rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl shadow-primary/20">
          <div className="bg-card rounded-[1.85rem] md:rounded-[2.3rem] p-3 md:p-5 relative overflow-hidden">
            {/* Sparkle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }} />

            {/* Main big photo display */}
            <div className="aspect-[4/3] md:aspect-[16/10] rounded-2xl bg-gradient-to-br from-primary/8 via-background to-secondary/8 border-2 border-dashed border-primary/25 flex flex-col items-center justify-center relative overflow-hidden mb-4">
              {/* Floating decorations */}
              {['✨', '🎀', '💖', '👑', '⭐'].map((e, i) => (
                <motion.span
                  key={i}
                  className="absolute text-lg md:text-2xl opacity-10"
                  style={{ left: `${10 + i * 18}%`, top: `${10 + (i % 3) * 25}%` }}
                  animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.05, 0.2, 0.05] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                >
                  {e}
                </motion.span>
              ))}

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPhoto}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-6xl sm:text-7xl md:text-8xl">{barbiePhotos[selectedPhoto].emoji}</span>
                  <span className="font-dancing text-lg md:text-2xl text-primary/70 font-bold">{barbiePhotos[selectedPhoto].label}</span>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={() => setSelectedPhoto(p => (p - 1 + barbiePhotos.length) % barbiePhotos.length)}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </button>
              <button
                onClick={() => setSelectedPhoto(p => (p + 1) % barbiePhotos.length)}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </button>

              {/* Frame label */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2">
                <div className="px-3 py-1 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full shadow-md">
                  <span className="font-dancing text-xs md:text-sm text-primary-foreground font-bold">👑 Princess Gallery</span>
                </div>
              </div>
            </div>

            {/* Thumbnail strip - scrollable on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {barbiePhotos.map((photo, i) => (
                <motion.button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(i)}
                  className={`flex-shrink-0 relative group`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`p-[2px] rounded-xl transition-all duration-300 ${
                    selectedPhoto === i
                      ? 'bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30'
                      : 'bg-border/50 hover:bg-primary/30'
                  }`}>
                    <div className="bg-card rounded-[10px] p-1">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all ${
                        selectedPhoto === i ? 'bg-primary/10' : 'bg-muted/30'
                      }`}>
                        <span className="text-xl sm:text-2xl md:text-3xl">{photo.emoji}</span>
                        <span className="text-[7px] sm:text-[8px] md:text-[10px] font-dancing text-muted-foreground font-semibold leading-tight text-center px-0.5">
                          {photo.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        {[
          { emoji: '🎀', pos: '-top-3 -left-3', size: 'text-2xl md:text-3xl' },
          { emoji: '👑', pos: '-top-3 -right-3', size: 'text-2xl md:text-3xl' },
          { emoji: '💖', pos: '-bottom-3 -left-3', size: 'text-xl md:text-2xl' },
          { emoji: '✨', pos: '-bottom-3 -right-3', size: 'text-xl md:text-2xl' },
        ].map((d, i) => (
          <motion.span
            key={i}
            className={`absolute ${d.pos} ${d.size} z-20 pointer-events-none`}
            animate={{ y: [0, -5, 0], rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
            transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
          >
            {d.emoji}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

/* ===== MEMORY GRID TAB ===== */
const MemoryGridTab: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {gridPhotos.map((photo, i) => (
          <motion.button
            key={photo.id}
            className="relative group text-left"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedPhoto(i)}
          >
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-primary/50 via-secondary/50 to-accent/50 shadow-md group-hover:shadow-xl group-hover:shadow-primary/20 transition-all">
              <div className="bg-card rounded-[14px] p-1.5">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                  <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform">{photo.emoji}</span>
                  <span className="text-[10px] md:text-xs text-muted-foreground font-dancing font-semibold">{photo.label}</span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-primary opacity-0 group-hover:opacity-40 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative bg-card rounded-3xl p-4 md:p-6 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex flex-col items-center justify-center gap-3 border border-primary/10">
                <span className="text-7xl md:text-8xl">{gridPhotos[selectedPhoto].emoji}</span>
                <span className="font-dancing text-xl md:text-2xl text-primary font-bold">{gridPhotos[selectedPhoto].label}</span>
              </div>
              {/* Navigation */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setSelectedPhoto(p => p !== null ? (p - 1 + gridPhotos.length) % gridPhotos.length : 0)}
                  className="px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 font-dancing text-sm text-primary transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setSelectedPhoto(p => p !== null ? (p + 1) % gridPhotos.length : 0)}
                  className="px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 font-dancing text-sm text-primary transition-colors"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ===== STORIES TAB ===== */
const StoriesTab: React.FC = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {stories.map((story, i) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        >
          <button
            className="w-full text-left"
            onClick={() => setExpandedStory(expandedStory === i ? null : i)}
          >
            <div className={`relative p-4 md:p-5 rounded-2xl border transition-all duration-300 ${
              expandedStory === i
                ? 'bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/30 shadow-lg shadow-primary/10'
                : 'bg-card border-border hover:border-primary/20 hover:shadow-md'
            }`}>
              <div className="flex items-center gap-3 md:gap-4">
                {/* Story icon */}
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-primary/25">
                  {story.emoji}
                </div>
                {/* Story info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-dancing text-lg md:text-xl font-bold text-foreground">{story.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-dancing mt-0.5">{story.desc}</p>
                </div>
                {/* Expand indicator */}
                <motion.div
                  animate={{ rotate: expandedStory === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <Sparkles className={`w-5 h-5 transition-colors ${expandedStory === i ? 'text-primary' : 'text-muted-foreground/40'}`} />
                </motion.div>
              </div>

              {/* Expanded photo gallery */}
              <AnimatePresence>
                {expandedStory === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="grid grid-cols-3 gap-2 md:gap-3">
                        {story.photos.map((photo, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: j * 0.1 }}
                            className="aspect-square rounded-xl bg-gradient-to-br from-primary/8 to-secondary/8 border border-primary/15 flex items-center justify-center"
                          >
                            <span className="text-3xl md:text-4xl">{photo}</span>
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-center font-dancing text-xs md:text-sm text-muted-foreground mt-3">
                        📸 Tap photos to view full size
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default MemoryGallery;
