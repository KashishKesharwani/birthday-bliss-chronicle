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

// Party frame decorations for each photo
const frameDecorations = [
  { border: 'from-primary via-secondary to-accent', corners: ['🎈', '🎀', '⭐', '🎂'], label: 'Day 1' },
  { border: 'from-secondary via-accent to-primary', corners: ['💖', '🌟', '🎁', '🦋'], label: '3 Months' },
  { border: 'from-accent via-primary to-secondary', corners: ['🎀', '🎈', '👑', '💝'], label: '6 Months' },
  { border: 'from-primary via-accent to-secondary', corners: ['🌸', '⭐', '🎂', '🎈'], label: '9 Months' },
  { border: 'from-secondary via-primary to-accent', corners: ['👑', '💖', '🎀', '🌟'], label: '1 Year' },
  { border: 'from-accent via-secondary to-primary', corners: ['🎂', '🎈', '💝', '⭐'], label: 'Birthday!' },
  { border: 'from-primary via-secondary to-accent', corners: ['🎁', '🌸', '🎈', '💖'], label: 'With Family' },
  { border: 'from-secondary via-accent to-primary', corners: ['⭐', '🎀', '👑', '🎂'], label: 'Princess' },
];

const PartyPhotoFrame: React.FC<{
  index: number;
  decoration: typeof frameDecorations[0];
}> = ({ index, decoration }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -3 : 3 }}
      whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -1 : 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
    >
      {/* Outer party frame border */}
      <div className={`relative p-[3px] rounded-2xl bg-gradient-to-br ${decoration.border} shadow-lg group-hover:shadow-xl transition-shadow`}>
        {/* Scalloped/wavy inner border effect */}
        <div className="relative bg-card rounded-[13px] p-1.5 overflow-hidden">
          {/* Dotted party border */}
          <div className="relative rounded-xl border-[3px] border-dashed border-primary/30 overflow-hidden">
            {/* Photo placeholder */}
            <div className="aspect-square bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex flex-col items-center justify-center gap-2 relative">
              {/* Confetti/party pattern overlay */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px), radial-gradient(circle, hsl(var(--secondary)) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 10px 10px',
                }}
              />
              
              <Camera className="w-8 h-8 text-primary/30" />
              <span className="text-xs text-muted-foreground font-dancing text-sm">Add Photo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Corner decorations - balloons, stars etc */}
      {decoration.corners.map((emoji, ci) => (
        <motion.span
          key={ci}
          className="absolute text-lg md:text-xl pointer-events-none z-20"
          style={{
            top: ci < 2 ? '-8px' : 'auto',
            bottom: ci >= 2 ? '-8px' : 'auto',
            left: ci % 2 === 0 ? '-6px' : 'auto',
            right: ci % 2 === 1 ? '-6px' : 'auto',
          }}
          animate={{
            y: [0, ci < 2 ? -4 : 4, 0],
            rotate: [0, ci % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{ duration: 2 + ci * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Label ribbon */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20">
        <div className="px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full shadow-md">
          <span className="text-[10px] md:text-xs font-dancing text-primary-foreground font-semibold whitespace-nowrap">
            {decoration.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

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

            <motion.p
              className="relative z-10 mt-4 font-dancing text-lg md:text-xl text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              🎬 Our Princess's Journey Video
            </motion.p>
            <p className="relative z-10 text-xs md:text-sm text-muted-foreground mt-1">
              Add your video URL here
            </p>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-6">
        {/* Timeline line - hidden on mobile */}
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
            {/* Mobile: emoji on top */}
            <div className="md:hidden mb-3">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl shadow-lg"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
              >
                {item.emoji}
              </motion.div>
            </div>

            <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
              <motion.div
                className="bg-card p-5 md:p-6 rounded-2xl shadow-lg border border-border"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">{item.age}</span>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{item.description}</p>

                <motion.div
                  className="mt-3 w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50 flex items-center justify-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <Video className="w-4 h-4 text-primary/40" />
                  <span className="text-xs text-muted-foreground">Add photo/video</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Desktop: center emoji */}
            <div className="hidden md:flex w-2/12 justify-center">
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-lg z-10"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
              >
                {item.emoji}
              </motion.div>
            </div>

            <div className="hidden md:block w-5/12" />
          </motion.div>
        ))}
      </div>

      {/* Memory Gallery - Party Frame Layout */}
      <motion.div
        className="max-w-6xl mx-auto px-4 md:px-6 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Gallery heading with party decorations */}
        <div className="text-center mb-10 relative">
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.span
              className="text-2xl md:text-3xl"
              animate={{ rotate: [-10, 10, -10], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎈
            </motion.span>
            <motion.span
              className="text-xl md:text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🎀
            </motion.span>
            <motion.span
              className="text-2xl md:text-3xl"
              animate={{ rotate: [10, -10, 10], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              🎈
            </motion.span>
          </div>
          
          <h3 className="font-cursive text-4xl md:text-5xl barbie-text mb-3">
            Memory Gallery
          </h3>
          <p className="font-dancing text-lg md:text-xl text-muted-foreground">
            📸 Precious moments captured forever ✨
          </p>

          {/* Confetti line decoration */}
          <div className="flex justify-center gap-1.5 mt-4">
            {['🌟', '💖', '⭐', '🎀', '✨', '💝', '🌟', '💖', '⭐'].map((e, i) => (
              <motion.span
                key={i}
                className="text-xs md:text-sm opacity-50"
                animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -3, 0] }}
                transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
              >
                {e}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Photo frames grid - responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {frameDecorations.map((decoration, i) => (
            <PartyPhotoFrame key={i} index={i} decoration={decoration} />
          ))}
        </div>

        {/* Bottom party banner */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full border border-border">
            <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>⭐</motion.span>
            <span className="font-dancing text-base md:text-lg text-primary">More memories coming soon!</span>
            <motion.span animate={{ rotate: [360, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>⭐</motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JourneySection;
