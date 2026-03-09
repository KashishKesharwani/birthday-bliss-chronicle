import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-secondary/5 via-background to-accent/5">
      {/* Background hearts */}
      {[
        { emoji: '💖', x: 5, y: 15, dur: 3.5 },
        { emoji: '🎬', x: 90, y: 20, dur: 4 },
        { emoji: '💝', x: 8, y: 70, dur: 3.2 },
        { emoji: '🌟', x: 92, y: 75, dur: 3.8 },
      ].map((item, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl opacity-15 pointer-events-none"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: item.dur, delay: i * 0.3, repeat: Infinity }}
        >
          {item.emoji}
        </motion.span>
      ))}

      <motion.h2
        className="font-cursive text-5xl md:text-7xl text-center barbie-text mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Story
      </motion.h2>
      <motion.p
        className="text-center text-muted-foreground font-dancing text-xl mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Watch our princess grow 🎬
      </motion.p>

      <motion.div
        className="max-w-3xl mx-auto px-6"
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
              className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ animation: 'pulse-glow 2s infinite' }}
            >
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            </motion.div>

            <motion.p
              className="relative z-10 mt-4 font-dancing text-xl text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              🎬 Our Princess's Journey Video
            </motion.p>
            <p className="relative z-10 text-sm text-muted-foreground mt-1">
              Add your video URL here
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
