import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Star, Heart } from 'lucide-react';
import MemoryGallery from './MemoryGallery';

interface JourneyItem {
  age: string;
  title: string;
  description: string;
  emoji: string;
  image: string;
  color: string;
}

const journeyData: JourneyItem[] = [
  { age: 'Born', title: 'Hello World! 👋', description: 'The day our little princess arrived and filled our lives with joy', emoji: '👶', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&h=400&fit=crop', color: 'from-pink-400 to-rose-500' },
  { age: '3 months', title: 'First Smile 😊', description: 'That magical first smile that melted everyone\'s hearts', emoji: '😊', image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&h=400&fit=crop', color: 'from-purple-400 to-pink-500' },
  { age: '6 months', title: 'First Tooth 🦷', description: 'A tiny little tooth appeared and we celebrated!', emoji: '🦷', image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=500&h=400&fit=crop', color: 'from-amber-400 to-orange-500' },
  { age: '9 months', title: 'First Crawl 🐛', description: 'Started exploring every corner of the house', emoji: '🏃', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=400&fit=crop', color: 'from-emerald-400 to-teal-500' },
  { age: '1 year', title: 'First Steps 👟', description: 'Those wobbly first steps towards a big adventure', emoji: '👣', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=400&fit=crop', color: 'from-blue-400 to-indigo-500' },
  { age: 'Today', title: 'Birthday Princess 👑', description: 'Growing up so fast — time to celebrate our star!', emoji: '🌟', image: 'https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?w=500&h=400&fit=crop', color: 'from-primary to-secondary' },
];

const JourneySection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-accent/5 via-background to-secondary/5">
      {/* Animated background particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 4 + Math.random() * 8,
            height: 4 + Math.random() * 8,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `hsl(var(--primary) / ${0.1 + Math.random() * 0.15})`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{ duration: 4 + Math.random() * 4, delay: i * 0.3, repeat: Infinity }}
        />
      ))}

      {/* Floating emojis */}
      {[
        { emoji: '💖', x: 3, y: 8, size: 'text-3xl', dur: 4 },
        { emoji: '🎁', x: 92, y: 15, size: 'text-3xl', dur: 3.5 },
        { emoji: '💝', x: 8, y: 45, size: 'text-2xl', dur: 3.2 },
        { emoji: '🎀', x: 88, y: 55, size: 'text-2xl', dur: 3.8 },
        { emoji: '✨', x: 5, y: 75, size: 'text-3xl', dur: 3 },
        { emoji: '👑', x: 95, y: 80, size: 'text-2xl', dur: 3.6 },
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

      {/* Title */}
      <div className="text-center mb-6">
        <motion.div
          className="inline-flex items-center gap-2 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="font-dancing text-base md:text-lg text-primary tracking-widest uppercase">Precious Moments</span>
          <Sparkles className="w-5 h-5 text-primary" />
        </motion.div>

        <motion.h2
          className="font-cursive text-5xl md:text-7xl barbie-text mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>

        <motion.p
          className="text-muted-foreground font-dancing text-xl mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          From the first breath to today 🌟
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mx-auto w-32 h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </div>

      {/* Video Highlight Reel */}
      <motion.div
        className="max-w-3xl mx-auto px-4 md:px-6 mb-16 mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 group">
          {/* Video thumbnail with real image */}
          <div className="aspect-video relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=450&fit=crop"
              alt="Journey Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/30"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 80, height: 80, margin: '-8px' }}
                />
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl shadow-primary/40 cursor-pointer backdrop-blur-sm">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </motion.div>
              <motion.p
                className="mt-4 font-dancing text-lg md:text-xl text-white drop-shadow-lg"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎬 Watch Our Princess's Journey
              </motion.p>
            </div>

            {/* Bottom gradient label */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white/80 text-xs font-dancing">Highlight Reel • Add your video</span>
              </div>
            </div>
          </div>

          {/* Glowing border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 pointer-events-none" />
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        {/* Timeline line - desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 overflow-hidden">
          <motion.div
            className="w-full h-full bg-gradient-to-b from-primary via-secondary to-accent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
          />
        </div>

        {journeyData.map((item, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col md:flex-row items-center mb-12 md:mb-20 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Mobile timeline dot */}
            <div className="md:hidden mb-4">
              <motion.div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg shadow-primary/25`}
                whileInView={{ scale: [0, 1.3, 1], rotate: [0, 10, 0] }}
                viewport={{ once: true }}
              >
                {item.emoji}
              </motion.div>
            </div>

            {/* Card */}
            <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
              <motion.div
                className="relative bg-card rounded-3xl shadow-xl border border-border overflow-hidden group"
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Photo */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Age badge */}
                  <motion.div
                    className={`absolute top-3 ${i % 2 === 0 ? 'right-3' : 'left-3'} px-4 py-1.5 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white text-xs font-bold tracking-wider uppercase">{item.age}</span>
                  </motion.div>

                  {/* Heart icon */}
                  <motion.div
                    className="absolute top-3 left-3"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Heart className="w-5 h-5 text-white/70 fill-white/30" />
                  </motion.div>

                  {/* Bottom title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-lg">{item.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 md:p-5">
                  <p className="text-muted-foreground text-sm font-dancing leading-relaxed">{item.description}</p>

                  {/* Decorative stars */}
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.1 }}
                      >
                        <Star className="w-3.5 h-3.5 text-primary fill-primary/60" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Shimmer on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.div>
            </div>

            {/* Desktop timeline dot */}
            <div className="hidden md:flex w-2/12 justify-center relative">
              <motion.div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-xl z-10 border-4 border-background`}
                whileInView={{ scale: [0, 1.4, 1], rotate: [0, 15, 0] }}
                viewport={{ once: true }}
                transition={{ type: 'spring', bounce: 0.5 }}
              >
                {item.emoji}
              </motion.div>
              {/* Glowing ring */}
              <motion.div
                className={`absolute inset-0 m-auto w-16 h-16 rounded-full`}
                style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            </div>

            <div className="hidden md:block w-5/12" />
          </motion.div>
        ))}
      </div>

      {/* ========== MEMORY GALLERY ========== */}
      <motion.div
        className="max-w-5xl mx-auto px-4 md:px-6 mt-20"
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
