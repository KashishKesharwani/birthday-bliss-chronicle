import React from 'react';
import { motion } from 'framer-motion';

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

const JourneySection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-accent/5 via-background to-secondary/5">
      {/* Background animals */}
      <motion.span className="absolute top-10 left-6 text-4xl opacity-20" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>🐘</motion.span>
      <motion.span className="absolute top-20 right-8 text-4xl opacity-20" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>🐱</motion.span>
      <motion.span className="absolute bottom-20 left-10 text-4xl opacity-20" animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity }}>🐄</motion.span>

      <motion.h2
        className="font-cursive text-5xl md:text-7xl text-center barbie-text mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Journey
      </motion.h2>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2" />

        {journeyData.map((item, i) => (
          <motion.div
            key={i}
            className={`relative flex items-center mb-16 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <motion.div
                className="bg-card p-6 rounded-2xl shadow-lg border border-border"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">{item.age}</span>
                <h3 className="text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
              </motion.div>
            </div>

            <div className="w-2/12 flex justify-center">
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-lg z-10"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
              >
                {item.emoji}
              </motion.div>
            </div>

            <div className="w-5/12" />
          </motion.div>
        ))}
      </div>

      {/* Gallery */}
      <motion.div
        className="max-w-6xl mx-auto px-6 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="font-dancing text-3xl text-center text-secondary mb-8">
          📸 Memory Gallery
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
            >
              <div className="text-center">
                <span className="text-5xl">{['📷', '🎀', '👶', '🎈', '🎂', '🎁', '👑', '💝'][i]}</span>
                <p className="text-xs text-muted-foreground mt-2">Add Photo</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default JourneySection;
